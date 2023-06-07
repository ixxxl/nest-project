import { NestFactory } from '@nestjs/core';

import { SeederModule } from './database/seeds/seeder.module';

import { Logger } from '@nestjs/common';

async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule)

    .then((appContext) => {
      const logger = appContext.get(Logger);
    })

    .catch((error) => {
      throw error;
    });
}

bootstrap();
