const db = require('../data/databaseContext')
const commonModel = require('./commonModel')

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

module.exports = question;