import { IsString, IsIn } from 'class-validator'
import { TaskStatus } from './task.model'
import { PartialType } from "@nestjs/swagger";

export class TaskDto {
  id?: string

  @IsString()
  title: string

  @IsString()
  description: string

  @IsIn(['pending', 'in_progress', 'completed'])
  status: TaskStatus
}

export class UpdateTaskDto extends PartialType(TaskDto) {}
