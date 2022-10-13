import graphql from 'graphql'
import { ratingService } from '../services/ratingService.js'

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
} = graphql

const RatingType = new GraphQLObjectType({
    name: 'Rating',
    fields: {
        ratingId: {
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
        oneRating: {
            type: RatingType,
            args: {
                ratingId: {
                    type: GraphQLString
                }
            },
            async resolve(parentValue, args) {
                let result = await ratingService.findOne({
                    ratingId: args.ratingId
                })
                return result
            }
        },
        allRatings: {
            type: new GraphQLList(RatingType),
            args: {
                
            },
            async resolve(parentValue, args) {
                let result = await ratingService.findAll()
                return result
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addRating: {
            type: RatingType,
            args: {
                ratingId: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                likes: {
                    type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                },
                dislikes: {
                    type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                },
                neutrals: {
                    type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                },
            },
            async resolve(parentValue, args){
                let result = await ratingService.add(args)
                return result
            }
        },
        rate: {
            type: RatingType,
            args: {
                ratingId: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                signalType: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                accountId: {
                    type: new GraphQLNonNull(GraphQLString)
                },
            },
            async resolve(parentValue, args){
                let result = await ratingService.signal(args)
                return result
            }
        },
        deleteRating: {
            type: RatingType,
            args: {
                ratingId: {
                    type: GraphQLString
                }
            },
            async resolve(parentValue, args) {
                let result = await ratingService.deleteOne(args)
                return result
            }
        }
    }
})

const ratingSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})

export { ratingSchema }