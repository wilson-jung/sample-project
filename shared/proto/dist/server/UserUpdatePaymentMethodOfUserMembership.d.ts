import { UserMembershipDTO } from '../membership';
export interface UserUpdatePaymentMethodOfUserMembershipParams {
    membershipId: string;
    paymentMethodId: string;
}
export declare namespace UserUpdatePaymentMethodOfUserMembershipParams {
    function fromObject(obj: any): UserUpdatePaymentMethodOfUserMembershipParams;
}
export interface UserUpdatePaymentMethodOfUserMembershipResult {
    membership?: UserMembershipDTO;
}
export declare namespace UserUpdatePaymentMethodOfUserMembershipResult {
    function fromObject(obj: any): UserUpdatePaymentMethodOfUserMembershipResult;
}
