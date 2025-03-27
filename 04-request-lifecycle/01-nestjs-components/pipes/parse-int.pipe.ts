import { BadRequestException, PipeTransform } from "@nestjs/common";

export class ParseIntPipe implements PipeTransform {
  transform(value: string): number {
    const transformedValue: number = parseInt(value, 10)
    if (isNaN(transformedValue)) throw new BadRequestException(`"${value}" не является числом`)

    return transformedValue
  }
}
