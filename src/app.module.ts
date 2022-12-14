import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { GqlExecutionContext, GraphQLModule } from "@nestjs/graphql";
import { DirectiveLocation, GraphQLDirective, GraphQLError } from "graphql";
import Joi from "joi";
import path from "path";

import { JwtGqlAuthGuard } from "src/auth/guards/jwt-gql-auth.guard";
import { ComplexityPlugin } from "src/common/plugins/complexity.plugin";
import { LoggingPlugin } from "src/common/plugins/logging.plugin";

import { AuthModule } from "./auth/auth.module";
import { upperDirectiveTransformer } from "./common/directives/upper-case.directive";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { PrismaModule } from "./prisma/prisma.module";
import { RecipesModule } from "./recipe/recipe.module";
import { UserModule } from "./user/user.module";

export const isProduction = process.env.NODE_ENV === "production";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: isProduction ? false : true,
      playground: isProduction ? false : true,
      introspection: isProduction ? false : true,
      // typePaths: ["./**/*.gql"],
      // definitions: {
      //   path: path.join(process.cwd(), "src/generated-graphql.ts"),
      //   outputAs: "class",
      // }, // 타입 제너레이팅 (production 환경에서는 불필요하므로 주석처리 함)
      autoSchemaFile: isProduction
        ? true
        : path.join(process.cwd(), "src/generated-schema.gql"), // 스키마 제너레이팅
      sortSchema: true,
      cache: "bounded", // 기본 캐시 정책
      context: ({ req }) => {
        return req;
      },
      // transformSchema: (schema) => upperDirectiveTransformer(schema, "upper"),
      // installSubscriptionHandlers: true,
      formatError: (err: GraphQLError) => {
        console.error("--- GraphQL Error ---");
        console.error("Path:", err.path);
        console.error("Message:", err.message);
        console.error("Code:", err.extensions.code);
        console.error("Original Error", err.originalError);

        // production 의 경우 depth를 1로 변환하여 리턴
        return isProduction
          ? {
              message: err.message,
              code: err.extensions.code,
              path: err.path,
            }
          : err;
      },
      plugins: [],
      // buildSchemaOptions: {
      //   directives: [
      //     new GraphQLDirective({
      //       name: "upper",
      //       locations: [DirectiveLocation.FIELD_DEFINITION],
      //     }),
      //   ],
      // },
    }),
    ConfigModule.forRoot({
      isGlobal: true, // 전역에서 사용 가능
      envFilePath: `.env.${process.env.SERVERLESS_ENV}`,
      validationSchema: Joi.object({
        IS_PUBLIC_KEY: Joi.string().required(),
        SERVERLESS_ENV: Joi.string().required(),
        JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
        JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
      }),
    }),
    PrismaModule,
    RecipesModule,
    UserModule,
    AuthModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtGqlAuthGuard }, // 전역에 인증 활성화, @Public() 데코레이터로 비활성화 가능
    LoggingPlugin, // GraphQL 로깅 플러그인
    ComplexityPlugin, // Complexity 확인 플러그인
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: "/graphql", method: RequestMethod.ALL });
  }
}
