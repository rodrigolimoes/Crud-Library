export const BookSchema = `
    type Book {
        id: Int
        name: String
        description: String
        author: String
    }

    type BookResolver {getAll: [Book]} 
    
    type Query {book: BookResolver}
`;