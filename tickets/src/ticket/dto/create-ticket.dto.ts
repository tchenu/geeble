import { Type } from 'class-transformer';
import { IsString, IsInt, IsNotEmpty, IsObject } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsString()
  eventId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsObject()
  data: object;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  quantity: number;
}
