import { PartialType } from '@nestjs/mapped-types';
import { CreateArticaleDto } from './create-articale.dto';

export class UpdateArticaleDto extends PartialType(CreateArticaleDto) {
    like: true
}
