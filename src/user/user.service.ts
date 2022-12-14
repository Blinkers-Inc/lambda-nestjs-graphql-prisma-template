import { Injectable } from "@nestjs/common";
import { ApolloError } from "apollo-server-express";

import { CreateUserInput } from "src/user/dto/create-user.dto";
import { GetUserInput } from "src/user/dto/get-user.dto";
import { UserRepository } from "src/user/user.repository";

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUser(input: GetUserInput) {
    const { id } = input;

    return this.userRepository.findOneById(id);
  }

  async createUser(input: CreateUserInput) {
    const { name } = input;

    const isExistUser = await this.userRepository.findOneByName(name);

    if (isExistUser) {
      throw new ApolloError("already exist user", "ALREADY_EXIST_USER");
    }

    return this.userRepository.create(input);
  }
}
