import { Request, Response, NextFunction } from "express";
import {
  verifyJWT,
  verifyRefreshJWT,
} from "../../Service/helpers/JsonWebToken";
import { JwtPayload } from "jsonwebtoken";
import { refreshToken } from "../helpers/RefreshToken";

class AutenticMiddleware {
  async user(req: Request, res: Response, next: NextFunction) {
    try {
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer") &&
        req.headers["x-refresh-token"]
      ) {
        const token = req.headers.authorization.split(" ");
        const refresh_Token = req.headers["x-refresh-token"];

        try {
          const decode = (await verifyJWT(token[1])) as JwtPayload;
          (req as any).id_user = decode.id;

          next();
        } catch (error) {
          try {
            const resfreshDecode = (await verifyRefreshJWT(
              refresh_Token as string
            )) as JwtPayload;
            (req as any).id_user = resfreshDecode.id;

            const newToken = await refreshToken(refresh_Token as string);

            res.set({
              token: newToken,
              "x-refresh-token": newToken.refreshToken,
            });

            next();
          } catch (refreshError: any) {
            return res.status(401).json({ error: "Tokens inválidos" });
          }
        }
      } else {
        return res
          .status(401)
          .json({ error: "Token não autorizado ou não enviado" });
      }
    } catch (err: any) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export default AutenticMiddleware;
