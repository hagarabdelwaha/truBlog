import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Comment } from '../../comments/entities/comment.entity';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column({ default: 0 })
    likes: number

    @ManyToOne(type => User)
    @JoinColumn()
    author: User["id"];

    @OneToMany(type => Comment, comment => comment.article)
    comments: Comment[];

}
