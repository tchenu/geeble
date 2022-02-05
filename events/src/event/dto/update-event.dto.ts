import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import { Type } from 'class-transformer';
import { IsString, IsInt, IsDate, IsNotEmpty } from 'class-validator';

export class UpdateEventDto extends PartialType(CreateEventDto) {
    @IsString()
    name: string;

    @IsString()
    location: string;

    @IsString()
    organizer: string;

    @Type(() => Date)
    @IsDate()
    date: Date;

    @IsString()
    description: string;

    @Type(() => Number)
    @IsInt()
    price: number;

    @Type(() => Number)
    @IsInt()
    seats: number;
}
