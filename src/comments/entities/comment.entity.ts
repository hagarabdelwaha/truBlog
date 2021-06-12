import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Article } from '../../articles/entities/article.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @ManyToOne(type => User)
    @JoinColumn()
    user: User["id"];

    @ManyToOne(type => Article)
    @JoinColumn()
    article: Article["id"];
}
