import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    // JwtModule is a module provided by the NestJS framework that makes it easy to use JSON Web Tokens (JWTs) for authentication and authorization in web applications.
    //this after login method from service which comes after local strategy and auth/login in app controller
    JwtModule.register({
      secret: 'some_secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService], // we will need the export when we inject the service in app controler
})
export class AuthModule {}
