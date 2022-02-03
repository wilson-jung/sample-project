export interface UserSendBusinessPaymentProfileActivationEmailParams {
    email: string;
    bizCompanyId: string;
    employeeName: string;
}
export declare namespace UserSendBusinessPaymentProfileActivationEmailParams {
    function fromObject(obj: any): UserSendBusinessPaymentProfileActivationEmailParams;
}
export interface UserSendBusinessPaymentProfileActivationEmailResult {
    /**
     *  GetPaymentProfileWithActivationStatusToken을 호출하여 생성된 계정을 가져올 수 있다.
     */
    activationStatusToken: string;
}
export declare namespace UserSendBusinessPaymentProfileActivationEmailResult {
    function fromObject(obj: any): UserSendBusinessPaymentProfileActivationEmailResult;
}
