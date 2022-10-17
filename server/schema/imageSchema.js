import graphql from 'graphql'
import { imageService } from '../services/imageService.js'

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
} = graphql

const ImageType = new GraphQLObjectType({
    name: 'Training',
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
        url: {
            type: GraphQLString,
        },
        submitter: {
            type: GraphQLString,
        },
        category: {
            type: GraphQLString,
        },
        ratingId: {
            type: GraphQLString
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        oneImage: {
            type: ImageType,
            args: {
                imageId: {
                    type: GraphQLString
                }
            },
            async resolve(parentValue, args) {
                let result = await imageService.findOne({
                    imageId: args.imageId
                })
                return result
            }
        },
        allImages: {
            type: new GraphQLList(ImageType),
            args: {
                
            },
            async resolve(parentValue, args) {
                let result = await imageService.findAll()
                return result
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addImage: {
            type: ImageType,
            args: {
                title: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                description: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                imageFileName: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                url: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                submitter: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                category: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            async resolve(parentValue, args){
                let result = await imageService.add(args)
                return result
            }
        },
        updateImage: {
            type: ImageType,
            args: {
                imageId: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                title: {
                    type: GraphQLString
                },
                description: {
                    type: GraphQLString,
                },
                imageFileName: {
                    type: GraphQLString,
                },
                url: {
                    type: GraphQLString,
                },
                submitter: {
                    type: GraphQLString,
                },
                category: {
                    type: GraphQLString,
                },
            },
            async resolve(parentValue, args){
                let result = await imageService.update({
                    imageId: args.imageId
                }, {
                    title: args.title,
                    description: args.description,
                    imageFileName: args.imageFileName,
                    url: args.url,
                    submitter: args.submitter,
                    category: args.category
                })
                return result
            }
        },
        deleteImage: {
            type: ImageType,
            args: {
                imageId: {
                    type: GraphQLString
                }
            },
            async resolve(parentValue, args) {
                let result = await imageService.deleteOne(args)
                return result
            }
        }
    }
})

const imageSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})

export { imageSchema }