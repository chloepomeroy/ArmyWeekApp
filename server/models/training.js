import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

export const TrainingSchema = new Schema(
    {
        trainingId: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        imageFileName: {
            type: String,
        },
        imageUrl: {
            type: String,
        },
        submitter: {
            type: String,
        },
        subject: {
            type: String,
        },
        skills: {
            type: [String],
        },
        level: {
            type: String,
        },
        duration: {
            type: String,
        },
        learningPathway: {
            type: [String],
        },
        trainingLink: {
            type: String,
        },
        educator: {
            type: String,
        },
        ratingId: {
            type: String
       },
    },
    {
        collection: 'training',
    }
);

TrainingSchema.plugin(timestamps);

TrainingSchema.index({ createdAt: 1, updatedAt: 1 });

export const Training = mongoose.model('Training', TrainingSchema);