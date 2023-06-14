import { Injectable } from '@nestjs/common';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { Books } from '../entity/books.entity';
import { CreateBookDto, UpdateBookDto } from '../dto/book.dto';

@Injectable()
export class BooksRepository extends Repository<Books> {
  constructor(private dataSource: DataSource) {
    super(Books, dataSource.createEntityManager());
  }
  async findAll(): Promise<Books[]> {
    return this.find();
  }

  async findBook(id: number): Promise<Books> {
    return this.findOneBy({ id });
  }

  async createBook(createBookDto: CreateBookDto): Promise<Books> {
    const newBook = this.create(createBookDto);
    return this.save(newBook);
  }

  async updateBook(id: number, update: UpdateBookDto): Promise<boolean> {
    const bookToUpdate = await this.findOneBy({ id });
    let result = false;
    if (bookToUpdate) {
      const updateAction = await this.createQueryBuilder()
        .update(Books)
        .set({ title: update.title, author: update.author })
        .where('id = :id', { id })
        .execute();

      result = updateAction.affected === 1;
    }

    return result;
  }

  async deleteBook(id: number): Promise<Books | false> {
    const bookToDelete = await this.findOneBy({ id });
    if (bookToDelete) {
      return this.remove(bookToDelete);
    }
    return false;
  }
}
