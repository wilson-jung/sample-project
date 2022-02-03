import { UserSubscriptionDTO } from '../user_subscription';
export interface UserGetUserSubscriptionParams {
    subscriptionId: string;
}
export declare namespace UserGetUserSubscriptionParams {
    function fromObject(obj: any): UserGetUserSubscriptionParams;
}
export interface UserGetUserSubscriptionResult {
    subscription?: UserSubscriptionDTO;
}
export declare namespace UserGetUserSubscriptionResult {
    function fromObject(obj: any): UserGetUserSubscriptionResult;
}
