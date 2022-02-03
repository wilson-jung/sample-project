/* eslint-disable */
import { UserMembershipDTO } from '../membership';


export interface UserReactivateUserMembershipParams {
  membershipId: string;
}

export namespace UserReactivateUserMembershipParams {
  export function fromObject(obj: any): UserReactivateUserMembershipParams {
    return {
      ...obj,
    }
  }
}

export interface UserReactivateUserMembershipResult {
  membership?: UserMembershipDTO;
}

export namespace UserReactivateUserMembershipResult {
  export function fromObject(obj: any): UserReactivateUserMembershipResult {
    return {
      ...obj,
      membership: obj.membership != null ? UserMembershipDTO.fromObject(obj.membership) : undefined,
    }
  }
}
