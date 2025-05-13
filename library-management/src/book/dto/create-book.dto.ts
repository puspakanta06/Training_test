import { IsString, IsArray, ArrayNotEmpty, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  categories?: number[];
}
