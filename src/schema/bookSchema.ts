export const BookSchema = `
    type Book {
        id: Int
        name: String
        description: String
        author: String
    }
    
    type QueryBookResolver {
        getAll: [Book]
        getById(id: Int!): Book
    }
    
    
    type MutationBookResolver {
        create(name: String!, description: String!, author: String!): Book 
    } 
    
    type Query {
        book: QueryBookResolver
    }
    
    type Mutation {
        book: MutationBookResolver
    }
`;
