import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Books } from '../entity/books.entity';
import { IsString } from 'class-validator';
export class CreateBookDto {
  @IsString()
  author: string;

  @IsString()
  title: string;
}
@Controller('/books')
export class BooksController {
  @Get()
  async getBooks(): Promise<Books[]> {
    return [
      {
        id: 1,
        author: 'Dan Brown',
        title: 'Angels and Demons',
        created: new Date(),
        updated: new Date(),
      },
      {
        id: 2,
        author: 'Dan Brown',
        title: 'Digital fortress',
        created: new Date(),
        updated: new Date(),
      },
    ];
  }

  @Get('/:id')
  async getBook(@Param('id') id: number): Promise<Books> {
    console.log(id);
    return {
      id: 1,
      author: 'Dan Brown',
      title: 'Angels and Demons',
      created: new Date(),
      updated: new Date(),
    };
  }

  @Post()
  async addBook(@Body() createBook: CreateBookDto): Promise<Books> {
    console.log(createBook);
    return {
      id: 1,
      author: 'Dan Brown',
      title: 'Angels and Demons',
      created: new Date(),
      updated: new Date(),
    };
  }

  @Put('/:id')
  async updateBook(@Param('id') id: number): Promise<Books> {
    console.log(id);
    return {
      id: 1,
      author: 'Dan Brown',
      title: 'Angels and Demons',
      created: new Date(),
      updated: new Date(),
    };
  }

  @Delete('/:id')
  async deleteBook(@Param('id') id: number): Promise<Books> {
    console.log(id);
    return {
      id: 1,
      author: 'Dan Brown',
      title: 'Angels and Demons',
      created: new Date(),
      updated: new Date(),
    };
  }
}
