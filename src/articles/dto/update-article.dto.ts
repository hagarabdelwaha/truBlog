import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    @ApiProperty()
    like: boolean
}
