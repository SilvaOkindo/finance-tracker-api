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
    description: {
        type: String
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
        default: "income"
    },
    isDefault: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

export const Category = mongoose.model('Category', categorySchema);
