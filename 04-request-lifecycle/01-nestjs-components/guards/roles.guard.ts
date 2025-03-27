import { CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Request } from "express";
import { jwtDecode } from "jwt-decode";

export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext) : boolean {
    const request : Request = context.switchToHttp().getRequest()

    //JWT decoding
    let jwtAuthenticated: boolean = false;
    if (request.headers['authorization']) {
      const decodedToken : any = jwtDecode(request.headers['authorization']);
      if (decodedToken.role === 'admin') jwtAuthenticated = true;
    }

    if ((request.headers['x-role'] !== 'admin') && !jwtAuthenticated) throw new ForbiddenException("Доступ запрещён: требуется роль admin")
    return true
  }
}
