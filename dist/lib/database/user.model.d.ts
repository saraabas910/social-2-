export declare enum Provider {
    facebook = 2,
    google = 1,
    local = 0
}
export declare enum Gender {
    male = 1,
    female = 0
}
export interface IUser {
    UserName: string;
    email: string;
    password: string;
    provider: Provider;
    gender: Gender;
}
export declare const User: import("mongoose").Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user.model.d.ts.map