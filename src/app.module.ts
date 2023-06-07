import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TransformInterceptor } from './config/interceptors/transform.interceptor';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),

      serveRoot: '/assets',
    }),
  ],
  controllers: [AppController],

  providers: [
    AppService,

    {
      provide: 'APP_INTERCEPTOR',

      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
