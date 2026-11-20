import { Schema, model } from 'mongoose';
export var Provider;
(function (Provider) {
    Provider[Provider["facebook"] = 2] = "facebook";
    Provider[Provider["google"] = 1] = "google";
    Provider[Provider["local"] = 0] = "local";
})(Provider || (Provider = {}));
export var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 0] = "female";
})(Gender || (Gender = {}));
const schema = new Schema({
    UserName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        required: function () {
            return this.provider === Provider.local;
        },
        type: String,
        trim: true,
    },
    provider: {
        type: Number,
        default: Provider.local,
        enum: Provider
    },
    gender: {
        type: Number,
        enum: Gender
    }
});
export const User = model('User', schema);
//# sourceMappingURL=user.model.js.map