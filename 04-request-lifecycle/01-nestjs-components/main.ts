import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { LoggingMiddleware } from "./middlewares/logging.middleware";
import { ApiVersionInterceptor } from "./interceptors/api-version.interceptor";
import { HttpErrorFilter } from "./filters/http-error.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(LoggingMiddleware)
  app.useGlobalInterceptors(new ApiVersionInterceptor())
  app.useGlobalFilters(new HttpErrorFilter())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
