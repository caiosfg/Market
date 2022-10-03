// ormconfig.ts
import { ConnectionOptions } from 'typeorm';

export default {
  type: 'sqlite',
  name: 'default',
  database: './db.sql',
  synchronize: true,
  entities: ['dist/**/*.model.js'],
} as ConnectionOptions;
