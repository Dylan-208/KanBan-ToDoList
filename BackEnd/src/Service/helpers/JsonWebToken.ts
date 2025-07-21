import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { IUser } from "../../models/User";

dotenv.config();

export async function createJWT(
  data: IUser | { id: string; email: string } | JwtPayload
) {
  const token = jwt.sign(data, process.env.JWT_KEY as string, {
    expiresIn: "1d",
  });
  const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_KEY as string, {
    expiresIn: "7d",
  });
  return { token, refreshToken };
}

export async function decodeJWT(token: string) {
  const decoded = jwt.decode(token);
  return decoded;
}

export async function verifyJWT(token: string) {
  const verify = jwt.verify(token, process.env.JWT_KEY as string);
  return verify;
}

export async function verifyRefreshJWT(tokenRefresh: string) {
  const verify = jwt.verify(
    tokenRefresh,
    process.env.JWT_REFRESH_KEY as string
  );
  return verify as JwtPayload;
}
