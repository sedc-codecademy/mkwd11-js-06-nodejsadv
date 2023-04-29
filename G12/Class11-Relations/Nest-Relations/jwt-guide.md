1. Install `npm i @nestjs/jwt` to be able to use it
2. Configure the JwtModule in the auth module (add the secrent and expiriation time)
3. Add the business logic for creating a token on login, start in auth service
4. Return the created token to the client from the auth controller
5. Create an auth guard using `nest generate guard auth`
6. Configure the business logic in the guard so that it validates the token first and then in validates the user if he still exists in the db
7. Apply the guard using the `@UseGuards()` decorator so that you can protect your endpoints
