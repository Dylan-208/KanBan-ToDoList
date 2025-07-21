import { Router } from "express";
import { userControllerFactory } from "./Factories/UserControllerFactory";
import { taskControllerFactory } from "./Factories/TaskController";
import { autenticMiddleware } from "./Factories/AutenticMiddleware";
import { loginControllerFactory } from "./Factories/LoginController";
import { refreshToken } from "./controllers/helpers/RefreshToken";

const router = Router();

//User
router.post("/user", userControllerFactory.create);

router.get("/user", userControllerFactory.getAll);

router.put("/user/:id", autenticMiddleware.user, userControllerFactory.update);

router.get("/user/:id", userControllerFactory.getById);

router.delete(
  "/user/:id",
  autenticMiddleware.user,
  userControllerFactory.delete
);

//Login

router.post("/login", loginControllerFactory.execute);

//Refresh Token

router.post("/refresh", refreshToken);

//Tasks

router.get("/task", autenticMiddleware.user, taskControllerFactory.getAll);

router.post("/task", autenticMiddleware.user, taskControllerFactory.create);

router.put("/task", autenticMiddleware.user, taskControllerFactory.update);

router.delete(
  "/task/:id",
  autenticMiddleware.user,
  taskControllerFactory.delete
);

export default router;
