import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from './tasks/entities/task.entity';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: '123456',
  port: 5432,
  host: '127.0.0.1',
  database: 'google-keep',
  synchronize: true,
  entities: [Task],
  migrations: ['typeorm/migrations/**/*.ts'],
  migrationsTableName: 'Migrations',
};
