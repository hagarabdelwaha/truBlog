import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Article } from '../../articles/entities/article.entity';
import { Comment } from '../../comments/entities/comment.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    jobTitle: string;

    @OneToMany(type => Article, article => article.author)
    articles: Article[];

    @OneToMany(type => Comment, comment => comment.user)
    comments: Comment[];
}
