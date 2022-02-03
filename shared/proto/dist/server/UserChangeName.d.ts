import { UserDTO } from '../common';
export interface UserChangeNameParams {
    name: string;
}
export declare namespace UserChangeNameParams {
    function fromObject(obj: any): UserChangeNameParams;
}
export interface UserChangeNameResult {
    user?: UserDTO;
}
export declare namespace UserChangeNameResult {
    function fromObject(obj: any): UserChangeNameResult;
}
