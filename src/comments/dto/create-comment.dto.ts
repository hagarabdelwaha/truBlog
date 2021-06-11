import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsNumber()
    @IsNotEmpty()
    user: number;

    @IsNumber()
    @IsNotEmpty()
    article: number;
}
