import { BoolValue } from '../wrappers';
import { UserSubscriptionBillingDTO } from '../user_subscription';
export interface UserListUserSubscriptionBillingsParams {
    unexpiredOnly?: BoolValue;
}
export declare namespace UserListUserSubscriptionBillingsParams {
    function fromObject(obj: any): UserListUserSubscriptionBillingsParams;
}
export interface UserListUserSubscriptionBillingsResult {
    billings: UserSubscriptionBillingDTO[];
}
export declare namespace UserListUserSubscriptionBillingsResult {
    function fromObject(obj: any): UserListUserSubscriptionBillingsResult;
}
