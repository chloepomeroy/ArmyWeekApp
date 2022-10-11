import pkg from 'body-parser';
const { json } = pkg;
import { idea } from '../models/idea.js'

const ideasService = {
 
  async read(query) {
    /** Reading data from CosmosDB - with discriminator **/
    try{
      let ideas = await idea.find(query)
      return ideas
    } catch (err) {
      console.log('problem reading from db', err)
      return false
    }
  },

  async create(anIdea) {
     /** Write data to CosmosDB - with discriminator **/
     try{
      let newIdea = new question(anIdea)
      await newIdea.save()
      return true
     } catch (err) {
      console.log('problem writing to db', err)
      return false
     }
  },

  async update(filter, editedIdea) {
    /** update existing data to CosmosDB - with discriminator **/
    try{
      await idea.updateOne(JSON.parse(filter), editedIdea)
      return true
     } catch (err) {
      console.log('problem updating record', err)
      return false
     }
  },

  async delete(filter){
     /** delete identified data from CosmosDB - with discriminator **/
     try{
      await idea.deleteOne(JSON.parse(filter))
      return true
     } catch (err) {
      console.log('problem deleting record', err)
      return false
     }
  },

  async deleteAll(filter){
    /** delete all identified data from CosmosDB - with discriminator **/
    try{
     await idea.deleteMany(JSON.parse(filter))
     return true
    } catch (err) {
     console.log('problem deleting all records', err)
     return false
    }
  },

  async signal(id, signalType, accountId){
      let ideaProperties = await idea.findById(id)
      console.log("ideaProperties", ideaProperties)
      let hasLiked = false
      let hasDisLiked = false
      let hasNeutral = false
          
      hasLiked = ideaProperties.likes.includes(accountId)
      hasDisLiked = ideaProperties.dislikes.includes(accountId)
      hasNeutral = ideaProperties.neutrals.includes(accountId)

      if(signalType == 'like' && !hasLiked){
          ideaProperties.likes.push(accountId)
          
          if(hasDisLiked){
              let k = 0
              while (k < ideaProperties.dislikes.length){
                  if(ideaProperties.dislikes[k] == accountId){
                      ideaProperties.dislikes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasNeutral){
              let k = 0
              while (k < ideaProperties.neutrals.length){
                  if(ideaProperties.neutrals[k] == accountId){
                      ideaProperties.neutrals.splice(k,1)
                      break
                  }
              k++
              }
          }
      }

      if(signalType == 'dislike' && !hasDisLiked){
          ideaProperties.dislikes.push(accountId)
          if(hasLiked){
              let k = 0
              while (k < ideaProperties.likes.length){
                  if(ideaProperties.likes[k] == accountId){
                      ideaProperties.likes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasNeutral){
              let k = 0
              while (k < ideaProperties.neutrals.length){
                  if(ideaProperties.neutrals[k] == accountId){
                      ideaProperties.neutrals.splice(k,1)
                      break
                  }
              k++
              }
          }
      }

      if(signalType == 'neutral' && !hasNeutral){
          ideaProperties.neutrals.push(accountId)
          if(hasLiked){
              let k = 0
              while (k < ideaProperties.likes.length){
                  if(ideaProperties.likes[k] == accountId){
                      ideaProperties.likes.splice(k,1)
                      break
                  }
              k++
              }
          }
          if(hasDisLiked){
              let k = 0
              while (k < ideaProperties.dislikes.length){
                  if(ideaProperties.dislikes[k] == accountId){
                      ideaProperties.dislikes.splice(k,1)
                      break
                  }
              k++
              }
          }
      }
      
      try{
        await idea.updateOne(
          {_id: id}, 
          {
            likes: ideaProperties.likes,
            dislikes: ideaProperties.dislikes,
            neutrals: ideaProperties.neutrals
          })
        return true
      } catch (err) {
        console.log('problem recording signal', err)
        return false
      }
  }
};

export { ideasService }
