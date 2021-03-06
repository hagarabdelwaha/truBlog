import { Module, forwardRef } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { UsersModule } from '../users/users.module';
import { CommentsModule } from '../comments/comments.module';


@Module({
  imports: [TypeOrmModule.forFeature([Article]), forwardRef(() => UsersModule), forwardRef(() => CommentsModule)],
  exports: [TypeOrmModule, ArticlesService],
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule { }
