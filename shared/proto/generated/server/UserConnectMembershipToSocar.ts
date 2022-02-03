/* eslint-disable */
import { UserMembershipDTO } from '../membership';
import { StringValue } from '../wrappers';


export interface UserConnectMembershipToSocarParams {
  membershipId: string;
}

export namespace UserConnectMembershipToSocarParams {
  export function fromObject(obj: any): UserConnectMembershipToSocarParams {
    return {
      ...obj,
    }
  }
}

export interface UserConnectMembershipToSocarResult {
  membership?: UserMembershipDTO;
  isSuccess: boolean;
  popup?: UserConnectMembershipToSocarResult.Popup;
}

export namespace UserConnectMembershipToSocarResult {
  export function fromObject(obj: any): UserConnectMembershipToSocarResult {
    return {
      ...obj,
      membership: obj.membership != null ? UserMembershipDTO.fromObject(obj.membership) : undefined,
      popup: obj.popup != null ? UserConnectMembershipToSocarResult.Popup.fromObject(obj.popup) : undefined,
    }
  }

  export interface Popup {
    title: string;
    body: string;
    /**
     *  null이 아닐 때만 쏘카로 이동 버튼을 보여준다.
     */
    socarDeeplink?: StringValue;
  }

  export namespace Popup {
    export function fromObject(obj: any): Popup {
      return {
        ...obj,
        socarDeeplink: obj.socarDeeplink != null ? StringValue.fromObject(obj.socarDeeplink) : undefined,
      }
    }
  }
}
