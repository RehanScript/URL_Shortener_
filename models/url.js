import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true        // Each shortID must be unique
    },
    redirectURL: {
        type: String,
        required: true      // Original URL that we're shortening
    },
    visitHistory: [{        // Array to track when URL is accessed
        timestamp: { type: Number }
    }]
}, { timestamps: true });   // Automatically add createdAt and updatedAt fields

export const URL = mongoose.model('URL', urlSchema);