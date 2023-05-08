import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public')); // let the app know for our assets files
  app.setBaseViewsDir(join(__dirname, '..', 'views')); //let the app know about our views

  hbs.registerPartials(join(__dirname, '..', 'views/layouts')); //used for reusable layout views
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts')); //used for child content

  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
