import { PartialType } from '@nestjs/mapped-types';
import { CreateSlotDto } from './create-slot.dto';
import { IsEnum, IsString } from 'class-validator';
import { SlotStatus } from '@prisma/client';

export class UpdateSlotDto extends PartialType(CreateSlotDto) {
    @IsString()
    transaction: string;

    @IsEnum(SlotStatus)
    status: SlotStatus;
}
