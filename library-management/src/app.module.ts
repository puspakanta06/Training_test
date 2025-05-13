import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { CategoryModule } from './category/category.module';
import { BookIssueModule } from './book-issue/book-issue.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Book } from './book/entities/book.entity';
import { BookIssue } from './book-issue/entities/book-issue.entity';
import { Category } from './category/entities/category.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'library_management',
      entities: [User,Category,BookIssue,Book],
      synchronize: false,
    }),
    UserModule, BookModule, CategoryModule, BookIssueModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
