import db from '../data/databaseContext.js'
import commonModel from './commonModel.js'

const question = commonModel.discriminator('QuestionType', new db.Schema({
    question: String,
    asked_by: String,
    position: String,
    rank: String,
    answered: Boolean,
    timeAnswered: Date,
    likes: [String],
    dislikes: [String],
    neutrals: [String]
}), commonModel.baseConfig);

export { question }