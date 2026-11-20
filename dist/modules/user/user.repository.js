import { AbstractRepository } from "../../lib/database/abstract.repository.js";
import { User } from "../../lib/database/user.model.js";
export class UserRepository extends AbstractRepository {
    constructor() {
        super(User);
    }
}
export const userRepository = new UserRepository();
//# sourceMappingURL=user.repository.js.map