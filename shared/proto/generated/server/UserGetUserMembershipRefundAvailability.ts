/* eslint-disable */

export interface UserGetUserMembershipRefundAvailabilityParams {
  membershipId: string;
}

export namespace UserGetUserMembershipRefundAvailabilityParams {
  export function fromObject(obj: any): UserGetUserMembershipRefundAvailabilityParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetUserMembershipRefundAvailabilityResult {
  refundAvailable: boolean;
}

export namespace UserGetUserMembershipRefundAvailabilityResult {
  export function fromObject(obj: any): UserGetUserMembershipRefundAvailabilityResult {
    return {
      ...obj,
    }
  }
}
