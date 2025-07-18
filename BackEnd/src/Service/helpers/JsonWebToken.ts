import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IUser } from "../../models/User";

dotenv.config();

export function createJWT(data: IUser) {
  const token = jwt.sign(data, process.env.JWT_KEY as string);
  return token;
}

export function decodeJWT(token: string) {
  const decoded = jwt.decode(token);
}

export function verifyJWT(token: string) {
  const verify = jwt.verify(token, process.env.JWT_KEY as string);
  return verify;
}
