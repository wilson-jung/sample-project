import { UserDTO } from '../common';
export interface UserChangeEmailParams {
    email: string;
}
export declare namespace UserChangeEmailParams {
    function fromObject(obj: any): UserChangeEmailParams;
}
export interface UserChangeEmailResult {
    user?: UserDTO;
}
export declare namespace UserChangeEmailResult {
    function fromObject(obj: any): UserChangeEmailResult;
}
