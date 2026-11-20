import { AbstractRepository } from "../../../lib/database/abstract.repository.js";
import { User } from "../../../lib/database/user.model.js";
export class AuthRepository extends AbstractRepository {
    constructor() {
        super(User);
    }
}
export default new AuthRepository();
//# sourceMappingURL=auth.repository.js.map