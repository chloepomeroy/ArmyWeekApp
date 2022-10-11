import { gql } from "apollo-server-azure-functions";

export const typeDefs = gql`
    type Query {
        training(id: String!): Training
        ratings(id: String!): Rating
    }
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

    type Rating {
        id: String
        likes: [String]
        dislikes: [String]
        neutrals: [String]
    }
`;