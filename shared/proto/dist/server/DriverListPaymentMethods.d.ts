import { DriverPaymentMethodDTO } from '../common';
export interface DriverListPaymentMethodsParams {
}
export declare namespace DriverListPaymentMethodsParams {
    function fromObject(obj: any): DriverListPaymentMethodsParams;
}
export interface DriverListPaymentMethodsResult {
    paymentMethods: DriverPaymentMethodDTO[];
}
export declare namespace DriverListPaymentMethodsResult {
    function fromObject(obj: any): DriverListPaymentMethodsResult;
}
