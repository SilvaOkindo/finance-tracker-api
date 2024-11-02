import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true
    },
    isDefault: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

export const Category = mongoose.model('Category', categorySchema);
