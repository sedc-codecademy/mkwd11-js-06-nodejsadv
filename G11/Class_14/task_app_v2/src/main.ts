import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filter/http-exception/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';

import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/layouts'));
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts'));
  app.setViewEngine('hbs');

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  const swagerConfig = new DocumentBuilder()
    .setTitle('Task Application')
    .setDescription('This is our task BE solution')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swagerConfig);

  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
