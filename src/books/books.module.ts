import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './controllers/books.controller';
import { BooksRepository } from './repository/books.repository';
import { Books } from './entity/books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Books])],
  controllers: [BooksController],
  providers: [BooksRepository, BooksController],
  exports: [BooksController, BooksRepository],
})
export default class BooksModule {}
