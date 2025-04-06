import { IsDateString, IsOptional, IsString, MinLength } from "class-validator";

export class CreateTaskDto {
  @IsString()
  @MinLength(1)
  title: string

  @IsString()
  @IsOptional()
  description: string

  @IsDateString()
  @IsOptional()
  deadline: string
}
