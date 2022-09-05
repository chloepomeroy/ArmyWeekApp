const db = require('../data/databaseContext')
const commonModel = require('./commonModel')

const idea = commonModel.discriminator('IdeaType', new db.Schema({
    idea_title: String,
    idea_description: String,
    submitted_by: String,
    position: String,
    rank: String,
    likes: [String],
    dislikes: [String],
    neutrals: [String]
}), commonModel.baseConfig);

module.exports = idea;