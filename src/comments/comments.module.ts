import { Module, forwardRef } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { ArticalesModule } from 'src/articales/articales.module';
import { Comment } from './entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), forwardRef(() => UsersModule), forwardRef(() => ArticalesModule)],
  exports: [TypeOrmModule, CommentsService],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule { }
