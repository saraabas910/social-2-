import { Types, Model } from "mongoose";
export class AbstractRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        return this.model.create(data);
    }
    async update(filter, data, options) {
        return this.model.findOneAndUpdate(filter, data, options);
    }
    async delete(filter) {
        return this.model.findOneAndDelete(filter);
    }
    async findOne(filter) {
        return this.model.findOne(filter);
    }
}
//# sourceMappingURL=abstract.repository.js.map