import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ApolloError } from "apollo-server-express";
import { ExtractJwt, Strategy } from "passport-jwt";

import { IPayload } from "src/auth/interfaces/payload";
import { UserRepository } from "src/user/user.repository";

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  "jwt-refresh-token"
) {
  constructor(
    readonly configService: ConfigService,
    private readonly userRepository: UserRepository
  ) {
    console.log(configService.get("JWT_REFRESH_TOKEN_SECRET"));

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // 아래 validate에서 exp 비교하기 위함
      secretOrKey: configService.get("JWT_REFRESH_TOKEN_SECRET"),
    });
  }

  async validate(payload: IPayload) {
    const { exp, sub } = payload;
    const now = Math.floor(Date.now() / 1000);

    if (exp < now) {
      throw new ApolloError("refresh token expired", "REFRESH_TOKEN_EXPIRED");
    }

    const user = await this.userRepository.findOneById(sub);

    if (!user) {
      throw new ApolloError("unauthorized", "UNAUTHORIZED");
    }

    return user;
  }
}
