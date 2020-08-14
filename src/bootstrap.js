import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';


function startServer({ typeDefs, resolvers }) {
  mongoose.connect('mongodb://localhost:27017/graphql', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => console.log(`🔥 Sever running on ${url}`));
}

export default startServer;