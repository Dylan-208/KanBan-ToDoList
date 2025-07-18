import { Request, Response, NextFunction } from "express";
import { verifyJWT } from "../../Service/helpers/JsonWebToken";
import { JwtPayload } from "jsonwebtoken";

class AutenticMiddleware {
  user(req: Request, res: Response, next: NextFunction) {
    try {
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        const token = req.headers.authorization.split(" ");
        const decode = verifyJWT(token[1]) as JwtPayload;
        (req as any).id_user = decode.id;

        next();
      } else {
        return res
          .status(401)
          .json({ error: "Token não autorizado ou não enviado" });
      }
      //TODO Criar validação pelo CookieVisitor
    } catch (err: any) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export default AutenticMiddleware;
