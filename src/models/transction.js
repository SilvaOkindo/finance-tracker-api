import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'deleted']
    }
}, {timestamps: true});

export const Transaction = mongoose.model('Transaction', transactionSchema);
