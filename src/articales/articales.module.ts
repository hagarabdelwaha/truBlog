import { Module, forwardRef } from '@nestjs/common';
import { ArticalesService } from './articales.service';
import { ArticalesController } from './articales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Articale } from './entities/articale.entity';
import { UsersModule } from '../users/users.module';
import { CommentsModule } from 'src/comments/comments.module';


@Module({
  imports: [TypeOrmModule.forFeature([Articale]), forwardRef(() => UsersModule), forwardRef(() => CommentsModule)],
  exports: [TypeOrmModule, ArticalesService],
  controllers: [ArticalesController],
  providers: [ArticalesService]
})
export class ArticalesModule { }
