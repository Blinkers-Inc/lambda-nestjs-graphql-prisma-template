import { Injectable } from "@nestjs/common";

import { my_nft_con } from "../@generated";
import { PrismaService } from "../services/prisma/prisma.service";

import { NewRecipeInput } from "./dto/new-recipe.input";
import { RecipesArgs } from "./dto/recipes.args";
import { Recipe } from "./models/recipe.model";

@Injectable()
export class RecipesService {
  constructor(private readonly prisma: PrismaService) {}
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findOne(): Promise<my_nft_con> {
    return this.prisma.my_nft_con.findFirstOrThrow();
  }

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    const myNftCon = await this.prisma.my_nft_con.findFirst();
    return [
      {
        id: myNftCon.uuid,
        title: myNftCon.seller_id,
        description: "hh",
        creationDate: new Date(),
        ingredients: ["파", "고추"],
      },
    ];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
