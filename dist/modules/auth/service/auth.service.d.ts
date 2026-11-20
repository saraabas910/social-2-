import type { registerDto } from '../../auth/dto/dto.js';
import type { IUser } from '../../../lib/database/user.model.js';
export declare class AuthService {
    register(userData: registerDto): Promise<import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
declare const _default: AuthService;
export default _default;
//# sourceMappingURL=auth.service.d.ts.map