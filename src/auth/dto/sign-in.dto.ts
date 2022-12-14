import { Field, ObjectType } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class SignInInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  password!: string;
}

@ObjectType()
export class SignInOutput {
  @Field(() => String)
  accessToken!: string;

  @Field(() => String)
  refreshToken!: string;
}
