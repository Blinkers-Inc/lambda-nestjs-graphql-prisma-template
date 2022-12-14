import { InputType } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";

import { User as UserModel } from "../../@generated/user/user.model";

@InputType({ isAbstract: true })
@ObjectType()
export class User extends UserModel {}
