import { BookEntity } from "../database/entity/bookEntity";
import { Book } from "../interfaces/book";

type Entity = typeof BookEntity;

class BookRepository {
  public entity: Entity;

  constructor(entity: Entity) {
    this.entity = entity;
  }

  async getById(id: number): Promise<Book> {
    return await this.entity.findOne({
      where: {
        id,
      },
    });
  }

  async getBook(name: string): Promise<Book> {
    return await this.entity.findOne({ where: { name } });
  }

  async getAll(): Promise<Array<Book>> {
    return await this.entity.find();
  }

  async create(
    name: string,
    description: string,
    author: string
  ): Promise<Book> {
    return await this.entity.create({ name, description, author }).save();
  }
}

export default new BookRepository(BookEntity);
