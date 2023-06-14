import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Books } from '../entity/books.entity';
import { BooksRepository } from '../repository/books.repository';
import { CreateBookDto, UpdateBookDto } from '../dto/book.dto';
import { Response } from 'express';
@Controller('/books')
export class BooksController {
  constructor(private booksRepository: BooksRepository) {}
  @Get()
  async getBooks(): Promise<Books[]> {
    return this.booksRepository.findAll();
  }

  @Get('/:id')
  async getBook(@Param('id') id: number): Promise<Books> {
    const book = await this.booksRepository.findBook(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  @Post()
  async addBook(@Body() createBook: CreateBookDto): Promise<Books> {
    return this.booksRepository.createBook(createBook);
  }

  @Put('/:id')
  async updateBook(
    @Param('id') id: number,
    @Body() updateValues: UpdateBookDto,
    @Res() res: Response,
  ): Promise<any> {
    const update = await this.booksRepository.updateBook(id, updateValues);

    if (!update) {
      return res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .json({ message: 'An error occured updating book or book not found' });
    }
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Book updated successfully' });
  }

  @Delete('/:id')
  async deleteBook(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const deleted = await this.booksRepository.deleteBook(id);

    if (!deleted) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'An error occured deleting book or book not found' });
    }
    return deleted;
  }
}
