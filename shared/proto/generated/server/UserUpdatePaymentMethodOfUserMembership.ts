/* eslint-disable */
import { UserMembershipDTO } from '../membership';


export interface UserUpdatePaymentMethodOfUserMembershipParams {
  membershipId: string;
  paymentMethodId: string;
}

export namespace UserUpdatePaymentMethodOfUserMembershipParams {
  export function fromObject(obj: any): UserUpdatePaymentMethodOfUserMembershipParams {
    return {
      ...obj,
    }
  }
}

export interface UserUpdatePaymentMethodOfUserMembershipResult {
  membership?: UserMembershipDTO;
}

export namespace UserUpdatePaymentMethodOfUserMembershipResult {
  export function fromObject(obj: any): UserUpdatePaymentMethodOfUserMembershipResult {
    return {
      ...obj,
      membership: obj.membership != null ? UserMembershipDTO.fromObject(obj.membership) : undefined,
    }
  }
}
