import { Gender, Provider } from '../../../lib/database/user.model.js';
export interface registerDto {
    UserName: string;
    email: string;
    password: string;
    phoneNumber?: string;
    gender: Gender;
    provider: Provider;
}
export interface loginDto {
    email: string;
    password: string;
}
export interface SendOtpDto {
    email: string;
}
export interface VerifyAccount {
    email: string;
    code: string;
}
//# sourceMappingURL=dto.d.ts.map