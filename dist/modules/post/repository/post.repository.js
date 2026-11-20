import { AbstractRepository } from "../../../lib/database/abstract.repository.js";
import { Post } from "../model/post.model.js";
class PostRepository extends AbstractRepository {
    constructor() {
        super(Post);
    }
}
//# sourceMappingURL=post.repository.js.map