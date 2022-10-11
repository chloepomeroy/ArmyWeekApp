export const typeDef = `
    type Training {
        id: String
        title: String
        description: String
        imageFileName: String
        imageUrl: String
        submitter: String
        subject: String
        skills: [String]
        level: String
        duration: String
        learningPathway: [String]
        trainingLink: String
        educator: String
        rating: Rating
    }
`

export const resolvers = {
    Training: {
        rating: async (parent, _, context) => {
            return context.dataSources.rating.findOneById(parent.rating)
        }
    }
}

