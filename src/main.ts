import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
  const nestApp = await NestFactory.create(AppModule);
  nestApp.useGlobalPipes(new ValidationPipe());

  await nestApp.listen(3000);
  console.log(`Application is running on: ${await nestApp.getUrl()}`);
}
bootstrap();
