import { Book } from "../interfaces/book";

interface Service {
  getAll(): Promise<Array<Book>>;
}

class BookResolver {
  private service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  getAll() {
    return this.service.getAll();
  }
}

export default BookResolver;
