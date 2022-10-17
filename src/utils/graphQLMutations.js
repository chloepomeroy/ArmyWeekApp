import { gql } from '@apollo/client'

export const ADD_TRAINING = gql`
  mutation AddTraining(
    $title: String!, 
    $description: String!, 
    $submitter: String!, 
    $subject: String!, 
    $skills: [String]!, 
    $level: String!, 
    $duration: String!, 
    $learningPathway: [String]!, 
    $trainingLink: String!, 
    $educator: String!, 
    $imageFileName: String, 
    $imageUrl: String
    ) {
    addTraining(
      title: $title, 
      description: $description, 
      submitter: $submitter, 
      subject: $subject, 
      skills: $skills, 
      level: $level, 
      duration: $duration, 
      learningPathway: $learningPathway, 
      trainingLink: $trainingLink, 
      educator: $educator, 
      imageFileName: $imageFileName, 
      imageUrl: $imageUrl
      ) {
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