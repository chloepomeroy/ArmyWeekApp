const db = require('../data/databaseContext')

const resource = db.model('ResourceType', new db.Schema({
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
}));

module.exports = resource;