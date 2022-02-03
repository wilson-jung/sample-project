export interface UserResetPasswordParams {
    resetPasswordToken: string;
    newPassword: string;
}
export declare namespace UserResetPasswordParams {
    function fromObject(obj: any): UserResetPasswordParams;
}
export interface UserResetPasswordResult {
}
export declare namespace UserResetPasswordResult {
    function fromObject(obj: any): UserResetPasswordResult;
}
