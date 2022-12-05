import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { configure as serverlessExpress } from "@vendia/serverless-express";
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from "nest-winston";
import winston from "winston";

import { AppModule } from "./app.module";
let cachedServer;

export const handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule, {
      logger: WinstonModule.createLogger({
        transports: [
          new winston.transports.Console({
            level: process.env.NODE_ENV === "production" ? "info" : "silly",
            format: winston.format.combine(
              winston.format.timestamp(),
              nestWinstonModuleUtilities.format.nestLike("NestApp", {
                prettyPrint: true,
                colors: true,
              })
            ),
          }),
        ],
      }),
    });
    nestApp.useGlobalPipes(new ValidationPipe({ transform: true }));
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
