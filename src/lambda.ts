import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { configure as serverlessExpress } from "@vendia/serverless-express";
import { utilities, WinstonModule } from "nest-winston";
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
            format:
              process.env.NODE_ENV === "production"
                ? // production 환경은 자원을 아끼기 위해 simple 포맷 사용
                  winston.format.simple()
                : winston.format.combine(
                    winston.format.timestamp(),
                    utilities.format.nestLike("NestApp", {
                      prettyPrint: true, // nest에서 제공하는 옵션. 로그 가독성을 높여줌
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
