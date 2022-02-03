import { UserMembershipDTO } from '../membership';
export interface UserPurchaseUserMembershipProductParams {
    productId: string;
    paymentMethodId: string;
}
export declare namespace UserPurchaseUserMembershipProductParams {
    function fromObject(obj: any): UserPurchaseUserMembershipProductParams;
}
export interface UserPurchaseUserMembershipProductResult {
    membership?: UserMembershipDTO;
}
export declare namespace UserPurchaseUserMembershipProductResult {
    function fromObject(obj: any): UserPurchaseUserMembershipProductResult;
}
