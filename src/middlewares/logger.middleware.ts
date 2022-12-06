import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger("HTTP");

  use(req: Request, res: Response, next: NextFunction) {
    // 요청 객체로부터 ip, http method, url, user agent를 받아온 후
    const { ip, method, originalUrl } = req;
    const userAgent = req.get("user-agent");

    // 응답이 끝나는 이벤트가 발생하면 로그를 찍는다.
    res.on("finish", () => {
      const { statusCode } = res;
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${ip} ${userAgent}`
      );
    });

    next();
  }
}
