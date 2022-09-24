import {BookService} from '../interfaces/book/bookService';


class BookResolver {
    private service: BookService

    constructor(service: BookService) {
        this.service = service;
    }

    getAll(){
        return this.service.getAll();
    }
}


export default BookResolver;