import { PaymentProfileDTO } from '../common';
export interface UserListPaymentProfilesParams {
}
export declare namespace UserListPaymentProfilesParams {
    function fromObject(obj: any): UserListPaymentProfilesParams;
}
export interface UserListPaymentProfilesResult {
    paymentProfiles: PaymentProfileDTO[];
}
export declare namespace UserListPaymentProfilesResult {
    function fromObject(obj: any): UserListPaymentProfilesResult;
}
