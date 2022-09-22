import {Router} from 'express';
import {graphqlHTTP} from "express-graphql";
const router = Router();

// resolvers
import {Resolvers} from '../resolvers';
import {Book} from '../service/Book';

// schema
import schema from '../schema';

const resolver = new Resolvers(new Book())

router.use('/', graphqlHTTP({
    schema: schema,
    rootValue: resolver.getResolvers(),
    graphiql: true
}));

export {router};