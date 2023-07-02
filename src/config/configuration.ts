import { SequelizeModuleOptions } from '@nestjs/sequelize';

export default () => ({
  database: {
    host: process.env.DB_HOST,

    username: process.env.DB_USER,

    password: process.env.DB_PASS,

    database: process.env.DB_NAME,

    port: parseInt(process.env.DB_PORT, 10) || 5432,

    dialect: process.env.DB_DIALECT,
  } as SequelizeModuleOptions,
  openAi: {
    apiKey: process.env.REACT_APP_API_KEY,
    organization: process.env.REACT_APP_API_ORGANIZATION
  }
});
