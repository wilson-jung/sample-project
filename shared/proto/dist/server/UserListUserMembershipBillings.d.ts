import { BoolValue } from '../wrappers';
import { UserSubscriptionBillingDTO } from '../user_subscription';
export interface UserListUserMembershipBillingsParams {
    unexpiredOnly?: BoolValue;
}
export declare namespace UserListUserMembershipBillingsParams {
    function fromObject(obj: any): UserListUserMembershipBillingsParams;
}
export interface UserListUserMembershipBillingsResult {
    billings: UserSubscriptionBillingDTO[];
}
export declare namespace UserListUserMembershipBillingsResult {
    function fromObject(obj: any): UserListUserMembershipBillingsResult;
}
