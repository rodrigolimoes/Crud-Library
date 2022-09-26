import { GraphQLError } from "graphql";
import BookRepository from "../repository/bookRepository";
import { Book } from "../interfaces/book";

interface Repository {
  getAll(): Promise<Array<Book>>;
  getById(id: number): Promise<Book>;
  getBook(name: string): Promise<Book>;
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
    const book = await this.repository.getBook(name);

    if (book) throw new GraphQLError("The book is already registered");

    return this.repository.create(name, description, author);
  }
}

export default new BookService(BookRepository);
