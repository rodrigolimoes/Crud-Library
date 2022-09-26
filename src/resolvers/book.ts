import { Book } from "../interfaces/book";

interface Service {
  getById(id: number): Promise<Book>;
  getAll(): Promise<Array<Book>>;
  create(name: string, description: string, author: string): Promise<Book>;
}

class BookResolver {
  private service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  async getById({ id }: { id: number }) {
    return this.service.getById(id);
  }

  async getAll(): Promise<Array<Book>> {
    return await this.service.getAll();
  }

  async create({
    name,
    description,
    author,
  }: {
    name: string;
    description: string;
    author: string;
  }) {
    return await this.service.create(name, description, author);
  }
}

export default BookResolver;
