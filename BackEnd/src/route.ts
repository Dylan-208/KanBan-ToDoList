import { Router } from "express";
import { userControllerFactory } from "./Factories/UserControllerFactory";

const router = Router();

router.post("/user", userControllerFactory.create);

router.get("/user", userControllerFactory.getAll);

router.put("/user/:id", userControllerFactory.update);

router.delete("/user/:id", userControllerFactory.delete);

export default router;
