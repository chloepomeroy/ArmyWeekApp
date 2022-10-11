const graphql = require('graphql')
const trainingService = require('../services/trainingService')
const db = require('../data/databaseContext')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = graphql

const TrainingType = new GraphQLObjectType({
    name: 'Training',
    fields: {
        trainingId: {
            type: GraphQLString,
        },
        title: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        imageFileName: {
            type: GraphQLString,
        },
        imageUrl: {
            type: GraphQLString,
        },
        submitter: {
            type: GraphQLString,
        },
        subject: {
            type: GraphQLString,
        },
        skills: {
            type: new GraphQLList(GraphQLString),
        },
        level: {
            type: GraphQLString,
        },
        duration: {
            type: GraphQLString,
        },
        learningPathway: {
            type: new GraphQLList(GraphQLString),
        },
        trainingLink: {
            type: GraphQLString,
        },
        educator: {
            type: GraphQLString,
        },
        likes: {
            type: new GraphQLList(GraphQLString),
        },
        dislikes: {
            type: new GraphQLList(GraphQLString),
        },
        neutrals: {
            type: new GraphQLList(GraphQLString),
        },
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        training: {
            type: TrainingType,
            args: {
                trainingId: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
               return db.read({
                    trainingId: args.trainingId
               })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})