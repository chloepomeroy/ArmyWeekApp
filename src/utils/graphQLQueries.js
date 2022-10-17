import { gql } from '@apollo/client'

export const GET_TRAINING = gql`
query AllTraining{
  allTraining {
    trainingId
    title
    description
    imageFileName
    imageUrl
    submitter
    subject
    skills
    level
    duration
    learningPathway
    trainingLink
    educator
    ratingId
  }
}
`