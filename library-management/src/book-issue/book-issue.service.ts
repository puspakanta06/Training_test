import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookIssueDto, ReturnBookDto } from './dto/create-book-issue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookIssue } from './entities/book-issue.entity';
import { Repository } from 'typeorm';
import { Book } from 'src/book/entities/book.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class BookIssueService {
   constructor(
    @InjectRepository(BookIssue) private issueRepo: Repository<BookIssue>,
    @InjectRepository(Book) private bookRepo: Repository<Book>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async issueBook(dto: CreateBookIssueDto, userId: number) {
    const book = await this.bookRepo.findOne({ where: { id: dto.bookId } });
    const user = await this.userRepo.findOne({ where: { id: userId } });

    if (!book || !user) throw new NotFoundException('Book or user not found');

    const issue = this.issueRepo.create({ book, user });
    return this.issueRepo.save(issue);
  }

  async returnBook(dto: ReturnBookDto) {
    const issue = await this.issueRepo.findOne({ where: { id: dto.issueId } });
    if (!issue) throw new NotFoundException('Issue record not found');

    issue.returnDate = new Date();
    return this.issueRepo.save(issue);
  }

  async findUserIssues(userId: number) {
    return this.issueRepo.find({ where: { user: { id: userId } } });
  }
}
