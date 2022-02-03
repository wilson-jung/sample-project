import { PaymentProfileDTO } from '../common';
export interface UserUpdatePaymentMethodOfPaymentProfileParams {
    /**
     *  payment method를 변경하고 싶은 PaymentProfile의 id.
     */
    paymentProfileId: string;
    /**
     *  변경할 payment method의 id.
     */
    paymentMethodId: string;
}
export declare namespace UserUpdatePaymentMethodOfPaymentProfileParams {
    function fromObject(obj: any): UserUpdatePaymentMethodOfPaymentProfileParams;
}
export interface UserUpdatePaymentMethodOfPaymentProfileResult {
    /**
     *  변경된 PaymentProfile을 내려준다.
     */
    paymentProfile?: PaymentProfileDTO;
}
export declare namespace UserUpdatePaymentMethodOfPaymentProfileResult {
    function fromObject(obj: any): UserUpdatePaymentMethodOfPaymentProfileResult;
}
