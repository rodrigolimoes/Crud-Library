import {BookService} from '../interfaces/Book/BookService';

export class Book implements BookService{
    getAll(){
        return [{id: 1, name: "rodrigo", description: "sgdhs", author: "diego"}];
    }
}