/* eslint-disable */
import { StringValue } from '../wrappers';


export interface UserGetInvitationCouponCodeParams {
}

export namespace UserGetInvitationCouponCodeParams {
  export function fromObject(obj: any): UserGetInvitationCouponCodeParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetInvitationCouponCodeResult {
  couponCode?: StringValue;
  userNameForSharing: string;
  rewardCount: number;
}

export namespace UserGetInvitationCouponCodeResult {
  export function fromObject(obj: any): UserGetInvitationCouponCodeResult {
    return {
      ...obj,
      couponCode: obj.couponCode != null ? StringValue.fromObject(obj.couponCode) : undefined,
    }
  }
}
