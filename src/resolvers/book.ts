import { Book } from "../interfaces/book";

interface Service {
  getAll(): Promise<Array<Book>>;
  create(name: string, description: string, author: string): Promise<Book>;
}

class BookResolver {
  private service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  async getAll(): Promise<Array<Book>> {
    return await this.service.getAll();
  }

  async create({ name, description, author }) {
    return await this.service.create(name, description, author);
  }
}

export default BookResolver;
