import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ApolloError } from "apollo-server-express";
import { ExtractJwt, Strategy } from "passport-jwt";

import { IPayload } from "src/auth/interfaces/payload";
import { UserRepository } from "src/user/user.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private userRepository: UserRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // 아래 validate에서 exp 비교하기 위함
      secretOrKey: configService.get("JWT_ACCESS_TOKEN_SECRET"),
    });
  }

  async validate(payload: IPayload) {
    const { sub, exp } = payload;
    const now = Math.floor(Date.now() / 1000);

    if (exp < now) {
      throw new ApolloError("access token expired", "ACCESS_TOKEN_EXPIRED");
    }

    const user = await this.userRepository.findOneById(sub);

    if (!user) {
      throw new ApolloError("unauthorized", "UNAUTHORIZED");
    }

    return user;
  }
}
