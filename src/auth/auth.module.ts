import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { JwtStrategy } from "src/auth/strategies/jwt.strategy";
import { JwtRefreshStrategy } from "src/auth/strategies/jwt-refresh.strategy";
import { UserModule } from "src/user/user.module";

import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    PassportModule.register({
      // defaultStrategy: "jwt",
      // session: false,
    }),
    JwtModule.register({}),
    UserModule,
  ],
  providers: [AuthResolver, AuthService, JwtStrategy, JwtRefreshStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
