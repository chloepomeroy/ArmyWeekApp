import graphql from 'graphql'
import { trainingService } from '../services/trainingService.js'

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
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
        ratingId: {
            type: GraphQLString
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        oneTraining: {
            type: TrainingType,
            args: {
                trainingId: {
                    type: GraphQLString
                }
            },
            async resolve(parentValue, args) {
                let result = await trainingService.findOne({
                    trainingId: args.trainingId
                })
                console.log('result 1', result)
                return result
            }
        },
        allTraining: {
            type: new GraphQLList(TrainingType),
            args: {
                
            },
            async resolve(parentValue, args) {
                let result = await trainingService.findAll()
                console.log('result 2', result)
                return result
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addTraining: {
            type: TrainingType,
            args: {
                title: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                description: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                imageFileName: {
                    type: GraphQLString,
                },
                imageUrl: {
                    type: GraphQLString,
                },
                submitter: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                subject: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                skills: {
                    type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                },
                level: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                duration: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                learningPathway: {
                    type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                },
                trainingLink: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                educator: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            async resolve(parentValue, args){
                console.log('args', args)
                let result = await trainingService.add(args)
                console.log('result', result)
                return result
            }
        },
        updateTraining: {
            type: TrainingType,
            args: {
                trainingId: {
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
            },
            async resolve(parentValue, args){
                console.log('args', args)
                let result = await trainingService.update({
                    trainingId: args.trainingId
                }, {
                    title: args.title,
                    description: args.description,
                    imageFileName: args.imageFileName,
                    imageUrl: args.imageUrl,
                    submitter: args.submitter,
                    subject: args.subject,
                    skills: args.skills,
                    level: args.level,
                    duration: args.duration,
                    learningPathway: args.learningPathway,
                    trainingLink: args.trainingLink,
                    educator: args.educator
                })
                console.log('result', result)
                return result
            }
        },
        deleteTraining: {
            type: TrainingType,
            args: {
                trainingId: {
                    type: GraphQLString
                }
            },
            async resolve(parentValue, args) {
                let result = await trainingService.deleteOne(args)
                console.log('result 3', result)
                return result
            }
        }
    }
})

const trainingSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})

export { trainingSchema }