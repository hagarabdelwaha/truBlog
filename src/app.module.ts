import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
// import { User } from './users/entities/user.entity';
// import { Articale } from './articales/entities/articale.entity';
import { CommentsModule } from './comments/comments.module';
import { ArticalesModule } from './articales/articales.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'hagar',
      password: 'rootpass123',
      database: 'blog',
      // entities: [User, Articale],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    CommentsModule,
    ArticalesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
