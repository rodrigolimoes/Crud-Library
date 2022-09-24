import {buildSchema} from 'graphql';

// schema
import { BookSchema } from './bookSchema';


export default buildSchema(BookSchema);