import { mergeSchemas } from '@graphql-tools/schema'

import { trainingSchema } from './trainingSchema.js'
import { ratingSchema } from './ratingSchema.js'

const schema = mergeSchemas({
    schemas: [trainingSchema, ratingSchema]
})

export { schema }