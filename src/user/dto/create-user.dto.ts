import { PickType } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

import { User } from "src/user/models/user.model";

@InputType()
export class CreateUserInput extends PickType(User, [
  "name",
  "password",
  "role",
] as const) {}
