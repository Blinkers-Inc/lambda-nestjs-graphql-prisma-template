import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { DirectiveLocation, GraphQLDirective, GraphQLError } from "graphql";

import { upperDirectiveTransformer } from "./common/directives/upper-case.directive";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { RecipesModule } from "./recipes/recipes.module";

@Module({
  imports: [
    RecipesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: process.env.NODE_ENV === "development" ? true : false,
      playground: process.env.NODE_ENV === "development" ? true : false,
      autoSchemaFile: true,
      transformSchema: (schema) => upperDirectiveTransformer(schema, "upper"),
      installSubscriptionHandlers: true,
      formatError: (err: GraphQLError) => {
        if (err?.extensions?.exception && !err.extensions.exception.code) {
          err.extensions.exception.code = "SYSTEM_DEFAULT";
        }

        return err;
      },
      plugins: [
        // ApolloServerPluginUsageReporting({
        //   sendVariableValues: { all: true },
        //   sendHeaders: { all: true },
        // }),
      ],
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: "upper",
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: "/graphql", method: RequestMethod.ALL });
  }
}
