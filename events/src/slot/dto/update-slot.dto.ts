import { PartialType } from '@nestjs/mapped-types';
import { CreateSlotDto } from './create-slot.dto';
import { IsString } from 'class-validator';

export class UpdateSlotDto extends PartialType(CreateSlotDto) {
    @IsString()
    transaction: string;
}
