import { Router } from "express";
import { graphqlHTTP } from "express-graphql";
const router = Router();

// resolvers
import resolvers from "./resolvers";

// schema
import schema from "./schema";

router.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
    formatError: (error) => {
      return { message: error.message };
    },
  })
);

export { router };
