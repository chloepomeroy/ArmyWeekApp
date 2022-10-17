import { mergeSchemas } from '@graphql-tools/schema'

import { trainingSchema } from './trainingSchema.js'
import { ratingSchema } from './ratingSchema.js'
import { imageSchema } from './imageSchema.js'

const schema = mergeSchemas({
    schemas: [trainingSchema, ratingSchema, imageSchema]
})

export { schema }