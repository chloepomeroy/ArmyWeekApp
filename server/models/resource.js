const db = require('../data/databaseContext')
const commonModel = require('./commonModel')

const resource = commonModel.discriminator('ResourceType', new db.Schema({
    title: String,
    submitter: String,
    filename: String,
    likes: [String],
    dislikes: [String],
    neutrals: [String]
}), commonModel.baseConfig);

module.exports = resource;