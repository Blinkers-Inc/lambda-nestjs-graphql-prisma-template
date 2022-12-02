import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { configure as serverlessExpress } from "@vendia/serverless-express";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";

import { AppModule } from "./app.module";

let cachedServer;

export const handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule);
    nestApp.useGlobalPipes(new ValidationPipe({ transform: true }));
    nestApp.useLogger(nestApp.get(WINSTON_MODULE_NEST_PROVIDER));
    await nestApp.init();

    cachedServer = serverlessExpress({
      app: nestApp.getHttpAdapter().getInstance(),
      logSettings: {
        level: "error", // default: 'error'
      },
      resolutionMode: "CALLBACK", // If you specify 'CALLBACK', then context.callbackWaitsForEmptyEventLoop = false is also set for you.
      respondWithErrors: true, // default: process.env.NODE_ENV === 'development'
    });
  }

  return cachedServer(event, context, callback);
};
