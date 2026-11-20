import {AbstractRepository} from "../../../lib/database/abstract.repository.js";
import type { IPost } from "../model/post.model.js";
import { Post } from "../model/post.model.js";


class PostRepository extends AbstractRepository<IPost> {
    
       constructor(){
          super(Post);
    }

}