import {Book} from '../service/Book';
import {BookService} from '../interfaces/BookService';


class BookResolver implements BookService{
    private book: BookService

    constructor(book: BookService) {
        this.book = book;
    }

    getAll(){
        return this.book.getAll();
    }
}


export default new BookResolver(new Book());