import { userRepositoryFactory } from "../Factories/UserRepositoryFactory";
import { ITask } from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";

class TaskService {
  constructor(private _taskRepository: TaskRepository) {}

  async create(id_user: string, data: ITask) {
    const verifyUser = await userRepositoryFactory.getById(id_user);

    if (!verifyUser) throw new Error("Usuário inexistente");

    const result = await this._taskRepository.create(data);
    return result;
  }
  //TODO Criar o JWT para verificar a existência do usuário
  async update(data: ITask) {
    const result = await this._taskRepository.update(data.id as string, data);

    if (!result) throw new Error("Tarefa inexistente");

    return result;
  }

  async delete(id: string) {
    const result = await this._taskRepository.delete(id);

    if (!result) throw new Error("Tarefa inexistente");

    return result;
  }

  async getAll(id_user: string) {
    const result = await this._taskRepository.getAll(id_user);

    if (!result) throw new Error("Nenhuma tarefa cadastrada");

    return result;

    return result;
  }
}

export default TaskService;
