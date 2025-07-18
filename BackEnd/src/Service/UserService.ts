import { IUser } from "../models/User";
import { userRepositoryFactoryInMemory } from "../Factories/UserRepositoryFactoryInMemory";
import { userRepositoryFactory } from "../Factories/UserRepositoryFactory";
import UserRepository from "../repositories/UserRepository";
import { createJWT } from "./helpers/JsonWebToken";

class UserService {
  constructor(private _userRepository: UserRepository) {}
  async create(data: IUser) {
    const verifyEmail = await this._userRepository.getByEmail(data.email);
    if (!verifyEmail) {
      const result = await this._userRepository.create(data);
      result.password = "";
      const token = createJWT(result);
      return {
        token: token,
      };
    }

    throw new Error("Email já existente no banco de dados");
  }

  async update(data: IUser, id: string) {
    const verifyUser = await this._userRepository.getById(id);

    if (!verifyUser) {
      throw new Error("Usuário inexistente no banco de dados.");
    }

    const result = await this._userRepository.update(id, data);

    return result;
  }

  async getAll() {
    return await this._userRepository.getAll();
  }

  async getById(id: string) {
    return await this._userRepository.getById(id);
  }

  async delete(id: string) {
    const verifyId = await this._userRepository.getById(id);

    if (!verifyId) {
      throw new Error("Usuário inexistente no banco de dados");
    }

    const result = await this._userRepository.delete(id);

    return result;
  }
}

export default UserService;

//teste
