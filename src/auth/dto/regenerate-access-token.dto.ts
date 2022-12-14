import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class RegenerateAccessTokenInput {
  @Field(() => String)
  refreshToken!: string;
}
@ObjectType()
export class RegenerateAccessTokenOutput {
  @Field(() => String)
  accessToken!: string;
}
