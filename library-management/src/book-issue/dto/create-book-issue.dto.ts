import { IsInt } from 'class-validator';


export class CreateBookIssueDto {
  @IsInt()
  bookId: number;
}

export class ReturnBookDto {
  @IsInt()
  issueId: number;
}