import pkg from 'lodash'
const { merge } = pkg
import { makeExecutableSchema } from '@graphql-tools/schema'

import { typeDef as Training, resolvers as trainingResolvers } from './schema/training.js'
import { typeDef as Rating } from './schema/rating.js'

const Query = `
    type Query {
        training(id: String!): Training
        ratings(id: String!): Rating
    }
`
const resolvers = {
    Query: {
        training: async (_, params, context) => {
          return context.dataSources.training.findOneById(params.id);
        },
    },
}

export const schema = makeExecutableSchema({
    typeDefs: [ Query, Training, Rating ],
    resolvers: merge(resolvers, trainingResolvers)
})