import {Schema, model, Types} from 'mongoose';


export interface IPost {
    content: string;
   userId: Types.ObjectId;
   commentsCount: number;
   ReactionsCount: number;
   allowedcomments: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const schema  =new Schema<IPost>({
    content: { type: String, required: true, trim: true, minlength: 1, maxlength: 500 },
    userId: { type: Types.ObjectId, required: true, ref: 'User' },
    commentsCount: { type: Number, default: 0 },
    ReactionsCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const Post = model<IPost>('Post', schema);