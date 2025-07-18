import { Request, Response } from "express";
import { verifyLogin } from "./schemas/LoginSchema";
import { loginServiceFactory } from "../Factories/LoginService";

class LoginController {
  async execute(req: Request, res: Response) {
    try {
      await verifyLogin.validate(req.body);

      const result = await loginServiceFactory.execute(req.body);

      res.json(result);
    } catch (err: any) {
      return res.json({ error: err.message });
    }
  }
}

export default LoginController;
