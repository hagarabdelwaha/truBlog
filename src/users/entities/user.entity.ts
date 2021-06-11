import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Articale } from '../../articales/entities/articale.entity';
import { Comment } from 'src/comments/entities/comment.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    jobTitle: string;

    @OneToMany(type => Articale, articale => articale.author)
    articles: Articale[];

    @OneToMany(type => Comment, comment => comment.user)
    comments: Comment[];
}
