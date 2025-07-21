import { Request, Response } from "express";
import {
  createJWT,
  verifyRefreshJWT,
} from "../../Service/helpers/JsonWebToken";
import { JwtPayload } from "jsonwebtoken";

export async function refreshToken(token: string) {
  try {
    const decode = (await verifyRefreshJWT(token)) as JwtPayload;

    const newToken = await createJWT(decode);

    return newToken;
  } catch (err: any) {
    throw new Error("Refresh token expirado");
  }
}
