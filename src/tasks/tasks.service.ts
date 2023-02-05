import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  // injetar uma instância do repositório de tarefas.
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    // criar uma tarefa nova e salvá-la no bando de dados.
    const task = new Task();
    task.description = createTaskDto.description;
    task.completed = createTaskDto.completed;
    return await this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    // mostrar todas as tarefas do banco de dados.
    return await this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task | undefined> {
    // achar uma tarefa específica.
    return await this.taskRepository.findOne({ where: { id } });
  }

  async findCompleted(): Promise<Task[]> {
    // mostrar apenas as tarefas completas.
    return await this.taskRepository.find({ where: { completed: true } });
  }

  async findIncompleted(): Promise<Task[]> {
    // mostrar apenas as tarefas incompletas.
    return await this.taskRepository.find({ where: { completed: false } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    // achar uma tarefa específica e atualizá-la.
    const task = await this.findOne(id);
    if (!task) {
      throw new Error('Tarefa não encontrada');
    }
    task.description = updateTaskDto.description;
    task.completed = updateTaskDto.completed;
    return await this.taskRepository.save(task);
  }

  async remove(id: number): Promise<void> {
    // deletar uma tarefa específica.
    const task = await this.findOne(id);
    if (!task) {
      throw new Error('Tarefa não encontrada');
    }
    await this.taskRepository.remove(task);
  }
}
