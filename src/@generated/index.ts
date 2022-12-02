import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    role = "role"
}

export enum ProfileScalarFieldEnum {
    id = "id",
    bio = "bio",
    userId = "userId"
}

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

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum PostScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    title = "title",
    published = "published",
    authorId = "authorId"
}

export enum CategoryScalarFieldEnum {
    id = "id",
    name = "name"
}

registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(Role, { name: 'Role', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateCategory {
    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CategoryAvgAggregate>;
    @Field(() => CategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CategorySumAggregate>;
    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregate>;
    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregate>;
}

@ArgsType()
export class CategoryAggregateArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregateInput>;
    @Field(() => CategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CategoryAvgAggregateInput>;
    @Field(() => CategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CategorySumAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@InputType()
export class CategoryAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CategoryAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class CategoryAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class CategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@ObjectType()
export class CategoryCount {
    @Field(() => Int, {nullable:false})
    posts?: number;
}

@InputType()
export class CategoryCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class CategoryCreateNestedManyWithoutPostsInput {
    @Field(() => [CategoryCreateWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateWithoutPostsInput)
    create?: Array<CategoryCreateWithoutPostsInput>;
    @Field(() => [CategoryCreateOrConnectWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPostsInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutPostsInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<CategoryWhereUniqueInput>;
}

@InputType()
export class CategoryCreateOrConnectWithoutPostsInput {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => CategoryCreateWithoutPostsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutPostsInput)
    create!: InstanceType<typeof CategoryCreateWithoutPostsInput>;
}

@InputType()
export class CategoryCreateWithoutPostsInput {
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class CategoryCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => PostCreateNestedManyWithoutCategoriesInput, {nullable:true})
    posts?: InstanceType<typeof PostCreateNestedManyWithoutCategoriesInput>;
}

@ArgsType()
export class CategoryGroupByArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithAggregationInput>;
    @Field(() => [CategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CategoryScalarFieldEnum>;
    @Field(() => CategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregateInput>;
    @Field(() => CategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CategoryAvgAggregateInput>;
    @Field(() => CategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CategorySumAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@ObjectType()
export class CategoryGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CategoryAvgAggregate>;
    @Field(() => CategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CategorySumAggregate>;
    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregate>;
    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregate>;
}

@InputType()
export class CategoryListRelationFilter {
    @Field(() => CategoryWhereInput, {nullable:true})
    every?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    some?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    none?: InstanceType<typeof CategoryWhereInput>;
}

@InputType()
export class CategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class CategoryMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class CategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class CategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class CategoryMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class CategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class CategoryOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class CategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => CategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountOrderByAggregateInput>;
    @Field(() => CategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CategoryAvgOrderByAggregateInput>;
    @Field(() => CategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxOrderByAggregateInput>;
    @Field(() => CategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinOrderByAggregateInput>;
    @Field(() => CategorySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CategorySumOrderByAggregateInput>;
}

@InputType()
export class CategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: InstanceType<typeof PostOrderByRelationAggregateInput>;
}

@InputType()
export class CategoryScalarWhereWithAggregatesInput {
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class CategoryScalarWhereInput {
    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    AND?: Array<CategoryScalarWhereInput>;
    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    OR?: Array<CategoryScalarWhereInput>;
    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    NOT?: Array<CategoryScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
}

@InputType()
export class CategorySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CategorySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class CategorySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class CategoryUncheckedCreateNestedManyWithoutPostsInput {
    @Field(() => [CategoryCreateWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateWithoutPostsInput)
    create?: Array<CategoryCreateWithoutPostsInput>;
    @Field(() => [CategoryCreateOrConnectWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPostsInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutPostsInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<CategoryWhereUniqueInput>;
}

@InputType()
export class CategoryUncheckedCreateWithoutPostsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class CategoryUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => PostUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutCategoriesInput>;
}

@InputType()
export class CategoryUncheckedUpdateManyWithoutCategoriesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateManyWithoutPostsNestedInput {
    @Field(() => [CategoryCreateWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateWithoutPostsInput)
    create?: Array<CategoryCreateWithoutPostsInput>;
    @Field(() => [CategoryCreateOrConnectWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPostsInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutPostsInput>;
    @Field(() => [CategoryUpsertWithWhereUniqueWithoutPostsInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutPostsInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutPostsInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<CategoryWhereUniqueInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<CategoryWhereUniqueInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<CategoryWhereUniqueInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<CategoryWhereUniqueInput>;
    @Field(() => [CategoryUpdateWithWhereUniqueWithoutPostsInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutPostsInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutPostsInput>;
    @Field(() => [CategoryUpdateManyWithWhereWithoutPostsInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutPostsInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutPostsInput>;
    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}

@InputType()
export class CategoryUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateWithoutPostsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => PostUncheckedUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedUpdateManyWithoutCategoriesNestedInput>;
}

@InputType()
export class CategoryUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUpdateManyWithWhereWithoutPostsInput {
    @Field(() => CategoryScalarWhereInput, {nullable:false})
    @Type(() => CategoryScalarWhereInput)
    where!: InstanceType<typeof CategoryScalarWhereInput>;
    @Field(() => CategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoryUpdateManyMutationInput)
    data!: InstanceType<typeof CategoryUpdateManyMutationInput>;
}

@InputType()
export class CategoryUpdateManyWithoutPostsNestedInput {
    @Field(() => [CategoryCreateWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateWithoutPostsInput)
    create?: Array<CategoryCreateWithoutPostsInput>;
    @Field(() => [CategoryCreateOrConnectWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPostsInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutPostsInput>;
    @Field(() => [CategoryUpsertWithWhereUniqueWithoutPostsInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutPostsInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutPostsInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<CategoryWhereUniqueInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<CategoryWhereUniqueInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<CategoryWhereUniqueInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<CategoryWhereUniqueInput>;
    @Field(() => [CategoryUpdateWithWhereUniqueWithoutPostsInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutPostsInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutPostsInput>;
    @Field(() => [CategoryUpdateManyWithWhereWithoutPostsInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutPostsInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutPostsInput>;
    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}

@InputType()
export class CategoryUpdateWithWhereUniqueWithoutPostsInput {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => CategoryUpdateWithoutPostsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutPostsInput)
    data!: InstanceType<typeof CategoryUpdateWithoutPostsInput>;
}

@InputType()
export class CategoryUpdateWithoutPostsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => PostUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    posts?: InstanceType<typeof PostUpdateManyWithoutCategoriesNestedInput>;
}

@InputType()
export class CategoryUpsertWithWhereUniqueWithoutPostsInput {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => CategoryUpdateWithoutPostsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutPostsInput)
    update!: InstanceType<typeof CategoryUpdateWithoutPostsInput>;
    @Field(() => CategoryCreateWithoutPostsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutPostsInput)
    create!: InstanceType<typeof CategoryCreateWithoutPostsInput>;
}

@InputType()
export class CategoryWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class CategoryWhereInput {
    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: InstanceType<typeof PostListRelationFilter>;
}

@ObjectType()
export class Category {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;
    @Field(() => CategoryCount, {nullable:false})
    _count?: InstanceType<typeof CategoryCount>;
}

@ArgsType()
export class CreateManyCategoryArgs {
    @Field(() => [CategoryCreateManyInput], {nullable:false})
    @Type(() => CategoryCreateManyInput)
    data!: Array<CategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCategoryArgs {
    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    data!: InstanceType<typeof CategoryCreateInput>;
}

@ArgsType()
export class DeleteManyCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
}

@ArgsType()
export class DeleteOneCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCategoryOrThrowArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCategoryOrThrowArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyCategoryArgs {
    @Field(() => CategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoryUpdateManyMutationInput)
    data!: InstanceType<typeof CategoryUpdateManyMutationInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
}

@ArgsType()
export class UpdateOneCategoryArgs {
    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    data!: InstanceType<typeof CategoryUpdateInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    create!: InstanceType<typeof CategoryCreateInput>;
    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    update!: InstanceType<typeof CategoryUpdateInput>;
}

@ObjectType()
export class AggregatePost {
    @Field(() => PostCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregate>;
    @Field(() => PostAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregate>;
    @Field(() => PostSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregate>;
    @Field(() => PostMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregate>;
    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregate>;
}

@ArgsType()
export class CreateManyPostArgs {
    @Field(() => [PostCreateManyInput], {nullable:false})
    @Type(() => PostCreateManyInput)
    data!: Array<PostCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePostArgs {
    @Field(() => PostCreateInput, {nullable:false})
    @Type(() => PostCreateInput)
    data!: InstanceType<typeof PostCreateInput>;
}

@ArgsType()
export class DeleteManyPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
}

@ArgsType()
export class DeleteOnePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPostOrThrowArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

@ArgsType()
export class FindFirstPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

@ArgsType()
export class FindManyPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePostOrThrowArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class FindUniquePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class PostAggregateArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PostCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregateInput>;
    @Field(() => PostAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregateInput>;
    @Field(() => PostSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregateInput>;
    @Field(() => PostMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregateInput>;
    @Field(() => PostMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregateInput>;
}

@InputType()
export class PostAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}

@ObjectType()
export class PostAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    authorId?: number;
}

@InputType()
export class PostAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
}

@InputType()
export class PostCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    published?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PostCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    published!: number;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PostCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
}

@ObjectType()
export class PostCount {
    @Field(() => Int, {nullable:false})
    categories?: number;
}

@InputType()
export class PostCreateManyAuthorInputEnvelope {
    @Field(() => [PostCreateManyAuthorInput], {nullable:false})
    @Type(() => PostCreateManyAuthorInput)
    data!: Array<PostCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PostCreateManyAuthorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Boolean, {nullable:true})
    published?: boolean;
}

@InputType()
export class PostCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Boolean, {nullable:true})
    published?: boolean;
    @Field(() => Int, {nullable:false})
    authorId!: number;
}

@InputType()
export class PostCreateNestedManyWithoutAuthorInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostCreateNestedManyWithoutCategoriesInput {
    @Field(() => [PostCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => PostCreateWithoutCategoriesInput)
    create?: Array<PostCreateWithoutCategoriesInput>;
    @Field(() => [PostCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoriesInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostCreateOrConnectWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateWithoutAuthorInput, {nullable:false})
    @Type(() => PostCreateWithoutAuthorInput)
    create!: InstanceType<typeof PostCreateWithoutAuthorInput>;
}

@InputType()
export class PostCreateOrConnectWithoutCategoriesInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => PostCreateWithoutCategoriesInput)
    create!: InstanceType<typeof PostCreateWithoutCategoriesInput>;
}

@InputType()
export class PostCreateWithoutAuthorInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Boolean, {nullable:true})
    published?: boolean;
    @Field(() => CategoryCreateNestedManyWithoutPostsInput, {nullable:true})
    categories?: InstanceType<typeof CategoryCreateNestedManyWithoutPostsInput>;
}

@InputType()
export class PostCreateWithoutCategoriesInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Boolean, {nullable:true})
    published?: boolean;
    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutPostsInput>;
}

@InputType()
export class PostCreateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Boolean, {nullable:true})
    published?: boolean;
    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutPostsInput>;
    @Field(() => CategoryCreateNestedManyWithoutPostsInput, {nullable:true})
    categories?: InstanceType<typeof CategoryCreateNestedManyWithoutPostsInput>;
}

@ArgsType()
export class PostGroupByArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithAggregationInput>;
    @Field(() => [PostScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PostScalarFieldEnum>;
    @Field(() => PostScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PostScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PostCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregateInput>;
    @Field(() => PostAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregateInput>;
    @Field(() => PostSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregateInput>;
    @Field(() => PostMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregateInput>;
    @Field(() => PostMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregateInput>;
}

@ObjectType()
export class PostGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Boolean, {nullable:false})
    published!: boolean;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => PostCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregate>;
    @Field(() => PostAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregate>;
    @Field(() => PostSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregate>;
    @Field(() => PostMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregate>;
    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregate>;
}

@InputType()
export class PostListRelationFilter {
    @Field(() => PostWhereInput, {nullable:true})
    every?: InstanceType<typeof PostWhereInput>;
    @Field(() => PostWhereInput, {nullable:true})
    some?: InstanceType<typeof PostWhereInput>;
    @Field(() => PostWhereInput, {nullable:true})
    none?: InstanceType<typeof PostWhereInput>;
}

@InputType()
export class PostMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    published?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}

@ObjectType()
export class PostMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => Boolean, {nullable:true})
    published?: boolean;
    @Field(() => Int, {nullable:true})
    authorId?: number;
}

@InputType()
export class PostMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
}

@InputType()
export class PostMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    published?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}

@ObjectType()
export class PostMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => Boolean, {nullable:true})
    published?: boolean;
    @Field(() => Int, {nullable:true})
    authorId?: number;
}

@InputType()
export class PostMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
}

@InputType()
export class PostOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PostOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => PostCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountOrderByAggregateInput>;
    @Field(() => PostAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PostAvgOrderByAggregateInput>;
    @Field(() => PostMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxOrderByAggregateInput>;
    @Field(() => PostMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinOrderByAggregateInput>;
    @Field(() => PostSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PostSumOrderByAggregateInput>;
}

@InputType()
export class PostOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => CategoryOrderByRelationAggregateInput, {nullable:true})
    categories?: InstanceType<typeof CategoryOrderByRelationAggregateInput>;
}

@InputType()
export class PostScalarWhereWithAggregatesInput {
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    published?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    authorId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class PostScalarWhereInput {
    @Field(() => [PostScalarWhereInput], {nullable:true})
    AND?: Array<PostScalarWhereInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    OR?: Array<PostScalarWhereInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    NOT?: Array<PostScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    published?: InstanceType<typeof BoolFilter>;
    @Field(() => IntFilter, {nullable:true})
    authorId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class PostSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}

@ObjectType()
export class PostSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    authorId?: number;
}

@InputType()
export class PostSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
}

@InputType()
export class PostUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostUncheckedCreateNestedManyWithoutCategoriesInput {
    @Field(() => [PostCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => PostCreateWithoutCategoriesInput)
    create?: Array<PostCreateWithoutCategoriesInput>;
    @Field(() => [PostCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoriesInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostUncheckedCreateWithoutAuthorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Boolean, {nullable:true})
    published?: boolean;
    @Field(() => CategoryUncheckedCreateNestedManyWithoutPostsInput, {nullable:true})
    categories?: InstanceType<typeof CategoryUncheckedCreateNestedManyWithoutPostsInput>;
}

@InputType()
export class PostUncheckedCreateWithoutCategoriesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Boolean, {nullable:true})
    published?: boolean;
    @Field(() => Int, {nullable:false})
    authorId!: number;
}

@InputType()
export class PostUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Boolean, {nullable:true})
    published?: boolean;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => CategoryUncheckedCreateNestedManyWithoutPostsInput, {nullable:true})
    categories?: InstanceType<typeof CategoryUncheckedCreateNestedManyWithoutPostsInput>;
}

@InputType()
export class PostUncheckedUpdateManyWithoutAuthorNestedInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUncheckedUpdateManyWithoutCategoriesNestedInput {
    @Field(() => [PostCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => PostCreateWithoutCategoriesInput)
    create?: Array<PostCreateWithoutCategoriesInput>;
    @Field(() => [PostCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoriesInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutCategoriesInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutCategoriesInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutCategoriesInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutCategoriesInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutCategoriesInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutCategoriesInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUncheckedUpdateManyWithoutPostsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class PostUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class PostUncheckedUpdateWithoutAuthorInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => CategoryUncheckedUpdateManyWithoutPostsNestedInput, {nullable:true})
    categories?: InstanceType<typeof CategoryUncheckedUpdateManyWithoutPostsNestedInput>;
}

@InputType()
export class PostUncheckedUpdateWithoutCategoriesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class PostUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => CategoryUncheckedUpdateManyWithoutPostsNestedInput, {nullable:true})
    categories?: InstanceType<typeof CategoryUncheckedUpdateManyWithoutPostsNestedInput>;
}

@InputType()
export class PostUpdateManyMutationInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}

@InputType()
export class PostUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => PostScalarWhereInput, {nullable:false})
    @Type(() => PostScalarWhereInput)
    where!: InstanceType<typeof PostScalarWhereInput>;
    @Field(() => PostUpdateManyMutationInput, {nullable:false})
    @Type(() => PostUpdateManyMutationInput)
    data!: InstanceType<typeof PostUpdateManyMutationInput>;
}

@InputType()
export class PostUpdateManyWithWhereWithoutCategoriesInput {
    @Field(() => PostScalarWhereInput, {nullable:false})
    @Type(() => PostScalarWhereInput)
    where!: InstanceType<typeof PostScalarWhereInput>;
    @Field(() => PostUpdateManyMutationInput, {nullable:false})
    @Type(() => PostUpdateManyMutationInput)
    data!: InstanceType<typeof PostUpdateManyMutationInput>;
}

@InputType()
export class PostUpdateManyWithoutAuthorNestedInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUpdateManyWithoutCategoriesNestedInput {
    @Field(() => [PostCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => PostCreateWithoutCategoriesInput)
    create?: Array<PostCreateWithoutCategoriesInput>;
    @Field(() => [PostCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoriesInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutCategoriesInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutCategoriesInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutCategoriesInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutCategoriesInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutCategoriesInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutCategoriesInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => PostUpdateWithoutAuthorInput)
    data!: InstanceType<typeof PostUpdateWithoutAuthorInput>;
}

@InputType()
export class PostUpdateWithWhereUniqueWithoutCategoriesInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => PostUpdateWithoutCategoriesInput)
    data!: InstanceType<typeof PostUpdateWithoutCategoriesInput>;
}

@InputType()
export class PostUpdateWithoutAuthorInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => CategoryUpdateManyWithoutPostsNestedInput, {nullable:true})
    categories?: InstanceType<typeof CategoryUpdateManyWithoutPostsNestedInput>;
}

@InputType()
export class PostUpdateWithoutCategoriesInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutPostsNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutPostsNestedInput>;
}

@InputType()
export class PostUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutPostsNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutPostsNestedInput>;
    @Field(() => CategoryUpdateManyWithoutPostsNestedInput, {nullable:true})
    categories?: InstanceType<typeof CategoryUpdateManyWithoutPostsNestedInput>;
}

@InputType()
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => PostUpdateWithoutAuthorInput)
    update!: InstanceType<typeof PostUpdateWithoutAuthorInput>;
    @Field(() => PostCreateWithoutAuthorInput, {nullable:false})
    @Type(() => PostCreateWithoutAuthorInput)
    create!: InstanceType<typeof PostCreateWithoutAuthorInput>;
}

@InputType()
export class PostUpsertWithWhereUniqueWithoutCategoriesInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => PostUpdateWithoutCategoriesInput)
    update!: InstanceType<typeof PostUpdateWithoutCategoriesInput>;
    @Field(() => PostCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => PostCreateWithoutCategoriesInput)
    create!: InstanceType<typeof PostCreateWithoutCategoriesInput>;
}

@InputType()
export class PostWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class PostWhereInput {
    @Field(() => [PostWhereInput], {nullable:true})
    AND?: Array<PostWhereInput>;
    @Field(() => [PostWhereInput], {nullable:true})
    OR?: Array<PostWhereInput>;
    @Field(() => [PostWhereInput], {nullable:true})
    NOT?: Array<PostWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    published?: InstanceType<typeof BoolFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    authorId?: InstanceType<typeof IntFilter>;
    @Field(() => CategoryListRelationFilter, {nullable:true})
    categories?: InstanceType<typeof CategoryListRelationFilter>;
}

@ObjectType()
export class Post {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    published!: boolean;
    @Field(() => User, {nullable:false})
    author?: InstanceType<typeof User>;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => [Category], {nullable:true})
    categories?: Array<Category>;
    @Field(() => PostCount, {nullable:false})
    _count?: InstanceType<typeof PostCount>;
}

@ArgsType()
export class UpdateManyPostArgs {
    @Field(() => PostUpdateManyMutationInput, {nullable:false})
    @Type(() => PostUpdateManyMutationInput)
    data!: InstanceType<typeof PostUpdateManyMutationInput>;
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: InstanceType<typeof PostWhereInput>;
}

@ArgsType()
export class UpdateOnePostArgs {
    @Field(() => PostUpdateInput, {nullable:false})
    @Type(() => PostUpdateInput)
    data!: InstanceType<typeof PostUpdateInput>;
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateInput, {nullable:false})
    @Type(() => PostCreateInput)
    create!: InstanceType<typeof PostCreateInput>;
    @Field(() => PostUpdateInput, {nullable:false})
    @Type(() => PostUpdateInput)
    update!: InstanceType<typeof PostUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
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

@InputType()
export class EnumRoleFieldUpdateOperationsInput {
    @Field(() => Role, {nullable:true})
    set?: keyof typeof Role;
}

@InputType()
export class EnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class EnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
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
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
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
export class NestedEnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedEnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
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
export class NestedStringNullableFilter {
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
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
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
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
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
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
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
export class StringNullableFilter {
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
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
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
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
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

@ObjectType()
export class AggregateProfile {
    @Field(() => ProfileCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregate>;
    @Field(() => ProfileAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProfileAvgAggregate>;
    @Field(() => ProfileSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProfileSumAggregate>;
    @Field(() => ProfileMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregate>;
    @Field(() => ProfileMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregate>;
}

@ArgsType()
export class CreateManyProfileArgs {
    @Field(() => [ProfileCreateManyInput], {nullable:false})
    @Type(() => ProfileCreateManyInput)
    data!: Array<ProfileCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProfileArgs {
    @Field(() => ProfileCreateInput, {nullable:false})
    @Type(() => ProfileCreateInput)
    data!: InstanceType<typeof ProfileCreateInput>;
}

@ArgsType()
export class DeleteManyProfileArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: InstanceType<typeof ProfileWhereInput>;
}

@ArgsType()
export class DeleteOneProfileArgs {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProfileOrThrowArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProfileOrderByWithRelationInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProfileArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProfileOrderByWithRelationInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}

@ArgsType()
export class FindManyProfileArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProfileOrderByWithRelationInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProfileOrThrowArgs {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueProfileArgs {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@ArgsType()
export class ProfileAggregateArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProfileOrderByWithRelationInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProfileCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregateInput>;
    @Field(() => ProfileAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProfileAvgAggregateInput>;
    @Field(() => ProfileSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProfileSumAggregateInput>;
    @Field(() => ProfileMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregateInput>;
    @Field(() => ProfileMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregateInput>;
}

@InputType()
export class ProfileAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class ProfileAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    userId?: number;
}

@InputType()
export class ProfileAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProfileCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    bio!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProfileCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => Int, {nullable:false})
    userId!: number;
}

@InputType()
export class ProfileCreateNestedOneWithoutUserInput {
    @Field(() => ProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => ProfileCreateWithoutUserInput)
    create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
    @Field(() => ProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class ProfileCreateOrConnectWithoutUserInput {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => ProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => ProfileCreateWithoutUserInput)
    create!: InstanceType<typeof ProfileCreateWithoutUserInput>;
}

@InputType()
export class ProfileCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    bio!: string;
}

@InputType()
export class ProfileCreateInput {
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutProfileInput>;
}

@ArgsType()
export class ProfileGroupByArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProfileOrderByWithAggregationInput>;
    @Field(() => [ProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProfileScalarFieldEnum>;
    @Field(() => ProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProfileScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProfileCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregateInput>;
    @Field(() => ProfileAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProfileAvgAggregateInput>;
    @Field(() => ProfileSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProfileSumAggregateInput>;
    @Field(() => ProfileMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregateInput>;
    @Field(() => ProfileMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregateInput>;
}

@ObjectType()
export class ProfileGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => ProfileCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregate>;
    @Field(() => ProfileAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProfileAvgAggregate>;
    @Field(() => ProfileSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProfileSumAggregate>;
    @Field(() => ProfileMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregate>;
    @Field(() => ProfileMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregate>;
}

@InputType()
export class ProfileMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class ProfileMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class ProfileMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class ProfileMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    bio?: string;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class ProfileMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => ProfileCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProfileCountOrderByAggregateInput>;
    @Field(() => ProfileAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProfileAvgOrderByAggregateInput>;
    @Field(() => ProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxOrderByAggregateInput>;
    @Field(() => ProfileMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProfileMinOrderByAggregateInput>;
    @Field(() => ProfileSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProfileSumOrderByAggregateInput>;
}

@InputType()
export class ProfileOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileRelationFilter {
    @Field(() => ProfileWhereInput, {nullable:true})
    is?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => ProfileWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProfileWhereInput>;
}

@InputType()
export class ProfileScalarWhereWithAggregatesInput {
    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProfileScalarWhereWithAggregatesInput>;
    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProfileScalarWhereWithAggregatesInput>;
    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProfileScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bio?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class ProfileSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class ProfileSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class ProfileSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class ProfileUncheckedCreateNestedOneWithoutUserInput {
    @Field(() => ProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => ProfileCreateWithoutUserInput)
    create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
    @Field(() => ProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class ProfileUncheckedCreateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    bio!: string;
}

@InputType()
export class ProfileUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => Int, {nullable:false})
    userId!: number;
}

@InputType()
export class ProfileUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUncheckedUpdateOneWithoutUserNestedInput {
    @Field(() => ProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => ProfileCreateWithoutUserInput)
    create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
    @Field(() => ProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
    @Field(() => ProfileUpsertWithoutUserInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutUserInput)
    upsert?: InstanceType<typeof ProfileUpsertWithoutUserInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => ProfileUpdateWithoutUserInput, {nullable:true})
    @Type(() => ProfileUpdateWithoutUserInput)
    update?: InstanceType<typeof ProfileUpdateWithoutUserInput>;
}

@InputType()
export class ProfileUncheckedUpdateWithoutUserInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUpdateOneWithoutUserNestedInput {
    @Field(() => ProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => ProfileCreateWithoutUserInput)
    create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
    @Field(() => ProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
    @Field(() => ProfileUpsertWithoutUserInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutUserInput)
    upsert?: InstanceType<typeof ProfileUpsertWithoutUserInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => ProfileUpdateWithoutUserInput, {nullable:true})
    @Type(() => ProfileUpdateWithoutUserInput)
    update?: InstanceType<typeof ProfileUpdateWithoutUserInput>;
}

@InputType()
export class ProfileUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutProfileNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutProfileNestedInput>;
}

@InputType()
export class ProfileUpsertWithoutUserInput {
    @Field(() => ProfileUpdateWithoutUserInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutUserInput)
    update!: InstanceType<typeof ProfileUpdateWithoutUserInput>;
    @Field(() => ProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => ProfileCreateWithoutUserInput)
    create!: InstanceType<typeof ProfileCreateWithoutUserInput>;
}

@InputType()
export class ProfileWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class ProfileWhereInput {
    @Field(() => [ProfileWhereInput], {nullable:true})
    AND?: Array<ProfileWhereInput>;
    @Field(() => [ProfileWhereInput], {nullable:true})
    OR?: Array<ProfileWhereInput>;
    @Field(() => [ProfileWhereInput], {nullable:true})
    NOT?: Array<ProfileWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    bio?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => IntFilter, {nullable:true})
    userId?: InstanceType<typeof IntFilter>;
}

@ObjectType()
export class Profile {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    bio!: string;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => Int, {nullable:false})
    userId!: number;
}

@ArgsType()
export class UpdateManyProfileArgs {
    @Field(() => ProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => ProfileUpdateManyMutationInput)
    data!: InstanceType<typeof ProfileUpdateManyMutationInput>;
    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: InstanceType<typeof ProfileWhereInput>;
}

@ArgsType()
export class UpdateOneProfileArgs {
    @Field(() => ProfileUpdateInput, {nullable:false})
    @Type(() => ProfileUpdateInput)
    data!: InstanceType<typeof ProfileUpdateInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProfileArgs {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => ProfileCreateInput, {nullable:false})
    @Type(() => ProfileCreateInput)
    create!: InstanceType<typeof ProfileCreateInput>;
    @Field(() => ProfileUpdateInput, {nullable:false})
    @Type(() => ProfileUpdateInput)
    update!: InstanceType<typeof ProfileUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    role!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    posts?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
}

@InputType()
export class UserCreateNestedOneWithoutPostsInput {
    @Field(() => UserCreateWithoutPostsInput, {nullable:true})
    @Type(() => UserCreateWithoutPostsInput)
    create?: InstanceType<typeof UserCreateWithoutPostsInput>;
    @Field(() => UserCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPostsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPostsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    @Type(() => UserCreateWithoutProfileInput)
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProfileInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutPostsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutPostsInput, {nullable:false})
    @Type(() => UserCreateWithoutPostsInput)
    create!: InstanceType<typeof UserCreateWithoutPostsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutProfileInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutProfileInput, {nullable:false})
    @Type(() => UserCreateWithoutProfileInput)
    create!: InstanceType<typeof UserCreateWithoutProfileInput>;
}

@InputType()
export class UserCreateWithoutPostsInput {
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof ProfileCreateNestedOneWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutProfileInput {
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostCreateNestedManyWithoutAuthorInput>;
    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof ProfileCreateNestedOneWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: InstanceType<typeof PostOrderByRelationAggregateInput>;
    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: InstanceType<typeof ProfileOrderByWithRelationInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => EnumRoleWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class UserSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class UserUncheckedCreateWithoutPostsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof ProfileUncheckedCreateNestedOneWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutProfileInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof ProfileUncheckedCreateNestedOneWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutPostsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: InstanceType<typeof ProfileUncheckedUpdateOneWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutProfileInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: InstanceType<typeof ProfileUncheckedUpdateOneWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutPostsNestedInput {
    @Field(() => UserCreateWithoutPostsInput, {nullable:true})
    @Type(() => UserCreateWithoutPostsInput)
    create?: InstanceType<typeof UserCreateWithoutPostsInput>;
    @Field(() => UserCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPostsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPostsInput>;
    @Field(() => UserUpsertWithoutPostsInput, {nullable:true})
    @Type(() => UserUpsertWithoutPostsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutPostsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutPostsInput, {nullable:true})
    @Type(() => UserUpdateWithoutPostsInput)
    update?: InstanceType<typeof UserUpdateWithoutPostsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutProfileNestedInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    @Type(() => UserCreateWithoutProfileInput)
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProfileInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserUpsertWithoutProfileInput, {nullable:true})
    @Type(() => UserUpsertWithoutProfileInput)
    upsert?: InstanceType<typeof UserUpsertWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutProfileInput, {nullable:true})
    @Type(() => UserUpdateWithoutProfileInput)
    update?: InstanceType<typeof UserUpdateWithoutProfileInput>;
}

@InputType()
export class UserUpdateWithoutPostsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => ProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: InstanceType<typeof ProfileUpdateOneWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutProfileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: InstanceType<typeof PostUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: InstanceType<typeof PostUpdateManyWithoutAuthorNestedInput>;
    @Field(() => ProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: InstanceType<typeof ProfileUpdateOneWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithoutPostsInput {
    @Field(() => UserUpdateWithoutPostsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPostsInput)
    update!: InstanceType<typeof UserUpdateWithoutPostsInput>;
    @Field(() => UserCreateWithoutPostsInput, {nullable:false})
    @Type(() => UserCreateWithoutPostsInput)
    create!: InstanceType<typeof UserCreateWithoutPostsInput>;
}

@InputType()
export class UserUpsertWithoutProfileInput {
    @Field(() => UserUpdateWithoutProfileInput, {nullable:false})
    @Type(() => UserUpdateWithoutProfileInput)
    update!: InstanceType<typeof UserUpdateWithoutProfileInput>;
    @Field(() => UserCreateWithoutProfileInput, {nullable:false})
    @Type(() => UserCreateWithoutProfileInput)
    create!: InstanceType<typeof UserCreateWithoutProfileInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleFilter>;
    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: InstanceType<typeof PostListRelationFilter>;
    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: InstanceType<typeof ProfileRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;
    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;
    @Field(() => Profile, {nullable:true})
    profile?: InstanceType<typeof Profile> | null;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}
