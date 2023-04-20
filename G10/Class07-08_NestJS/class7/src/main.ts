import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setting prefix for all endpoints: each endpoint will be accessible on /api
  app.setGlobalPrefix('api');

  // used to configure Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('Products app')
    .setDescription('The products API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // used to enable Pino Logger
  app.useLogger(app.get(Logger));

  // Starting the app
  await app.listen(3000);
}
bootstrap();
