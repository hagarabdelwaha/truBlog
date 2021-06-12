
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    body: string;

    @IsNotEmpty()
    @IsNumber()
    author: number;
}