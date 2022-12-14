import { Module } from "@nestjs/common";

import { UserRepository } from "src/user/user.repository";

import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
  providers: [UserResolver, UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
