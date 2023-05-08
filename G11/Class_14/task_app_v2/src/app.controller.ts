import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './common/auth/local-auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/dto/user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'Main page',
    };
  }

  @Get('login')
  @Render('login/login')
  loginPage() {
    return {
      title: 'Login Page',
    };
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req.user);

    return this.authService.login(req.user);
  }

  @Post('auth/register')
  async register(@Body() body: CreateUserDto) {
    const id = await this.authService.register(body);

    return {
      message: 'User is created',
      id: id,
    };
  }
}
