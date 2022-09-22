import {buildSchema} from 'graphql';

// schema
import { BookSchema } from './Book';


export default buildSchema(BookSchema);