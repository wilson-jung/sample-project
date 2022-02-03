import { PaymentProfileDTO } from '../common';
export interface UserCreateBusinessPaymentProfileParams {
    activationCode: string;
}
export declare namespace UserCreateBusinessPaymentProfileParams {
    function fromObject(obj: any): UserCreateBusinessPaymentProfileParams;
}
export interface UserCreateBusinessPaymentProfileResult {
    paymentProfile?: PaymentProfileDTO;
}
export declare namespace UserCreateBusinessPaymentProfileResult {
    function fromObject(obj: any): UserCreateBusinessPaymentProfileResult;
}
