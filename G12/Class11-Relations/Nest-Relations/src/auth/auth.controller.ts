import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { CredentialsDto } from './dtos/credentials.dto';

//? By using the below interceptor we are using all the class-transformers rules we applied in the user.entity, this will intercept every response that holds an User entity class in it and remove the password properties, this can be used on every response that we want to serialize together with the class-transformer package
// @UseInterceptors(ClassSerializerInterceptor)
// !After returning token only from login and nothing else, we don't need the class serializer anymore because it will only cause issues
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  registerUser(@Body() userData: CreateUserDto) {
    return this.authService.registerUser(userData);
  }

  @Post('/login')

  // if @Res() is used in a handler it becomes an express handler and the common nestjs syntax can't be used you must return res.send or res.sendstatus to terminate the function
  async loginUser(@Body() credentials: CredentialsDto, @Res() response) {
    const token = await this.authService.loginUser(credentials);

    // We are setting the authorization header of the response and sending it back
    response.set('authorization', token);

    return response.sendStatus(200);
  }
}
