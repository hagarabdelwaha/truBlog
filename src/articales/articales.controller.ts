import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticalesService } from './articales.service';
import { CreateArticaleDto } from './dto/create-articale.dto';
import { UpdateArticaleDto } from './dto/update-articale.dto';

@Controller('articales')
export class ArticalesController {
  constructor(private readonly articalesService: ArticalesService) {}

  @Post()
  create(@Body() createArticaleDto: CreateArticaleDto) {
    return this.articalesService.create(createArticaleDto);
  }

  @Get()
  findAll() {
    return this.articalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticaleDto: UpdateArticaleDto) {
    return this.articalesService.update(+id, updateArticaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articalesService.remove(+id);
  }
}
