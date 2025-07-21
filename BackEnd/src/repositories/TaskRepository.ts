import { prismaClientFactory } from "../Factories/PismaClient";
import { ITask } from "../models/Task";

class TaskRepository {
  async create(data: ITask) {
    return await prismaClientFactory.task.create({
      data: data,
    });
  }

  async update(id: string, data: ITask) {
    return await prismaClientFactory.task.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async getAll(id_user: string) {
    return await prismaClientFactory.task.findMany({
      where: { id_user },
    });
  }

  async delete(id: string) {
    return await prismaClientFactory.task.delete({
      where: { id },
    });
  }

  async getById(id_task: string) {
    return await prismaClientFactory.task.findFirst({
      where: {
        id: id_task,
      },
    });
  }
}

export default TaskRepository;
