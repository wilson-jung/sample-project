/* eslint-disable */
import { UserMembershipDTO } from '../membership';


export interface UserDisconnectMembershipToSocarParams {
  membershipId: string;
}

export namespace UserDisconnectMembershipToSocarParams {
  export function fromObject(obj: any): UserDisconnectMembershipToSocarParams {
    return {
      ...obj,
    }
  }
}

export interface UserDisconnectMembershipToSocarResult {
  membership?: UserMembershipDTO;
  isSuccess: boolean;
  popup?: UserDisconnectMembershipToSocarResult.Popup;
}

export namespace UserDisconnectMembershipToSocarResult {
  export function fromObject(obj: any): UserDisconnectMembershipToSocarResult {
    return {
      ...obj,
      membership: obj.membership != null ? UserMembershipDTO.fromObject(obj.membership) : undefined,
      popup: obj.popup != null ? UserDisconnectMembershipToSocarResult.Popup.fromObject(obj.popup) : undefined,
    }
  }

  export interface Popup {
    title: string;
    body: string;
  }

  export namespace Popup {
    export function fromObject(obj: any): Popup {
      return {
        ...obj,
      }
    }
  }
}
