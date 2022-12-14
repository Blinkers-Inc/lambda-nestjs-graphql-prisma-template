import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

import { User } from "src/user/models/user.model";

export const AuthUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): User => {
    const gqlContext = GqlExecutionContext.create(context).getContext();
    const user = gqlContext.req.user;

    return user;
  }
);
