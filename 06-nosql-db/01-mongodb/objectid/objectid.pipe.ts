import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { isValidObjectId } from "mongoose";

@Injectable()
export class ObjectIDPipe implements PipeTransform {
  transform(value: string) {
    if (!isValidObjectId(value)) throw new BadRequestException("Object id must be a valid ObjectId")
    return value;
  }
}
