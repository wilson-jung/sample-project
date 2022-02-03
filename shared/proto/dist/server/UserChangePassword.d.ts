export interface UserChangePasswordParams {
    oldPassword: string;
    newPassword: string;
}
export declare namespace UserChangePasswordParams {
    function fromObject(obj: any): UserChangePasswordParams;
}
export interface UserChangePasswordResult {
}
export declare namespace UserChangePasswordResult {
    function fromObject(obj: any): UserChangePasswordResult;
}
