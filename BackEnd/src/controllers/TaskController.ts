import { Request, Response } from "express";
import { addTask } from "./schemas/TaskSchema";
import { taskServiceFactory } from "../Factories/TaskServiceFactory";

class TaskController {
  async create(req: Request, res: Response) {
    try {
      await addTask.validate(req.body);

      const { id_user } = req as any;
      req.body.id_user = id_user;

      const result = await taskServiceFactory.create(id_user, req.body);

      res.json(result);
    } catch (err: any) {
      throw res.json({ error: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      await addTask.validate(req.body);

      const result = await taskServiceFactory.update(req.body);

      res.json(result);
    } catch (err: any) {
      throw res.json({ error: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    console.log("entrou");
    try {
      const { id } = req.params;

      const result = await taskServiceFactory.delete(id);

      res.json(result);
    } catch (err: any) {
      throw res.json({ error: err.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const { id_user } = req as any;

      const result = await taskServiceFactory.getAll(id_user);

      res.json(result);
    } catch (err: any) {
      throw res.json({ error: err.message });
    }
  }
}

export default TaskController;
