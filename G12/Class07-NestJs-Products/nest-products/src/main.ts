import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// In order to use the below pipe to allow for global validation you have to first install the packages below
// npm i --save class-validator class-transformer

async function boostrap() {
  const app = await NestFactory.create(AppModule);
  // The line below adds validation for all request bodies in the entire application if you use the class-validator decorators properly
  app.useGlobalPipes(
    new ValidationPipe({
      // Whitelist strips all properties from the request body that don't exist in the validated dto
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
boostrap();
