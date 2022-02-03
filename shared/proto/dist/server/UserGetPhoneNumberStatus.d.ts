export interface UserGetPhoneNumberStatusParams {
    verifiedPhoneNumberToken: string;
}
export declare namespace UserGetPhoneNumberStatusParams {
    function fromObject(obj: any): UserGetPhoneNumberStatusParams;
}
export interface UserGetPhoneNumberStatusResult {
    isRegisteredPhoneNumber: boolean;
}
export declare namespace UserGetPhoneNumberStatusResult {
    function fromObject(obj: any): UserGetPhoneNumberStatusResult;
}
