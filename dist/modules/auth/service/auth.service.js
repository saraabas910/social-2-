import AuthRepository from "../repository/auth.repository.js";
import { userRepository } from "../../user/user.repository.js";
import bcrypt from 'bcrypt';
export class AuthService {
    async register(userData) {
        const existingUser = await userRepository.findOne({ email: userData.email });
        if (existingUser) {
            throw new Error('Email already in use');
        }
        userData.password = await bcrypt.hash(userData.password, 10);
        const createdUser = await userRepository.create(userData);
        return createdUser;
    }
}
export default new AuthService();
//# sourceMappingURL=auth.service.js.map