import { BookIssue } from 'src/book-issue/entities/book-issue.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ default: false })
    isAdmin: boolean;

    // @Column({ nullable: true })
    // role: string;

    // One-to-many: A user can issue many books
    @OneToMany(() => BookIssue, (bookIssue) => bookIssue.user)
    bookIssues: BookIssue[];
}
