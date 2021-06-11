
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateArticaleDto {
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
