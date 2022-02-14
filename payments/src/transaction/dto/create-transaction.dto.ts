import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsUUID } from 'class-validator';


export class CreateTransationDto {
    @IsNotEmpty()
    @IsUUID()
    slotId: string;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    amount: number;
}
