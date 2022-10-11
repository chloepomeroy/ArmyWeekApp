import { ApolloServer } from 'apollo-server-azure-functions';
import { CosmosDataSource } from 'apollo-datasource-cosmosdb';
import { CosmosClient } from '@azure/cosmos';
import { typeDefs } from './schema';
import { Training } from './models/training';
import { Rating } from './models/rating';

const buildCosmosDataSource = <TData extends { id: string }>(
    containerId: string
  ) => {
    const client = new CosmosClient(
      process.env.COSMOS_CONNECTION_STRING
    );
    const container = client
      .database(process.env.COSMOS_DATABASE_NAME)
      .container(containerId);
      
    return new CosmosDataSource<TData, unknown>(container);
  }

// Resolver map.
const resolvers = {
    Query: {
      training: async (_, params, context) => {
        return context.dataSources.training.findOneById(params.id);
      },
    },
    Training: {
        rating: async (parent, _, context) => {
            return context.dataSources.rating.findOneById(parent.rating)
        }
    }
  };

// Create our server.
const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    dataSources: () => ({
      training: buildCosmosDataSource<Training>('training'),
      rating: buildCosmosDataSource<Rating>('ratings')
    }) 
  });
  export const run = server.createHandler();