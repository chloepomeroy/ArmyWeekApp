import { SchemaComposer } from 'graphql-compose';

// import db from '../data/databaseContext.js';

const schemaComposer = new SchemaComposer();

import { TrainingQuery, TrainingMutation } from './training.js';
//import { TaskQuery, TaskMutation } from './task';

// schemaComposer.Query.addFields({
//     ...TrainingQuery,
//     ...TaskQuery,
// });

// schemaComposer.Mutation.addFields({
//     ...TrainingMutation,
//     ...TaskMutation,
// });

schemaComposer.Query.addFields({
    ...TrainingQuery
});

schemaComposer.Mutation.addFields({
    ...TrainingMutation
});

export default schemaComposer.buildSchema();