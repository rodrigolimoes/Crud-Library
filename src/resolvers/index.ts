import bookResolver from './book';
import {BookService} from '../service/bookService';


export default {
    book: new bookResolver(new BookService())
};