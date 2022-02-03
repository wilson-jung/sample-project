export interface UserVerifyPhoneNumberParams {
    code: string;
    verificationToken: string;
}
export declare namespace UserVerifyPhoneNumberParams {
    function fromObject(obj: any): UserVerifyPhoneNumberParams;
}
export interface UserVerifyPhoneNumberResult {
    verifiedPhoneNumberToken: string;
}
export declare namespace UserVerifyPhoneNumberResult {
    function fromObject(obj: any): UserVerifyPhoneNumberResult;
}
