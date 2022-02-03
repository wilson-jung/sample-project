import { PaymentProfileDTO } from '../common';
export interface UserGetPaymentProfileWithActivationStatusTokenParams {
    activationStatusToken: string;
}
export declare namespace UserGetPaymentProfileWithActivationStatusTokenParams {
    function fromObject(obj: any): UserGetPaymentProfileWithActivationStatusTokenParams;
}
export interface UserGetPaymentProfileWithActivationStatusTokenResult {
    paymentProfile?: PaymentProfileDTO;
}
export declare namespace UserGetPaymentProfileWithActivationStatusTokenResult {
    function fromObject(obj: any): UserGetPaymentProfileWithActivationStatusTokenResult;
}
