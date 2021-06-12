import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCommentDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    comment: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    user: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    article: number;
}
