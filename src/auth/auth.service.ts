import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { ApolloError } from "apollo-server-express";

import { RegenerateAccessTokenOutput } from "src/auth/dto/regenerate-access-token.dto";
import { SignInInput, SignInOutput } from "src/auth/dto/sign-in.dto";
import { IPayload } from "src/auth/interfaces/payload";
import { UserRepository } from "src/user/user.repository";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private userRepository: UserRepository
  ) {}

  async signInUser(input: SignInInput): Promise<SignInOutput> {
    const { name, password } = input;

    const user = await this.userRepository.findOneByName(name);

    if (user && user.password === password) {
      const payload = { sub: user.id };
      const accessToken = this.signAccessToken(payload);
      const refreshToken = this.signRefreshToken(payload);

      return { accessToken, refreshToken };
    }

    throw new ApolloError("sign in error", "SIGN_IN_ERROR");
  }

  async regenerateAccessToken(
    userId: string
  ): Promise<RegenerateAccessTokenOutput> {
    const payload: IPayload = { sub: userId };
    const accessToken = this.signAccessToken(payload);

    return { accessToken };
  }

  private signAccessToken(payload: IPayload): string {
    return this.jwtService.sign(payload, {
      secret: this.configService.get("JWT_ACCESS_TOKEN_SECRET"),
      expiresIn: this.configService.get("JWT_ACCESS_TOKEN_EXPIRES_IN"),
    });
  }

  private signRefreshToken(payload: IPayload): string {
    return this.jwtService.sign(payload, {
      secret: this.configService.get("JWT_REFRESH_TOKEN_SECRET"),
      expiresIn: this.configService.get("JWT_REFRESH_TOKEN_EXPIRES_IN"),
    });
  }
}
