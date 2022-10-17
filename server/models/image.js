import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'

export const ImageSchema = new Schema(
    {
        imageId: {
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
        submitter: {
            type: String,
        },
        url: {
            type: String,
        },
        category: {
            type: String
        },
        ratingId: {
            type: String
        }
    },
    {
        collection: 'image',
    }
);

ImageSchema.plugin(timestamps);

ImageSchema.index({ createdAt: 1, updatedAt: 1 })

export const Image = mongoose.model('Image', ImageSchema)