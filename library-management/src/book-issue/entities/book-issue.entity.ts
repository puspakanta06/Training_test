
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Book } from '../../book/entities/book.entity';

@Entity()
export class BookIssue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.bookIssues, { eager: true })
  user: User;

  @ManyToOne(() => Book, (book) => book.bookIssues, { eager: true })
  book: Book;

  @CreateDateColumn()
  issueDate: Date;

  @Column({ nullable: true })
  returnDate: Date;
}
