import { Module } from "@nestjs/common";

import { DateScalar } from "../common/scalars/date.scalar";
import { PrismaService } from "../services/prisma/prisma.service";

import { RecipesResolver } from "./recipes.resolver";
import { RecipesService } from "./recipes.service";

@Module({
  providers: [RecipesResolver, RecipesService, PrismaService, DateScalar],
})
export class RecipesModule {}
