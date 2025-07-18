import TaskRepository from "../repositories/TaskRepository";
import TaskService from "../Service/TaskService";

export const taskServiceFactory = new TaskService(new TaskRepository());
