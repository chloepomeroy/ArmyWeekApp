const { json } = require("body-parser");
const resource = require('../models/resource');

const resourcesService = {
 
  async read(query) {
    /** Reading data from CosmosDB - with discriminator **/
    try{
      let resources = await resource.find(query)
      return resources
    } catch (err) {
      console.log('problem reading from db', err)
      return false
    }
  },

  async create(aresource) {
     /** Write data to CosmosDB - with discriminator **/
     try{
      let newresource = new resource(aresource)
      await newresource.save()
      return true
     } catch (err) {
      console.log('problem writing to db', err)
      return false
     }
  },

  async update(filter, aresource) {
    /** update existing data to CosmosDB - with discriminator **/
    try{
      await resource.updateOne(JSON.parse(filter), aresource)
      return true
     } catch (err) {
      console.log('problem updating record', err)
      return false
     }
  },

  async delete(filter){
     /** delete identified data from CosmosDB - with discriminator **/
     try{
      await resource.deleteOne(JSON.parse(filter))
      return true
     } catch (err) {
      console.log('problem deleting record', err)
      return false
     }
  },

  async deleteAll(filter){
    /** delete all identified data from CosmosDB - with discriminator **/
    try{
     await resource.deleteMany(JSON.parse(filter))
     return true
    } catch (err) {
     console.log('problem deleting all records', err)
     return false
    }
  },

  async signal(id, signalType, accountId){
      let resourceProperties = await resource.findById(id)
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
        await resource.updateOne(
          {_id: id}, 
          {
            likes: resourceProperties.likes,
            dislikes: resourceProperties.dislikes,
            neutrals: resourceProperties.neutrals
          })
        return true
      } catch (err) {
        console.log('problem recording signal', err)
        return false
      }
  }
};

module.exports = resourcesService;
