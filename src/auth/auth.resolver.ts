import { UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";

import { AuthService } from "src/auth/auth.service";
import { AuthUser } from "src/auth/decorators/auth-user.decorator";
import { Public } from "src/auth/decorators/skip-auth.decorator";
import { RegenerateAccessTokenOutput } from "src/auth/dto/regenerate-access-token.dto";
import { SignInInput, SignInOutput } from "src/auth/dto/sign-in.dto";
import { JwtGqlRefreshAuthGuard } from "src/auth/guards/jwt-gql-refresh-auth.guard";
import { CreateUserInput } from "src/user/dto/create-user.dto";
import { User } from "src/user/models/user.model";
import { UserService } from "src/user/user.service";

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Public()
  @Mutation((_returns) => User, { name: "signUp" })
  async signUpUser(@Args("input") input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @Public()
  @Mutation((_returns) => SignInOutput, { name: "signIn" })
  async signInUser(@Args("input") input: SignInInput): Promise<SignInOutput> {
    return this.authService.signInUser(input);
  }

  @Public()
  @UseGuards(JwtGqlRefreshAuthGuard)
  @Mutation((_returns) => RegenerateAccessTokenOutput)
  async regenerateAccessToken(
    @AuthUser() user: User
  ): Promise<RegenerateAccessTokenOutput> {
    return this.authService.regenerateAccessToken(user.id);
  }

  @Query((_returns) => String)
  async test(@Context() ctx, @AuthUser() user: User): Promise<string> {
    return "test";
  }
}
