import { Rating } from '../models/rating.js'

const ratingService = {
 
  async findOne(query) {
    /** Reading data from CosmosDB**/
    try{
      let ratings = await Rating.findOne(query).exec()
      return ratings
    } catch (err) {
      console.log('problem reading from db', err)
      return false
    }
  },

  async findAll() {
    /** Reading data from CosmosDB**/
    try{
      let ratings = await Rating.find({})
      return ratings
    } catch (err) {
      console.log('problem reading from db', err)
      return false
    }
  },

  async add(args) {        
    
    let data = {
        ratingId: args.ratingId,
        likes: args.likes,
        dislikes: args.dislikes,
        neutrals: args.neutrals
    }
    
    /** Write data to CosmosDB **/
    try{
        let newRating = new Rating(data)
        let saved = await newRating.save()
        return saved
    } catch (err) {
        console.log('problem writing to db', err)
        return false
    }
  },


  async update(filter, data) {
    /** update existing data to CosmosDB **/
    try{
      let updated = await Rating.updateOne(filter, data)
      console.log('updated', updated)
      return true
     } catch (err) {
      console.log('problem updating Rating record', err)
      return false
     }
  },

  async deleteOne(args){
     /** delete identified data from CosmosDB **/
     try{
      let deleted = await Rating.deleteOne(args)
      console.log('deleted', deleted)
      return true
     } catch (err) {
      console.log('problem deleting Rating record', err)
      return false
     }
  },

  async deleteAll(filter){
    /** delete all identified data from CosmosDB **/
    try{
     await Rating.deleteMany(JSON.parse(filter))
     return true
    } catch (err) {
     console.log('problem deleting all Rating records', err)
     return false
    }
  },

  async signal(args){
      const {
        ratingId,
        signalType,
        accountId
      } = args
      let resourceProperties = await Rating.findOne(ratingId).exec()
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
        await Rating.updateOne(
          {ratingId: resourceProperties.ratingId}, 
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

export { ratingService }
