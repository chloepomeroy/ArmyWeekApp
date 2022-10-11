const db = require('../data/databaseContext')

const category = db.model('categoryType', new db.Schema({
    categories: [{
        parentCategory: {
            parentCategoryId: String,
            parentCategoryName: String,
            parentCategoryType: String,
            parentCategoryOrder: Number,
            children: [{
                childCategoryId: String,
                childCategoryName: String,
                childCategoryOrder: Number
            }]
        }
    }]
}));

module.exports = category;