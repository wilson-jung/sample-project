/* eslint-disable */
import { UserMembershipDTO } from '../membership';


export interface UserDeactivateUserMembershipParams {
  membershipId: string;
}

export namespace UserDeactivateUserMembershipParams {
  export function fromObject(obj: any): UserDeactivateUserMembershipParams {
    return {
      ...obj,
    }
  }
}

export interface UserDeactivateUserMembershipResult {
  membership?: UserMembershipDTO;
}

export namespace UserDeactivateUserMembershipResult {
  export function fromObject(obj: any): UserDeactivateUserMembershipResult {
    return {
      ...obj,
      membership: obj.membership != null ? UserMembershipDTO.fromObject(obj.membership) : undefined,
    }
  }
}
