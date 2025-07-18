import { Request, Response } from "express";
import {
  createJWT,
  verifyRefreshJWT,
} from "../../Service/helpers/JsonWebToken";
import { JwtPayload } from "jsonwebtoken";

export function refreshToken(req: Request, res: Response) {
  const { refreshToken } = req.body;

  if (!refreshToken)
    return res.status(401).json({ Error: "Refresh token é necessário" });

  try {
    const decode = verifyRefreshJWT(refreshToken);

    const newToken = createJWT(decode as JwtPayload);

    return res.json({ accessToken: newToken });
  } catch (err: any) {
    return res.status(403).json({ Error: "Refresh Token inválido" });
  }
}
