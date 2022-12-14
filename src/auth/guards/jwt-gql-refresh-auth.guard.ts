import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { ApolloError } from "apollo-server";
import { Observable } from "rxjs";

@Injectable()
export class JwtGqlRefreshAuthGuard extends AuthGuard("jwt-refresh-token") {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);

    return ctx.getContext().req;
  }

  handleRequest(err: any, user: any, info: any, context: any, status: any) {
    if (err || !user) {
      throw new ApolloError("invalid refresh token", "INVALID_REFRESH_TOKEN");
    }

    return super.handleRequest(err, user, info, context, status);
  } // jwt.strategy.ts 내 super에서 검증 실패 시 에러 리턴

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }
}
