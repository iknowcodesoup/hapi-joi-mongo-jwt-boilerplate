# HapiJS, Joi, MongoDB and JWT Boilerplate

The purpose and intent of this project is to provide a standardized template for establishing a secure API that will be used to connect to front-end / mobile applications.

## Authentication Workflow _(TBD)_

All communication to be done over [SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security).

The current plan is to introduce an assertation service to validate the client app. The API will store the client secret for the OAuth service. After validating the client token the API will return a JWT token to use with the client_token for all future calls.

1. `Client > Server*` - Authentication request
2. `Server > Client*` - Send validation command
3. `Client > Server*` - Execute validation command and send the result
4. `Server > Client` - Validate, generate and send client_token and code challenge [PKCE-S256](https://tools.ietf.org/html/rfc7636)
5. `Client > OAuth2` - Validate user & receive auth_code using app-native OAuth SDK
6. `Client > Server` - Send client_token, auth_code
7. `Server > Client` - Verify client_token. Use client-secret, auth_code and code verifier to generate and store the access_token. Generate, store and send JWT token

[SCRAM](https://en.wikipedia.org/wiki/Salted_Challenge_Response_Authentication_Mechanism) will be used as an alternative to using OAuth2 for the fallback authentication method on step 5.

\* = To be replaced with [Approov](https://approov.io/) once app popularity reaches a critical point.

## Commands

#### Build
    npm run build

#### Debug
    npm run build-dev

#### Run
    npm run start

## TODOs
* Add app / client assertion endpoint
* Complete OAuth2 validation logic and storage for JWT generation
* Implement REDIS caching for valid JWT keys
* For better scalability, the assertation client should be provisioned into it's own API / service.
