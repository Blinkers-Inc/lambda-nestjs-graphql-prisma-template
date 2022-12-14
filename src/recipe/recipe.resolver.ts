import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import { Public } from "src/auth/decorators/skip-auth.decorator";

import { PrismaService } from "../prisma/prisma.service";

import { NewRecipeInput } from "./dto/new-recipe.input";
import { RecipesArgs } from "./dto/recipes.args";
import { Recipe } from "./models/recipe.model";
import { RecipesService } from "./recipe.service";

const pubSub = new PubSub();

@Resolver((of) => Recipe)
export class RecipesResolver {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly prisma: PrismaService
  ) {}

  @Public()
  @Query((returns) => Recipe)
  async recipe(@Args("id") id: string): Promise<Recipe> {
    const recipe = await this.recipesService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Query((returns) => [Recipe])
  recipes(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipesService.findAll(recipesArgs);
  }

  @Mutation((returns) => Recipe)
  async addRecipe(
    @Args("newRecipeData") newRecipeData: NewRecipeInput
  ): Promise<Recipe> {
    const recipe = await this.recipesService.create(newRecipeData);
    pubSub.publish("recipeAdded", { recipeAdded: recipe });
    return { id: "1" } as Recipe;
  }

  @Mutation((returns) => Boolean)
  async removeRecipe(@Args("id") id: string) {
    return this.recipesService.remove(id);
  }

  @Subscription((returns) => Recipe)
  recipeAdded() {
    return pubSub.asyncIterator("recipeAdded");
  }
}
