import { ExecutionContext, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { ApolloError } from "apollo-server-express";

@Injectable()
export class JwtGqlAuthGuard extends AuthGuard("jwt") {
  constructor(
    private reflector: Reflector,
    private configService: ConfigService
  ) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);

    return ctx.getContext().req;
  }

  handleRequest(err: any, user: any, info: any, context: any, status: any) {
    console.log("user", user);
    console.log("typeof user", typeof user);
    if (err || !user) {
      throw new ApolloError("invalid access token", "INVALID_ACCESS_TOKEN");
    }

    return super.handleRequest(err, user, info, context, status);
  } // jwt.strategy.ts 내 super에서 검증 실패 시 에러 리턴

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(
      this.configService.get<string>("IS_PUBLIC_KEY"),
      [context.getHandler(), context.getClass()]
    );

    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }
}
