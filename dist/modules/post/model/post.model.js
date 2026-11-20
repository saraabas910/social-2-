import { Schema, model, Types } from 'mongoose';
const schema = new Schema({
    content: { type: String, required: true, trim: true, minlength: 1, maxlength: 500 },
    userId: { type: Types.ObjectId, required: true, ref: 'User' },
    commentsCount: { type: Number, default: 0 },
    ReactionsCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
export const Post = model('Post', schema);
//# sourceMappingURL=post.model.js.map