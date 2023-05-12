import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public')); // location of the static files
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // location of the views / templates
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
