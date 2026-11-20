import { Types } from 'mongoose';
export interface IPost {
    content: string;
    userId: Types.ObjectId;
    commentsCount: number;
    ReactionsCount: number;
    allowedcomments: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Post: import("mongoose").Model<IPost, {}, {}, {}, import("mongoose").Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IPost & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=post.model.d.ts.map