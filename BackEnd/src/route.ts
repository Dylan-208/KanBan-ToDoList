import { Router } from "express";
import { userControllerFactory } from "./Factories/UserControllerFactory";
import { taskControllerFactory } from "./Factories/TaskController";
import { autenticMiddleware } from "./Factories/AutenticMiddleware";

const router = Router();

//User
router.post("/user", userControllerFactory.create);

router.get("/user", userControllerFactory.getAll);

router.put("/user/:id", userControllerFactory.update);

router.get("/user/:id", userControllerFactory.getById);

router.delete("/user/:id", userControllerFactory.delete);

//Tasks

router.get("/task", autenticMiddleware.user, taskControllerFactory.getAll);

router.post("/task", autenticMiddleware.user, taskControllerFactory.create);

router.put("/task", autenticMiddleware.user, taskControllerFactory.update);

router.delete("/task", autenticMiddleware.user, taskControllerFactory.delete);

export default router;
