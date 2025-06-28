import { model, Schema } from "mongoose";

export const apiKeySchema = new Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    revoked: {
        type: Boolean,
        default: false,
        index: true
    },
    expiresAt: {
        type: Date,
        default: () => new Date(+new Date() + 1000 * 60 * 60 * 24 * 30) // 30 days
    }
}, { timestamps: true });

export const ApiKey = model('ApiKey', apiKeySchema);