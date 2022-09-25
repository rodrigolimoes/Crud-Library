import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";

@Entity("book")
export class BookEntity extends BaseEntity {
  @PrimaryColumn({ unique: true, generated: true })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  author: string;
}
