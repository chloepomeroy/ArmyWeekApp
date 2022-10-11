const { json } = require("body-parser")
const training = require('../models/Training/trainingResource')
const btoa = require('btoa')
const config = require('../config')

function generateId() {
    let buf = Math.random([0, 999999999])
    let b64 = btoa(buf);
    return b64.toString()
}

const trainingService = {
 
  async read(query) {
    /** Reading data from CosmosDB**/
    try{
      let trainings = await training.find(query)
      return trainings
    } catch (err) {
      console.log('problem reading from db', err)
      return false
    }
  },

  async createTrainingRecord(
    title,
    description,
    imageFileName,
    imageUrl,
    submitter,
    subject,
    level,
    duration,
    learningPathway,
    trainingLink,
    educator) {        
        // add training to database
       
            let data = {
                trainingId: generateId(),
                title: title,
                description: description,
                imageFileName: imageFileName,
                imageUrl: imageUrl,
                submitter: submitter,
                subject: subject,
                skills: skills,
                level: level,
                duration: duration,
                learningPathway: learningPathway,
                trainingLink: trainingLink,
                educator: educator,
                likes: [],
                dislikes: [],
                neutrals: []
            }
            
            /** Write training data to CosmosDB **/
            try{
                let newTraining = new training(data)
                let saved = await newTraining.save()
                console.log('saved', saved)
                return true
            } catch (err) {
                console.log('problem writing to db', err)
                return false
            }
  },


  async update(filter, updatedTrainingData) {
    /** update existing data to CosmosDB **/
    try{
      await training.updateOne(JSON.parse(filter), updatedTrainingData)
      return true
     } catch (err) {
      console.log('problem updating training record', err)
      return false
     }
  },

  async delete(filter){
     /** delete identified data from CosmosDB **/
     try{
      await training.deleteOne(JSON.parse(filter))
      return true
     } catch (err) {
      console.log('problem deleting training record', err)
      return false
     }
  },

  async deleteAll(filter){
    /** delete all identified data from CosmosDB **/
    try{
     await training.deleteMany(JSON.parse(filter))
     return true
    } catch (err) {
     console.log('problem deleting all training records', err)
     return false
    }
  },

  async signal(id, signalType, accountId){
      let resourceProperties = await training.findById(id)
      console.log("resourceProperties", resourceProperties)
      let hasLiked = false
      let hasDisLiked = false
      let hasNeutral = false
          
      hasLiked = resourceProperties.likes.includes(accountId)
      hasDisLiked = resourceProperties.dislikes.includes(accountId)
      hasNeutral = resourceProperties.neutrals.includes(accountId)

      if(signalType == 'like' && !hasLiked){
          resourceProperties.likes.push(accountId)
          
          if(hasDisLiked){
              let k = 0
              while (k < resourceProperties.dislikes.length){
                  if(resourceProperties.dislikes[k] == accountId){
                      resourceProperties.dislikes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasNeutral){
              let k = 0
              while (k < resourceProperties.neutrals.length){
                  if(resourceProperties.neutrals[k] == accountId){
                      resourceProperties.neutrals.splice(k,1)
                      break
                  }
              k++
              }
          }
      }

      if(signalType == 'dislike' && !hasDisLiked){
          resourceProperties.dislikes.push(accountId)
          if(hasLiked){
              let k = 0
              while (k < resourceProperties.likes.length){
                  if(resourceProperties.likes[k] == accountId){
                      resourceProperties.likes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasNeutral){
              let k = 0
              while (k < resourceProperties.neutrals.length){
                  if(resourceProperties.neutrals[k] == accountId){
                      resourceProperties.neutrals.splice(k,1)
                      break
                  }
              k++
              }
          }
      }

      if(signalType == 'neutral' && !hasNeutral){
          resourceProperties.neutrals.push(accountId)
          if(hasLiked){
              let k = 0
              while (k < resourceProperties.likes.length){
                  if(resourceProperties.likes[k] == accountId){
                      resourceProperties.likes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasDisLiked){
              let k = 0
              while (k < resourceProperties.dislikes.length){
                  if(resourceProperties.dislikes[k] == accountId){
                      resourceProperties.dislikes.splice(k,1)
                      break
                  }
              k++
              }
          }
      }
      
      try{
        await training.updateOne(
          {_id: id}, 
          {
            likes: resourceProperties.likes,
            dislikes: resourceProperties.dislikes,
            neutrals: resourceProperties.neutrals
          })
        return true
      } catch (err) {
        console.log('problem recording training signal', err)
        return false
      }
  }
};

module.exports = trainingService;
