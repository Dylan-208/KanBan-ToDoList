import { Router } from "express";
import { userControllerFactory } from "./Factories/UserControllerFactory";
import { taskControllerFactory } from "./Factories/TaskController";

const router = Router();

//User
router.post("/user", userControllerFactory.create);

router.get("/user", userControllerFactory.getAll);

router.put("/user/:id", userControllerFactory.update);

router.get("/user/:id", userControllerFactory.getById);

router.delete("/user/:id", userControllerFactory.delete);

//Tasks

router.get("/task", taskControllerFactory.getAll);

router.post("/task", taskControllerFactory.create);

router.put("/task", taskControllerFactory.update);

router.delete("/task", taskControllerFactory.delete);

export default router;
