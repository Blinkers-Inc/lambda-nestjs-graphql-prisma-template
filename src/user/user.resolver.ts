import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { CreateUserInput } from "src/user/dto/create-user.dto";
import { GetUserInput } from "src/user/dto/get-user.dto";
import { User } from "src/user/models/user.model";
import { UserService } from "src/user/user.service";

@Resolver((_of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((_returns) => User, { name: "user" })
  async getUser(@Args("args") input: GetUserInput): Promise<User> {
    return this.userService.getUser(input);
  }

  @Mutation((_returns) => User, { name: "createUser" })
  async createUser(@Args("input") input: CreateUserInput): Promise<User> {
    return this.userService.createUser(input);
  }

  // @Mutation((_returns) => String, { name: "signIn" })
  // signIn();
}
