import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { readFileSync } from 'fs';

const supergraphSdl = readFileSync('./src/sdls/supergraph.graphql').toString();
const gateway = new ApolloGateway({ supergraphSdl });

const server = new ApolloServer({ gateway });

// const server = new ApolloServer({ schema, dataSources });
server.listen().then(({ url }) => {
  console.log(`🚀  Gatway Server ready at ${url}`);
});
