import db from '../data/databaseContext.js'

const idea = db.model('IdeaType', new db.Schema({
    idea_title: String,
    idea_description: String,
    submitted_by: String,
    position: String,
    rank: String,
    likes: [String],
    dislikes: [String],
    neutrals: [String]
}));

export { idea }