import { DataSource } from 'typeorm';
const dbConfig = require('../ormconfig.js');

export const AppDataSource = new DataSource({
  ...dbConfig,
  entities: dbConfig.entities || [__dirname + '/../**/*.entity.{ts,js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
});
