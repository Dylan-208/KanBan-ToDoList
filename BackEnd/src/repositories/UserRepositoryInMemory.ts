import { IUser } from "../models/User";

class UserRepositoryInMemory {
  usersInMemory: IUser[];
  constructor() {
    this.usersInMemory = [];
  }

  async create(data: IUser) {
    const user = { ...data, id: `${this.usersInMemory.length + 1}` };
    this.usersInMemory.push(user);
    return this;
  }

  async getById(id: string) {
    const user = this.usersInMemory.find((item) => id === item.id);
    return user;
  }

  async getByEmail(data: IUser) {
    const user = this.usersInMemory.find((item) => data.email === item.email);
    return user;
  }

  async update(data: IUser, id: string) {
    const IndexUser = this.usersInMemory.findIndex((item) => item.id === id);
    this.usersInMemory[IndexUser] = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    return this.usersInMemory;
  }

  async getAll() {
    return this.usersInMemory;
  }

  async delete(id: string) {
    this.usersInMemory = this.usersInMemory.filter((item) => item.id !== id);
    return this.usersInMemory;
  }
}

export default UserRepositoryInMemory;
