import { IsString,IsNotEmpty, IsUUID } from 'class-validator';


export class RefundTransationDto {
    @IsNotEmpty()
    @IsUUID()
    slotId: string;
}
