const db = require('../data/databaseContext')

const image = db.model('ImageType', new db.Schema({
    imageId: String,
    title: String,
    description: String,
    imageFileName: String,
    submitter: String,
    url: String,
    category: String,
    likes: [String],
    dislikes: [String],
    neutrals: [String]
}));

module.exports = image;