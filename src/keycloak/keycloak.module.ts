import { Module } from '@nestjs/common';
import {
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
  AuthGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    KeycloakConnectModule.register({
      // authServerUrl: 'https://tkc.maib.test',
      // realm: 'test',
      // clientId: 'maibChatGPT',
      // secret: 'uFwhVnD8SQFQYQbOocq9fTglGSaPU09s',
      authServerUrl: 'https://kc.maib.md/',
      realm: 'chatGPT',
      clientId: 'maibChatGPT',
      secret: 'DqULW0GDe32vm65e7iWbNrKdHAX4xDZq',

    }),
  ],


  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
  exports: [KeycloakConnectModule],
})
export class KeycloakModule {}
