import { Request, Response, NextFunction } from "express";

class AutenticMiddleware {
  usuario(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ");
      }
    } catch (err: any) {
      throw res.status(401).json({ error: err.message });
    }
  }
}

export default AutenticMiddleware;
