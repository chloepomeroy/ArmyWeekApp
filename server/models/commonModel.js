import db from '../data/databaseContext.js'

/** Using Discriminators **/
//This will create only 1 collection in CosmosDB, thus optimizing costs.
const baseConfig = {
    discriminatorKey: "_type", //If you've got a lot of different data types, you could also consider setting up a secondary index here.
    collection: "alldata"
}

const commonModel = db.model('Common', new db.Schema({
    
}, baseConfig));

export default commonModel