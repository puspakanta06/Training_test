import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Request } from '@nestjs/common';
import { BookIssueService } from './book-issue.service';
import { CreateBookIssueDto, ReturnBookDto } from './dto/create-book-issue.dto';
import { UpdateBookIssueDto } from './dto/update-book-issue.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('book-issue')
@UseGuards(JwtAuthGuard)
export class BookIssueController {
 constructor(private readonly bookIssueService: BookIssueService) {}

  @Post()
  issue(@Body() dto: CreateBookIssueDto, @Request() req) {
    return this.bookIssueService.issueBook(dto, req.user.userId);
  }

  @Post('return')
  return(@Body() dto: ReturnBookDto) {
    return this.bookIssueService.returnBook(dto);
  }

  @Get('all')
  getUserIssues(@Request() req) {
    return this.bookIssueService.findUserIssues(req.user.userId);
  }
}
