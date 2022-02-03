import { StringValue } from '../wrappers';
export interface UserGetInvitationCouponCodeParams {
}
export declare namespace UserGetInvitationCouponCodeParams {
    function fromObject(obj: any): UserGetInvitationCouponCodeParams;
}
export interface UserGetInvitationCouponCodeResult {
    couponCode?: StringValue;
    userNameForSharing: string;
    rewardCount: number;
}
export declare namespace UserGetInvitationCouponCodeResult {
    function fromObject(obj: any): UserGetInvitationCouponCodeResult;
}
