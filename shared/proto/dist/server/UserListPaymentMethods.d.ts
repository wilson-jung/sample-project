import { PaymentMethodDTO } from '../common';
export interface UserListPaymentMethodsParams {
}
export declare namespace UserListPaymentMethodsParams {
    function fromObject(obj: any): UserListPaymentMethodsParams;
}
export interface UserListPaymentMethodsResult {
    paymentMethods: PaymentMethodDTO[];
}
export declare namespace UserListPaymentMethodsResult {
    function fromObject(obj: any): UserListPaymentMethodsResult;
}
