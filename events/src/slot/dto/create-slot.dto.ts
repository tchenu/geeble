import { Type } from 'class-transformer';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateSlotDto {
    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    quantity: number;

    @IsNotEmpty()
    @IsString()
    slug: string;
}
