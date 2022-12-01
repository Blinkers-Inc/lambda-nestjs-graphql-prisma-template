import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum HelloScalarFieldEnum {
    user_id = "user_id",
    username = "username",
    password = "password",
    email = "email",
    created_on = "created_on",
    last_login = "last_login"
}

registerEnumType(HelloScalarFieldEnum, { name: 'HelloScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })

@ArgsType()
export class CreateManyhelloArgs {
    @Field(() => [helloCreateManyInput], {nullable:false})
    @Type(() => helloCreateManyInput)
    data!: Array<helloCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnehelloArgs {
    @Field(() => helloCreateInput, {nullable:false})
    @Type(() => helloCreateInput)
    data!: InstanceType<typeof helloCreateInput>;
}

@ArgsType()
export class DeleteManyhelloArgs {
    @Field(() => helloWhereInput, {nullable:true})
    @Type(() => helloWhereInput)
    where?: InstanceType<typeof helloWhereInput>;
}

@ArgsType()
export class DeleteOnehelloArgs {
    @Field(() => helloWhereUniqueInput, {nullable:false})
    @Type(() => helloWhereUniqueInput)
    where!: InstanceType<typeof helloWhereUniqueInput>;
}

@ArgsType()
export class FindFirsthelloOrThrowArgs {
    @Field(() => helloWhereInput, {nullable:true})
    @Type(() => helloWhereInput)
    where?: InstanceType<typeof helloWhereInput>;
    @Field(() => [helloOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<helloOrderByWithRelationInput>;
    @Field(() => helloWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof helloWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [HelloScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HelloScalarFieldEnum>;
}

@ArgsType()
export class FindFirsthelloArgs {
    @Field(() => helloWhereInput, {nullable:true})
    @Type(() => helloWhereInput)
    where?: InstanceType<typeof helloWhereInput>;
    @Field(() => [helloOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<helloOrderByWithRelationInput>;
    @Field(() => helloWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof helloWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [HelloScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HelloScalarFieldEnum>;
}

@ArgsType()
export class FindManyhelloArgs {
    @Field(() => helloWhereInput, {nullable:true})
    @Type(() => helloWhereInput)
    where?: InstanceType<typeof helloWhereInput>;
    @Field(() => [helloOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<helloOrderByWithRelationInput>;
    @Field(() => helloWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof helloWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [HelloScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HelloScalarFieldEnum>;
}

@ArgsType()
export class FindUniquehelloOrThrowArgs {
    @Field(() => helloWhereUniqueInput, {nullable:false})
    @Type(() => helloWhereUniqueInput)
    where!: InstanceType<typeof helloWhereUniqueInput>;
}

@ArgsType()
export class FindUniquehelloArgs {
    @Field(() => helloWhereUniqueInput, {nullable:false})
    @Type(() => helloWhereUniqueInput)
    where!: InstanceType<typeof helloWhereUniqueInput>;
}

@ArgsType()
export class helloAggregateArgs {
    @Field(() => helloWhereInput, {nullable:true})
    @Type(() => helloWhereInput)
    where?: InstanceType<typeof helloWhereInput>;
    @Field(() => [helloOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<helloOrderByWithRelationInput>;
    @Field(() => helloWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof helloWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class helloAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;
}

@InputType()
export class helloCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    created_on?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    last_login?: keyof typeof SortOrder;
}

@InputType()
export class helloCreateManyInput {
    @Field(() => Int, {nullable:true})
    user_id?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    created_on!: Date | string;
    @Field(() => Date, {nullable:true})
    last_login?: Date | string;
}

@InputType()
export class helloCreateInput {
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    created_on!: Date | string;
    @Field(() => Date, {nullable:true})
    last_login?: Date | string;
}

@ArgsType()
export class helloGroupByArgs {
    @Field(() => helloWhereInput, {nullable:true})
    @Type(() => helloWhereInput)
    where?: InstanceType<typeof helloWhereInput>;
    @Field(() => [helloOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<helloOrderByWithAggregationInput>;
    @Field(() => [HelloScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HelloScalarFieldEnum>;
    @Field(() => helloScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof helloScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
}

@InputType()
export class helloMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    created_on?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    last_login?: keyof typeof SortOrder;
}

@InputType()
export class helloMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    created_on?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    last_login?: keyof typeof SortOrder;
}

@InputType()
export class helloOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    created_on?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    last_login?: keyof typeof SortOrder;
    @Field(() => helloCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof helloCountOrderByAggregateInput>;
    @Field(() => helloAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof helloAvgOrderByAggregateInput>;
    @Field(() => helloMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof helloMaxOrderByAggregateInput>;
    @Field(() => helloMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof helloMinOrderByAggregateInput>;
    @Field(() => helloSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof helloSumOrderByAggregateInput>;
}

@InputType()
export class helloOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    created_on?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    last_login?: keyof typeof SortOrder;
}

@InputType()
export class helloScalarWhereWithAggregatesInput {
    @Field(() => [helloScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<helloScalarWhereWithAggregatesInput>;
    @Field(() => [helloScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<helloScalarWhereWithAggregatesInput>;
    @Field(() => [helloScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<helloScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    user_id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    username?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_on?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    last_login?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}

@InputType()
export class helloSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;
}

@InputType()
export class helloUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    user_id?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    created_on!: Date | string;
    @Field(() => Date, {nullable:true})
    last_login?: Date | string;
}

@InputType()
export class helloUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    user_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_on?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    last_login?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class helloUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    user_id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_on?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    last_login?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class helloUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_on?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    last_login?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class helloUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_on?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    last_login?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class helloWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    user_id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
}

@InputType()
export class helloWhereInput {
    @Field(() => [helloWhereInput], {nullable:true})
    AND?: Array<helloWhereInput>;
    @Field(() => [helloWhereInput], {nullable:true})
    OR?: Array<helloWhereInput>;
    @Field(() => [helloWhereInput], {nullable:true})
    NOT?: Array<helloWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    user_id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    username?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    created_on?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    last_login?: InstanceType<typeof DateTimeNullableFilter>;
}

@ObjectType()
export class hello {
    @Field(() => ID, {nullable:false})
    user_id!: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    created_on!: Date;
    @Field(() => Date, {nullable:true})
    last_login!: Date | null;
}

@ArgsType()
export class UpdateManyhelloArgs {
    @Field(() => helloUpdateManyMutationInput, {nullable:false})
    @Type(() => helloUpdateManyMutationInput)
    data!: InstanceType<typeof helloUpdateManyMutationInput>;
    @Field(() => helloWhereInput, {nullable:true})
    @Type(() => helloWhereInput)
    where?: InstanceType<typeof helloWhereInput>;
}

@ArgsType()
export class UpdateOnehelloArgs {
    @Field(() => helloUpdateInput, {nullable:false})
    @Type(() => helloUpdateInput)
    data!: InstanceType<typeof helloUpdateInput>;
    @Field(() => helloWhereUniqueInput, {nullable:false})
    @Type(() => helloWhereUniqueInput)
    where!: InstanceType<typeof helloWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnehelloArgs {
    @Field(() => helloWhereUniqueInput, {nullable:false})
    @Type(() => helloWhereUniqueInput)
    where!: InstanceType<typeof helloWhereUniqueInput>;
    @Field(() => helloCreateInput, {nullable:false})
    @Type(() => helloCreateInput)
    create!: InstanceType<typeof helloCreateInput>;
    @Field(() => helloUpdateInput, {nullable:false})
    @Type(() => helloUpdateInput)
    update!: InstanceType<typeof helloUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@ObjectType()
export class AggregateHello {
    @Field(() => HelloCountAggregate, {nullable:true})
    _count?: InstanceType<typeof HelloCountAggregate>;
    @Field(() => HelloAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof HelloAvgAggregate>;
    @Field(() => HelloSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof HelloSumAggregate>;
    @Field(() => HelloMinAggregate, {nullable:true})
    _min?: InstanceType<typeof HelloMinAggregate>;
    @Field(() => HelloMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof HelloMaxAggregate>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@ObjectType()
export class HelloAvgAggregate {
    @Field(() => Float, {nullable:true})
    user_id?: number;
}

@ObjectType()
export class HelloCountAggregate {
    @Field(() => Int, {nullable:false})
    user_id!: number;
    @Field(() => Int, {nullable:false})
    username!: number;
    @Field(() => Int, {nullable:false})
    password!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    created_on!: number;
    @Field(() => Int, {nullable:false})
    last_login!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@ObjectType()
export class HelloGroupBy {
    @Field(() => Int, {nullable:false})
    user_id!: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    created_on!: Date | string;
    @Field(() => Date, {nullable:true})
    last_login?: Date | string;
    @Field(() => HelloCountAggregate, {nullable:true})
    _count?: InstanceType<typeof HelloCountAggregate>;
    @Field(() => HelloAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof HelloAvgAggregate>;
    @Field(() => HelloSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof HelloSumAggregate>;
    @Field(() => HelloMinAggregate, {nullable:true})
    _min?: InstanceType<typeof HelloMinAggregate>;
    @Field(() => HelloMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof HelloMaxAggregate>;
}

@ObjectType()
export class HelloMaxAggregate {
    @Field(() => Int, {nullable:true})
    user_id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    created_on?: Date | string;
    @Field(() => Date, {nullable:true})
    last_login?: Date | string;
}

@ObjectType()
export class HelloMinAggregate {
    @Field(() => Int, {nullable:true})
    user_id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    created_on?: Date | string;
    @Field(() => Date, {nullable:true})
    last_login?: Date | string;
}

@ObjectType()
export class HelloSumAggregate {
    @Field(() => Int, {nullable:true})
    user_id?: number;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableDateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}
