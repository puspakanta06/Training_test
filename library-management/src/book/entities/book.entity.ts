import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  JoinTable,
  DeleteDateColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { BookIssue } from '../../book-issue/entities/book-issue.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @DeleteDateColumn()
  deletedAt?: Date;
 
  @ManyToMany(() => Category, (category) => category.books, { cascade: true })
  @JoinTable()
  categories: Category[];

  @OneToMany(() => BookIssue, (bookIssue) => bookIssue.book)
  bookIssues: BookIssue[];
}
