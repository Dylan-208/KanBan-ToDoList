import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { IUser } from "../../models/User";

dotenv.config();

export function createJWT(
  data: IUser | { id: string; email: string } | JwtPayload
) {
  const token = jwt.sign(data, process.env.JWT_KEY as string, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_KEY as string, {
    expiresIn: "7d",
  });
  return { token, refreshToken };
}

export function decodeJWT(token: string) {
  const decoded = jwt.decode(token);
  return decoded;
}

export function verifyJWT(token: string) {
  const verify = jwt.verify(token, process.env.JWT_KEY as string);
  return verify;
}

export function verifyRefreshJWT(tokenRefresh: string) {
  const verify = jwt.verify(
    tokenRefresh,
    process.env.JWT_REFRESH_KEY as string
  );
  return verify;
}
