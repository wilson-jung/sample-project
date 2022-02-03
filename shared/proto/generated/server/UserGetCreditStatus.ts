/* eslint-disable */
import { StringValue } from '../wrappers';


export interface UserGetCreditStatusParams {
}

export namespace UserGetCreditStatusParams {
  export function fromObject(obj: any): UserGetCreditStatusParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetCreditStatusResult {
  /**
   *  크레딧 잔액 총합
   */
  totalCreditAmount: number;
  /**
   *  사용할 수 있는 크레딧 양
   */
  availableCreditAmount: number;
  /**
   *  패스포트 멤버십 넛지 url
   *  url이 내려오면 크레딧뷰 패스포트 넛지 처리를 해주어야 합니다.
   */
  passportMembershipNudgeUrl?: StringValue;
}

export namespace UserGetCreditStatusResult {
  export function fromObject(obj: any): UserGetCreditStatusResult {
    return {
      ...obj,
      passportMembershipNudgeUrl: obj.passportMembershipNudgeUrl != null ? StringValue.fromObject(obj.passportMembershipNudgeUrl) : undefined,
    }
  }
}
