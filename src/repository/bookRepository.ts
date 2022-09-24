import { BookEntity } from "../database/entity/bookEntity";
import { Book } from "../interfaces/book";

type Entity = typeof BookEntity;

class BookRepository {
  public entity: Entity;

  constructor(repository: Entity) {
    this.entity = repository;
  }

  async getAll(): Promise<Array<Book>> {
    return await this.entity.find();
  }
}

export default new BookRepository(BookEntity);
