import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AdminGuard } from 'src/auth/jwt-admin.guard';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @UseGuards(JwtAuthGuard)
  @Get('get_all')
  findAll() {
    return this.bookService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }


  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('create')
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Patch('edit/:id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
  
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Post('restore/:id')
  restore(@Param('id') id: string) {
    return this.bookService.restore(+id);
  }
}
