import { Module } from '@nestjs/common';
import { BookIssueService } from './book-issue.service';
import { BookIssueController } from './book-issue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookIssue } from './entities/book-issue.entity';
import { Book } from 'src/book/entities/book.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
   imports: [TypeOrmModule.forFeature([BookIssue, Book, User])],
  controllers: [BookIssueController],
  providers: [BookIssueService],
})
export class BookIssueModule {}
