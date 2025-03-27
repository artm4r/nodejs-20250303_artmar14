import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from "express";
import { appendFileSync } from 'node:fs'

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response : Response = host.switchToHttp().getResponse()
    const status : number = exception instanceof HttpException ? exception.getStatus() : 500

    const errorTimestamp = new Date().toISOString()

    appendFileSync('errors.log', `[${errorTimestamp}] ${status} - ${exception.message}\n`)

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: errorTimestamp,
        message: exception.message,
      });
  }
}
