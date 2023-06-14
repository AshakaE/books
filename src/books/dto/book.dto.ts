import { IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  author: string;

  @IsString()
  title: string;
}

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  author: string;

  @IsString()
  @IsOptional()
  title: string;
}
