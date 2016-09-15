import express from 'express';
import graphQLHTTP from 'express-graphql';
import { schema, root } from './schema';

const GraphQLPORT = 4000;
const app = express();

app.use('/graphql', graphQLHTTP({
  graphiql: true,
  pretty: true,
  rootValue: root,
  schema,
}));

app.listen(GraphQLPORT, () => {
  console.log(`GraphQL server run on port ${GraphQLPORT}`);
});
