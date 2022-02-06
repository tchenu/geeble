import { Type } from 'class-transformer';
import { IsString, IsInt, IsDate, IsNumber, IsNotEmpty, IsNumberString, IsEmail } from 'class-validator';

export class CreateEventDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    organizer: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    date: Date;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    price: number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    seats: number;
}
