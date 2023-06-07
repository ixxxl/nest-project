import { Sequelize } from 'sequelize-typescript';
import { UserModel } from 'src/models/users.model';
import * as databaseConf from '../config/configuration';

const DB_MODELS = [UserModel];

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',

    useFactory: async () => {
      const config = databaseConf.default().database;

      const sequelize = new Sequelize(config);

      sequelize.addModels(DB_MODELS);

      await sequelize.sync({ alter: true });

      return sequelize;
    },
  },
];

export const repositoryProviders = [
  {
    provide: 'USER_REPOSITORY',

    useValue: UserModel,
  },
];
