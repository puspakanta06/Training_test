import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { In, Repository } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepo: Repository<Book>,
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) { }
  async create(dto: CreateBookDto) {
    if (dto.categories && dto.categories.length > 0) {
      const existingBook = await this.bookRepo.findOne({
        where: { title: dto.title, author: dto.author },
      });

      if (existingBook) {
        throw new ConflictException('Book with the same title and author already exists');
      }
      const categories = await this.categoryRepo.find({
        where: { id: In(dto.categories) },
      });

      if (categories.length !== dto.categories.length) {
        throw new NotFoundException('Some categories not found');
      }


      const book = this.bookRepo.create({
        title: dto.title,
        author: dto.author,
        categories,
      });

      return this.bookRepo.save(book);
    } else {
      const book = this.bookRepo.create({
        title: dto.title,
        author: dto.author,
      });

      return this.bookRepo.save(book);
    }
  }

  findAll() {

    return this.bookRepo.find({
      relations: ['categories'],
      withDeleted: false,
    });
  }

  async findOne(id: number) {
    const book = await this.bookRepo.findOne({
      where: { id },
      relations: ['categories'],
      withDeleted: false,
    });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(id: number, dto: UpdateBookDto) {
    const book = await this.findOne(id);

    if (dto.categories) {
      const categories = await this.categoryRepo.find({
        where: { id: In(dto.categories) },
      });
      book.categories = categories;
    }

    Object.assign(book, dto);
    return this.bookRepo.save(book);
  }

  async remove(id: number) {
    return this.bookRepo.softDelete(id);
  }

  async restore(id: number) {
    const result = await this.bookRepo.restore(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Book with ID ${id} not found or not deleted`);
    }
    return { message: `Book with ID ${id} was restored successfully.` };
  }

}
