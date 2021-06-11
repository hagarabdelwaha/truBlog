import { Injectable } from '@nestjs/common';
import { CreateArticaleDto } from './dto/create-articale.dto';
import { UpdateArticaleDto } from './dto/update-articale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Articale } from './entities/articale.entity';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class ArticalesService {
  constructor(
    @InjectRepository(Articale)
    private articaleRepository: Repository<Articale>,
    private userService: UsersService,

  ) { }

  async create(createArticaleDto: CreateArticaleDto) {
    const authorExist = await this.userService.findOne(createArticaleDto.author);
    if (!authorExist) return 'invalid author id ';
    await this.articaleRepository.insert(createArticaleDto);
    return;
  }

  findAll(): Promise<Articale[]> {
    return this.articaleRepository.find({ relations: ["author"] });
  }

  findOne(id: number) {
    return this.articaleRepository.findOne({ id }, { relations: ["author", "comments"] });
  }

  async update(id: number, updateArticaleDto: UpdateArticaleDto) {
    // TODO: check user like to increment or decrement likes count
    const articale = await this.articaleRepository.findOne({ id });
    if (articale && updateArticaleDto.like) {
      articale.likes = articale.likes + 1;
      await this.articaleRepository.save(articale);
    }
    return;
  }

  remove(id: number) {
    return `This action removes a #${id} articale`;
  }
}
