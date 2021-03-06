import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { ArticlesService } from '../articles/articles.service';
import { Comment } from './entities/comment.entity';
@Injectable()
export class CommentsService {

  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    private userService: UsersService,
    private articleService: ArticlesService,

  ) { }
  async create(createCommentDto: CreateCommentDto) {
    const userExist = await this.userService.findOne(createCommentDto.user);
    if (!userExist) throw new HttpException('invalid user id ', HttpStatus.BAD_REQUEST);
    const articleExist = await this.articleService.findOne(createCommentDto.article);
    if (!articleExist) throw new HttpException('invalid article id ', HttpStatus.BAD_REQUEST);
    await this.commentRepository.insert(createCommentDto);
    return;
  }

}
