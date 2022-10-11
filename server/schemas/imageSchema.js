const graphql = require('graphql')
const imageService = require('../services/imageService')

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
} = graphql

const ImageType = new GraphQLObjectType({
    name: 'Image',
    fields: {
        imageId: {
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
        submitter: {
            type: GraphQLString,
        },
        url: {
            type: GraphQLString,
        },
        category: {
            type: GraphQLString
        },
        likes: {
            type: GraphQLList,
        },
        dislikes: {
            type: GraphQLList,
        },
        neutrals: {
            type: GraphQLList,
        },
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        images: {
            type: ImageType,
            args: {
                imageId: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
               return imageService.read({
                    imageId: args.imageId
               })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})