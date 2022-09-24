import BookResolver from "./book";
import BookService from "../service/bookService";

export default {
  book: new BookResolver(BookService),
};
