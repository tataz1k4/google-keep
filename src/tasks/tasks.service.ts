import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  // criar array de tarefas vazia.
  tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto) {
    // criar nova tarefa, atribuindo a ela um id único e adicionando-a à array de tarefas.
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }

    createTaskDto.id = lastId + 1;
    this.tasks.push(createTaskDto);

    return createTaskDto;
  }

  findAll() {
    // mostrar todas as tarefas.
    return this.tasks;
  }

  findOne(id: number) {
    // encontrar tarefa específica.
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  findCompleted() {
    // mostrar tarefas realizadas.
    const completedTasks = this.tasks.filter((task) => task.completed);
    return completedTasks;
  }

  findIncompleted() {
    // mostrar tarefas não realizadas.
    const incompleted = this.tasks.filter((task) => !task.completed);
    return incompleted;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    // achar uma tarefa específica, verificar se ela já existe na array de tarefas. Se sim, atualizá-la e retorná-la atualizada.
    const taskArray = this.findOne(updateTaskDto.id);
    if (taskArray) {
      taskArray.description = updateTaskDto.description;
      taskArray.completed = updateTaskDto.completed;
    }

    return taskArray;
  }

  remove(id: number) {
    // deletar tarefa específica.
    const index = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(index, 1);
  }
}
