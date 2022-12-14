import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserInput } from "src/user/dto/create-user.dto";
import { User } from "src/user/models/user.model";

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async findOneById(id: string): Promise<User> {
    return this.prismaService.user.findUniqueOrThrow({ where: { id } });
  }

  async findOneByName(name: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { name } });
  }

  async create(input: CreateUserInput): Promise<User> {
    return this.prismaService.user.create({
      data: input,
    });
  }
}
