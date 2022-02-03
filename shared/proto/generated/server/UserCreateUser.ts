/* eslint-disable */
import { TrackingIdentifiers, UserDTO } from '../common';


export interface UserCreateUserParams {
  name: string;
  email: string;
  password: string;
  verifiedPhoneNumberToken: string;
  trackingIdentifiers?: TrackingIdentifiers;
  /**
   *  유저가 동의한 약관 리스트를 올려준다.
   *  토큰과 약관은 GetCurrentTerms를 이용해 가져온 값을 사용한다.
   */
  acceptToken: string;
  acceptingTermsIds: string[];
  /**
   *  약관 관련 프로토콜 변경후 더이상 사용하지 않는 필드
   */
  shouldApplyMarketingAgreementEvent: boolean;
}

export namespace UserCreateUserParams {
  export function fromObject(obj: any): UserCreateUserParams {
    return {
      ...obj,
      trackingIdentifiers: obj.trackingIdentifiers != null ? TrackingIdentifiers.fromObject(obj.trackingIdentifiers) : undefined,
    }
  }
}

export interface UserCreateUserResult {
  user?: UserDTO;
}

export namespace UserCreateUserResult {
  export function fromObject(obj: any): UserCreateUserResult {
    return {
      ...obj,
      user: obj.user != null ? UserDTO.fromObject(obj.user) : undefined,
    }
  }
}
