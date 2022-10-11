import { Training, TrainingTC } from '../models/training.js';

const TrainingQuery = {
    trainingById: TrainingTC.getResolver('findById'),
    trainingByIds: TrainingTC.getResolver('findByIds'),
    trainingOne: TrainingTC.getResolver('findOne'),
    trainingMany: TrainingTC.getResolver('findMany'),
    trainingCount: TrainingTC.getResolver('count'),
    trainingConnection: TrainingTC.getResolver('connection'),
    trainingPagination: TrainingTC.getResolver('pagination'),
};

const TrainingMutation = {
    trainingCreateOne: TrainingTC.getResolver('createOne'),
    trainingCreateMany: TrainingTC.getResolver('createMany'),
    trainingUpdateById: TrainingTC.getResolver('updateById'),
    trainingUpdateOne: TrainingTC.getResolver('updateOne'),
    trainingUpdateMany: TrainingTC.getResolver('updateMany'),
    trainingRemoveById: TrainingTC.getResolver('removeById'),
    trainingRemoveOne: TrainingTC.getResolver('removeOne'),
    trainingRemoveMany: TrainingTC.getResolver('removeMany'),
};

export { TrainingQuery, TrainingMutation };