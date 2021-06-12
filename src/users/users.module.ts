import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from '../articles/articles.module';
import { CommentsModule } from '../comments/comments.module';
import { User } from './entities/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => ArticlesModule), forwardRef(() => CommentsModule)],
  exports: [TypeOrmModule, UsersService],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
