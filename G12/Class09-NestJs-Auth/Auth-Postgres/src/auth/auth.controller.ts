import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpCode,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { CredentialsDto } from './dtos/credentials.dto';

// By using the below interceptor we are using all the class-transformers rules we applied in the user.entity, this will intercept every response that holds an User entity class in it and remove the password properties, this can be used on every response that we want to serialize together with the class-transformer package
@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  registerUser(@Body() userData: CreateUserDto) {
    return this.authService.registerUser(userData);
  }

  @Post('/login')
  @HttpCode(200)
  loginUser(@Body() credentials: CredentialsDto) {
    return this.authService.loginUser(credentials);
  }
}
