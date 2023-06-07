import { Global, Module } from '@nestjs/common';

import { databaseProviders, repositoryProviders } from './database.providers';

const DB_PROVIDERS = [...databaseProviders, ...repositoryProviders];

@Global()
@Module({
  providers: DB_PROVIDERS,

  exports: DB_PROVIDERS,
})
export class DatabaseModule {}
