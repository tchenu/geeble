import { Type } from 'class-transformer';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';


export class CreateTransationDto {
    @IsNotEmpty()
    @IsString()
    slotId: string;
    
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    amount: number;
}