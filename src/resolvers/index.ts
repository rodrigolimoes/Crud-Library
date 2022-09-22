import {BookService} from '../interfaces/BookService';


export class Resolvers {
    public book: BookService;

    constructor(book: BookService) {
        this.book = book;
    }


    getResolvers(){
        return {
            book: this.book
        }
    }
}