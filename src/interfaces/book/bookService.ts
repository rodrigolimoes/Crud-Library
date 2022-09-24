import {Book} from './book';

export interface BookService {
    getAll: () => Array<Book>;
}