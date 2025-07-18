import UserRepository from "../repositories/UserRepository";
import LoginService from "../Service/LoginService";

export const loginServiceFactory = new LoginService(new UserRepository());
