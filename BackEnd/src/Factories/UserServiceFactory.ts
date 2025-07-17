import UserRepository from "../repositories/UserRepository";
import UserService from "../Service/UserService";

export const userServiceFactory = new UserService(new UserRepository());
