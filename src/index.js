import startServer from './bootstrap';
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

startServer({ typeDefs, resolvers })