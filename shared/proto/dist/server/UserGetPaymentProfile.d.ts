import { PaymentProfileDTO } from '../common';
export interface UserGetPaymentProfileParams {
    paymentProfileId: string;
}
export declare namespace UserGetPaymentProfileParams {
    function fromObject(obj: any): UserGetPaymentProfileParams;
}
export interface UserGetPaymentProfileResult {
    paymentProfile?: PaymentProfileDTO;
}
export declare namespace UserGetPaymentProfileResult {
    function fromObject(obj: any): UserGetPaymentProfileResult;
}
