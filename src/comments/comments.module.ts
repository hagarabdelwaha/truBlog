import { Module, forwardRef } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { ArticlesModule } from '../articles/articles.module';
import { Comment } from './entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), forwardRef(() => UsersModule), forwardRef(() => ArticlesModule)],
  exports: [TypeOrmModule, CommentsService],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule { }
