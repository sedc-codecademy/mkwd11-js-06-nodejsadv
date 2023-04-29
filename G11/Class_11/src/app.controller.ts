import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './common/auth/local-auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //localhost:3000/auth/login
  // @UseGuards(AuthGuard('local'))
  /**
   * when route is requested the guard is triggered
   * LocalAuthGuard invokes the local strategy that checks if user is existing
   */
  @UseGuards(LocalAuthGuard) // same as the above line; better approach
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req.user);

    return this.authService.login(req.user); //returns us the access token if creadentails are met
  }
}
