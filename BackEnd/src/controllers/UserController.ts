import { Request, Response } from "express";
import { userServiceFactory } from "../Factories/UserServiceFactory";
import { AddUserSchema } from "./schemas/UserSchema";

class UserController {
  async create(req: Request, res: Response) {
    try {
      await AddUserSchema.validate(req.body);
      const result = await userServiceFactory.create(req.body);
      res.json(result);
    } catch (err: any) {
      throw res.json({ error: err.message });
    }
  }

  async getAll(req: Request, res: Response) {
    const result = await userServiceFactory.getAll();
    res.json(result);
  }

  async update(req: Request, res: Response) {
    try {
      await AddUserSchema.validate(req.body);
      const { id } = req.params;
      const result = await userServiceFactory.update(req.body, id);
      res.json(result);
    } catch (err: any) {
      throw res.json({ error: err.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await userServiceFactory.getById(id);

      res.json(result);
    } catch (err: any) {
      throw res.json({ error: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await userServiceFactory.delete(id);

      res.json(result);
    } catch (err: any) {
      throw res.json({ error: err.message });
    }
  }
}

export default UserController;
