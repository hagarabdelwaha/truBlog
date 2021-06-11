import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Articale } from '../../articales/entities/articale.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @ManyToOne(type => User)
    @JoinColumn()
    user: User["id"];

    @ManyToOne(type => Articale)
    @JoinColumn()
    article: Articale["id"];
}
