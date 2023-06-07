import {
  KeycloakConnectModule,
  PolicyEnforcementMode,
  TokenValidation,
} from 'nest-keycloak-connect';

KeycloakConnectModule.register({
  authServerUrl: 'https://tkc.maib.test', // might be http://localhost:8080/auth for older keycloak versions
  realm: 'test',
  clientId: 'maibChatGPT',
  secret: 'uFwhVnD8SQFQYQbOocq9fTglGSaPU09s',
  policyEnforcement: PolicyEnforcementMode.PERMISSIVE, // optional
  tokenValidation: TokenValidation.ONLINE, // optional
});
