export interface UserSendPhoneNumberVerificationCodeParams {
    phoneNumber: string;
    /**
     *  안드로이드의 경우 SMS Retrever API를 사용하기 위한 필드. 적절한 값을 올려주면 된다.
     *  아이폰은 아예 안올려주거나 DISABLE을 올려주면 된다. (필드 자체를 선언하지 않아도 상관 없음)
     */
    smsRetrieverOption?: UserSendPhoneNumberVerificationCodeParams.SmsRetrieverOption;
}
export declare namespace UserSendPhoneNumberVerificationCodeParams {
    function fromObject(obj: any): UserSendPhoneNumberVerificationCodeParams;
    type SmsRetrieverOption = 'DISABLE' | 'ENABLE_RELEASE' | 'ENABLE_DEBUG';
    function SmsRetrieverOption_fromString(str: string): SmsRetrieverOption | undefined;
}
export interface UserSendPhoneNumberVerificationCodeResult {
    verificationToken: string;
    expiry: string;
}
export declare namespace UserSendPhoneNumberVerificationCodeResult {
    function fromObject(obj: any): UserSendPhoneNumberVerificationCodeResult;
}
