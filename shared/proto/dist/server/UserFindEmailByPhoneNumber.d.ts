export interface UserFindEmailByPhoneNumberParams {
    verifiedPhoneNumberToken: string;
}
export declare namespace UserFindEmailByPhoneNumberParams {
    function fromObject(obj: any): UserFindEmailByPhoneNumberParams;
}
export interface UserFindEmailByPhoneNumberResult {
    email: string;
}
export declare namespace UserFindEmailByPhoneNumberResult {
    function fromObject(obj: any): UserFindEmailByPhoneNumberResult;
}
