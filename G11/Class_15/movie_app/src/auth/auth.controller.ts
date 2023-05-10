import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiProperty } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

class LoginDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  //localhost:3000/auth/login
  @Post('login')
  login(@Body() loginDto: LoginDto, @Request() request: Request) {
    console.log(request['user']);

    return this.authService.login(request['user']);
  }
}
