import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.DATABASE_URL,
      // host: 'localhost',
      // port: 3306,
      // username: 'mysql',
      // password: 'mysql',
      // database: 'blog',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    CommentsModule,
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
