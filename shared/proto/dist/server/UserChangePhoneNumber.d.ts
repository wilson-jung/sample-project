import { UserDTO } from '../common';
export interface UserChangePhoneNumberParams {
    verifiedPhoneNumberToken: string;
}
export declare namespace UserChangePhoneNumberParams {
    function fromObject(obj: any): UserChangePhoneNumberParams;
}
export interface UserChangePhoneNumberResult {
    user?: UserDTO;
}
export declare namespace UserChangePhoneNumberResult {
    function fromObject(obj: any): UserChangePhoneNumberResult;
}
