import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'

export const RatingSchema = new Schema(
    {
        ratingId: {
            type: String,
        },
        likes: {
            type: [String],
        },
        dislikes: {
            type: [String],
        },
        neutrals: {
            type: [String],
        },
    },
    {
        collection: 'rating',
    }
);

RatingSchema.plugin(timestamps);

RatingSchema.index({ createdAt: 1, updatedAt: 1 })

export const Rating = mongoose.model('Rating', RatingSchema)