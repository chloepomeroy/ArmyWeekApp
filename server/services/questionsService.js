const { json } = require("body-parser");
const question = require('../models/question');

const questionsService = {
 
  async read(query) {
    /** Reading data from CosmosDB - with discriminator **/
    try{
      let questions = await question.find(query)
      return questions
    } catch (err) {
      console.log('problem reading from db', err)
      return false
    }
  },

  async create(aQuestion) {
     /** Write data to CosmosDB - with discriminator **/
     try{
      let newQuestion = new question(aQuestion)
      await newQuestion.save()
      return true
     } catch (err) {
      console.log('problem writing to db', err)
      return false
     }
  },

  async update(filter, aQuestion) {
    /** update existing data to CosmosDB - with discriminator **/
    try{
      await question.updateOne(JSON.parse(filter), aQuestion)
      return true
     } catch (err) {
      console.log('problem updating record', err)
      return false
     }
  },

  async delete(filter){
     /** delete identified data from CosmosDB - with discriminator **/
     try{
      await question.deleteOne(JSON.parse(filter))
      return true
     } catch (err) {
      console.log('problem deleting record', err)
      return false
     }
  },

  async deleteAll(filter){
    /** delete all identified data from CosmosDB - with discriminator **/
    try{
     await question.deleteMany(JSON.parse(filter))
     return true
    } catch (err) {
     console.log('problem deleting all records', err)
     return false
    }
  },

  async signal(id, signalType, accountId){
      let questionProperties = await question.findById(id)
      console.log("questionProperties", questionProperties)
      let hasLiked = false
      let hasDisLiked = false
      let hasNeutral = false
          
      hasLiked = questionProperties.likes.includes(accountId)
      hasDisLiked = questionProperties.dislikes.includes(accountId)
      hasNeutral = questionProperties.neutrals.includes(accountId)

      if(signalType == 'like' && !hasLiked){
          questionProperties.likes.push(accountId)
          
          if(hasDisLiked){
              let k = 0
              while (k < questionProperties.dislikes.length){
                  if(questionProperties.dislikes[k] == accountId){
                      questionProperties.dislikes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasNeutral){
              let k = 0
              while (k < questionProperties.neutrals.length){
                  if(questionProperties.neutrals[k] == accountId){
                      questionProperties.neutrals.splice(k,1)
                      break
                  }
              k++
              }
          }
      }

      if(signalType == 'dislike' && !hasDisLiked){
          questionProperties.dislikes.push(accountId)
          if(hasLiked){
              let k = 0
              while (k < questionProperties.likes.length){
                  if(questionProperties.likes[k] == accountId){
                      questionProperties.likes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasNeutral){
              let k = 0
              while (k < questionProperties.neutrals.length){
                  if(questionProperties.neutrals[k] == accountId){
                      questionProperties.neutrals.splice(k,1)
                      break
                  }
              k++
              }
          }
      }

      if(signalType == 'neutral' && !hasNeutral){
          questionProperties.neutrals.push(accountId)
          if(hasLiked){
              let k = 0
              while (k < questionProperties.likes.length){
                  if(questionProperties.likes[k] == accountId){
                      questionProperties.likes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasDisLiked){
              let k = 0
              while (k < questionProperties.dislikes.length){
                  if(questionProperties.dislikes[k] == accountId){
                      questionProperties.dislikes.splice(k,1)
                      break
                  }
              k++
              }
          }
      }
      
      try{
        await question.updateOne(
          {_id: id}, 
          {
            likes: questionProperties.likes,
            dislikes: questionProperties.dislikes,
            neutrals: questionProperties.neutrals
          })
        return true
      } catch (err) {
        console.log('problem recording signal', err)
        return false
      }
  }
};

module.exports = questionsService;
