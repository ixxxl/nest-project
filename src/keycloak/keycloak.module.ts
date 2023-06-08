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
      authServerUrl: 'http://tkeycloak.maib.test/',

      // might be http://localhost:8080/auth for older keycloak versions
      realm: 'test',
      clientId: 'maibChatGPT',
      secret: 'uFwhVnD8SQFQYQbOocq9fTglGSaPU09s',

      // Secret key of the client taken from keycloak server
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
  exports: [KeycloakConnectModule], // exporting KeycloakConnectModule so that it can be used in other modules
})
export class KeycloakModule {}
