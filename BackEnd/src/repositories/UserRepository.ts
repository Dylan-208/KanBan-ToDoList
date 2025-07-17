import { prismaClientFactory } from "../Factories/PismaClient";
import { IUser } from "../models/User";

class UserRepository {
  async create(data: IUser) {
    return prismaClientFactory.users.create({
      data: data,
    });
  }

  async getAll() {
    return prismaClientFactory.users.findMany();
  }

  async getById(id: string) {
    return prismaClientFactory.users.findFirst({
      where: {
        id,
      },
    });
  }

  async getByEmail(email: string) {
    return prismaClientFactory.users.findFirst({
      where: {
        email,
      },
    });
  }

  async update(id: string, data: IUser) {
    return prismaClientFactory.users.update({
      where: { id: id },
      data,
    });
  }

  async delete(id: string) {
    return prismaClientFactory.users.delete({
      where: {
        id: id,
      },
    });
  }
}

export default UserRepository;
