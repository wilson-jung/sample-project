/* eslint-disable */
import { UserMembershipDTO } from '../membership';


export interface UserGetUserMembershipParams {
}

export namespace UserGetUserMembershipParams {
  export function fromObject(obj: any): UserGetUserMembershipParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetUserMembershipResult {
  /**
   *  optional (현재 구독중이지 않은 경우 안내려줌)
   */
  membership?: UserMembershipDTO;
  /**
   *  유저 이름
   */
  userName: string;
}

export namespace UserGetUserMembershipResult {
  export function fromObject(obj: any): UserGetUserMembershipResult {
    return {
      ...obj,
      membership: obj.membership != null ? UserMembershipDTO.fromObject(obj.membership) : undefined,
    }
  }
}
