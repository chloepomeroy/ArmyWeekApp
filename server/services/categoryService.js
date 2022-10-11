const { json } = require("body-parser")
const btoa = require('btoa')
const category = require('../models/categories')
const config = require('../config')

function generateId() {
    let buf = Math.random([0, 999999999])
    let b64 = btoa(buf);
    return b64.toString()
}

const categoryService = {
 
  async read(query) {
    /** Reading data from CosmosDB **/
    try{
      let categories = await category.find(query)
      return categories
    } catch (err) {
      console.log('problem reading from db', err)
      return false
    }
  },

  async create(name) {        
    // add training category to database
    let data = {
        categoryId: generateId(),
        name: name
    }
    
    /** Write training category data to CosmosDB **/
    try{
        let newCategory = new category(data)
        let saved = await newCategory.save()
        return true
    } catch (err) {
        console.log('problem writing category to db', err)
        return false
    }
  },

  async update(filter, updatedcategoryData) {
    /** update existing data to CosmosDB **/
    try{
      await category.updateOne(JSON.parse(filter), updatedcategoryData)
      return true
     } catch (err) {
      console.log('problem updating training category', err)
      return false
     }
  },

  async delete(filter){
     /** delete identified training category from CosmosDB **/
     try{
      await category.deleteOne(JSON.parse(filter))
      return true
     } catch (err) {
      console.log('problem deleting training category', err)
      return false
     }
  },

  async deleteAll(filter){
    /** delete all identified data from CosmosDB **/
    try{
     await category.deleteMany(JSON.parse(filter))
     return true
    } catch (err) {
     console.log('problem deleting all training category records', err)
     return false
    }
  },

};

module.exports = categoryService;
