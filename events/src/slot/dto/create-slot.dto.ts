import { Type } from 'class-transformer';
import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateSlotDto {
    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    quantity: number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    eventId: number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    user: number;
}
