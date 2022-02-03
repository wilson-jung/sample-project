import { PaymentDTO } from '../common';
export interface UserListFailedPaymentsParams {
}
export declare namespace UserListFailedPaymentsParams {
    function fromObject(obj: any): UserListFailedPaymentsParams;
}
export interface UserListFailedPaymentsResult {
    failedPayments: PaymentDTO[];
}
export declare namespace UserListFailedPaymentsResult {
    function fromObject(obj: any): UserListFailedPaymentsResult;
}
