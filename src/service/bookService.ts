import BookRepository from "../repository/bookRepository";
import { Book } from "../interfaces/book";

interface Repository {
  getAll(): Promise<Array<Book>>;
  getById(id: number): Promise<Book>;
  create(name: string, description: string, author: string): Promise<Book>;
}

export class BookService {
  public repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  async getById(id: number): Promise<Book> {
    return await this.repository.getById(id);
  }

  async getAll(): Promise<Array<Book>> {
    return await this.repository.getAll();
  }

  async create(
    name: string,
    description: string,
    author: string
  ): Promise<Book> {
    return this.repository.create(name, description, author);
  }
}

export default new BookService(BookRepository);
