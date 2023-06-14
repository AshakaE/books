import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Books } from '../entity/books.entity';

@Injectable()
export class BooksRepository extends Repository<Books> {
  constructor(private dataSource: DataSource) {
    super(Books, dataSource.createEntityManager());
  }
  findAll(): string {
    return 'This action returns all cats';
  }
}
