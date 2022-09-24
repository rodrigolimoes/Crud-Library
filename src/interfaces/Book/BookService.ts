import {Book} from './Book';

export interface BookService {
    getAll: () => Array<Book>;
}