import pkg from 'body-parser'
const { json } = pkg
import { Training } from '../models/training.js'
import btoa from 'btoa'
import { config } from '../config.js'

function generateId() {
    let buf = Math.random([0, 999999999])
    let b64 = btoa(buf);
    return b64.toString()
}

const trainingService = {
 
  async findOne(query) {
    /** Reading data from CosmosDB**/
    try{
      let trainings = await Training.findOne(query).exec()
      return trainings
    } catch (err) {
      console.log('problem reading from db', err)
      return false
    }
  },

  async findAll() {
    /** Reading data from CosmosDB**/
    try{
      let trainings = await Training.find({})
      return trainings
    } catch (err) {
      console.log('problem reading from db', err)
      return false
    }
  },

  async add(args) {        
    // add training to database

    let tId  = generateId()

    let data = {
        trainingId: tId,
        title: args.title,
        description: args.description,
        imageFileName: args.imageFileName,
        imageUrl: args.imageUrl,
        submitter: args.submitter,
        subject: args.subject,
        skills: args.skills,
        level: args.level,
        duration: args.duration,
        learningPathway: args.learningPathway,
        trainingLink: args.trainingLink,
        educator: args.educator,
        ratingId: tId
    }
    
    /** Write training data to CosmosDB **/
    try{
        let newTraining = new Training(data)
        let saved = await newTraining.save()
        return saved
    } catch (err) {
        console.log('problem writing to db', err)
        return false
    }
  },


  async update(filter, data) {
    /** update existing data to CosmosDB **/
    try{
      let updated = await Training.updateOne(filter, data)
      console.log('updated', updated)
      return true
     } catch (err) {
      console.log('problem updating training record', err)
      return false
     }
  },

  async deleteOne(args){
     /** delete identified data from CosmosDB **/
     try{
      let deleted = await Training.deleteOne(args)
      console.log('deleted', deleted)
      return true
     } catch (err) {
      console.log('problem deleting training record', err)
      return false
     }
  },

  async deleteAll(filter){
    /** delete all identified data from CosmosDB **/
    try{
     await Training.deleteMany(JSON.parse(filter))
     return true
    } catch (err) {
     console.log('problem deleting all training records', err)
     return false
    }
  },

  async signal(id, signalType, accountId){
      let resourceProperties = await Training.findById(id)
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
        await Training.updateOne(
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

export { trainingService }
