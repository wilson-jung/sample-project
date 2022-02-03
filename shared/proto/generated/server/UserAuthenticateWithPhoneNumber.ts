/* eslint-disable */
import { TrackingIdentifiers } from '../common';


export interface UserAuthenticateWithPhoneNumberParams {
  phoneNumber: string;
  password: string;
  trackingIdentifiers?: TrackingIdentifiers;
}

export namespace UserAuthenticateWithPhoneNumberParams {
  export function fromObject(obj: any): UserAuthenticateWithPhoneNumberParams {
    return {
      ...obj,
      trackingIdentifiers: obj.trackingIdentifiers != null ? TrackingIdentifiers.fromObject(obj.trackingIdentifiers) : undefined,
    }
  }
}

/**
 *  발급된 AccessToken은 응답의 X-GRYPHON-SET-ACCESS-TOKEN 헤더에 넣어줍니다.
 *  클라이언트는 이 헤더를 조회하여 클라이언트 앱에 저장하여 사용해야합니다.
 *  일단 로그인이 되면 다른 앱에서는 자동으로 로그인이 풀립니다.
 */
export interface UserAuthenticateWithPhoneNumberResult {
}

export namespace UserAuthenticateWithPhoneNumberResult {
  export function fromObject(obj: any): UserAuthenticateWithPhoneNumberResult {
    return {
      ...obj,
    }
  }
}
