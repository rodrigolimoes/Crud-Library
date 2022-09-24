import BookRepository from "../repository/bookRepository";
import { Book } from "../interfaces/book";

interface Repository {
  getAll(): Promise<Array<Book>>;
}

export class BookService {
  public repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  async getAll() {
    return this.repository.getAll();
  }
}

export default new BookService(BookRepository);
