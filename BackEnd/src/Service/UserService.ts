import { IUser } from "../models/User";
import { userRepositoryFactoryInMemory } from "../Factories/UserRepositoryFactoryInMemory";

class UserService {
  async create(data: IUser) {
    const verifyEmail = await userRepositoryFactoryInMemory.getByEmail(data);
    if (!verifyEmail) {
      const result = await userRepositoryFactoryInMemory.create(data);
      return result;
    }

    throw new Error("Email já existente no banco de dados");
  }

  async update(data: IUser, id: string) {
    const verifyUser = await userRepositoryFactoryInMemory.getById(id);

    if (!verifyUser) {
      throw new Error("Usuário inexistente no banco de dados.");
    }

    const result = await userRepositoryFactoryInMemory.update(data, id);

    return result;
  }

  async getAll() {
    return userRepositoryFactoryInMemory.getAll();
  }

  async delete(id: string) {
    const verifyId = await userRepositoryFactoryInMemory.getById(id);

    if (!verifyId) {
      throw new Error("Usuário inexistente no banco de dados");
    }

    const result = await userRepositoryFactoryInMemory.delete(id);

    return result;
  }
}

export default UserService;
