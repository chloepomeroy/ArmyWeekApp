const db = require('../../data/databaseContext')

const trainingResource = db.model('TrainingResourceType', new db.Schema({
    trainingId: String,
    title: String,
    description: String,
    imageFileName: String,
    imageUrl: String,
    submitter: String,
    subject: String,
    skills: [],
    level: String,
    duration: String,
    learningPathway: [],
    trainingLink: String,
    educator: String,
    likes: [String],
    dislikes: [String],
    neutrals: [String]
}));

module.exports = trainingResource;
