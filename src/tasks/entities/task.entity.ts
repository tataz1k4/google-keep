import { Entity } from 'typeorm';

@Entity('tasks')
export class Task {
  id: number;
  description: string;
  completed: boolean;
}
