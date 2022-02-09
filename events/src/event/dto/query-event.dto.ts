import { Type } from 'class-transformer';
import { IsInt, IsObject, IsOptional } from 'class-validator';

export class QueryEventDto {
    @Type(() => Number)
    @IsInt()
    @IsOptional()
    skip: number;

    @Type(() => Number)
    @IsInt()
    @IsOptional()
    take: number;
}
