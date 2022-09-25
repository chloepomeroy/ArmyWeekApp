const db = require('../data/databaseContext')
const commonModel = require('./commonModel')

const resource = commonModel.discriminator('ResourceType', new db.Schema({
    fileId: String,
    title: String,
    description: String,
    fileName: String,
    submitter: String,
    url: String,
    imgName: String,
    category: String,
    likes: [String],
    dislikes: [String],
    neutrals: [String]
}), commonModel.baseConfig);

module.exports = resource;