import { Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "./task.model";
import { UpdateTaskDto } from "./task.dto";

@Injectable()
export class TasksService {
  private tasks: Task[] = []

  getAllTasks(): Task[] {
    return this.tasks
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find(task => task.id === id)
    if (!task) throw new NotFoundException()

    return this.tasks.find((task) => task.id === id)
  }

  createTask(task: Task): Task {
    const newTask = {
      id: 'task_' + this.tasks.length + 1,
      ...task,
    }
    this.tasks.push(newTask)
    return newTask
  }

  updateTask(id: string, update: UpdateTaskDto): Task {
    const taskToUpdate = this.tasks.find(task => task.id === id)
    if (!taskToUpdate) throw new NotFoundException()

    return Object.assign(taskToUpdate, update);
  }

  deleteTask(id: string): Task {
    const taskToDeleteIndex = this.tasks.findIndex(task => task.id === id);
    if (taskToDeleteIndex === -1) throw new NotFoundException();

    return this.tasks.splice(taskToDeleteIndex, 1).at(0);
  }
}
