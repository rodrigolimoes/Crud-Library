import {Book} from '../service/Book';
import {BookService} from '../interfaces/Book/BookService';


class BookResolver {
    private service: BookService

    constructor(service: BookService) {
        this.service = service;
    }

    getAll(){
        return this.service.getAll();
    }
}


export default new BookResolver(new Book());