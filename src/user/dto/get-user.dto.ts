import { PickType } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

import { User } from "src/user/models/user.model";

@InputType()
export class GetUserInput extends PickType(User, ["id"] as const) {}
