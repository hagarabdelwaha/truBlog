import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    private userService: UsersService,

  ) { }

  async create(createArticleDto: CreateArticleDto) {
    const authorExist = await this.userService.findOne(createArticleDto.author);
    if (!authorExist) throw new HttpException('invalid author id ', HttpStatus.BAD_REQUEST);
    await this.articleRepository.insert(createArticleDto);
    return;
  }

  findAll(): Promise<Article[]> {
    return this.articleRepository.find({ relations: ["author"] });
  }

  findOne(id: number) {
    return this.articleRepository.findOne({ id }, { relations: ["author", "comments"] });
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    // TODO: check user like to increment or decrement likes count
    const article = await this.articleRepository.findOne({ id });
    if (article && updateArticleDto.like) {
      article.likes = article.likes + 1;
      await this.articleRepository.save(article);
    }
    return;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
