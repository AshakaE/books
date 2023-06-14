import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  findAll(): string {
    return 'All books';
  }
}
