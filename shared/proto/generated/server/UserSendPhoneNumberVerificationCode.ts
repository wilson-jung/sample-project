/* eslint-disable */


export interface UserSendPhoneNumberVerificationCodeParams {
  phoneNumber: string;
  /**
   *  안드로이드의 경우 SMS Retrever API를 사용하기 위한 필드. 적절한 값을 올려주면 된다.
   *  아이폰은 아예 안올려주거나 DISABLE을 올려주면 된다. (필드 자체를 선언하지 않아도 상관 없음)
   */
  smsRetrieverOption?: UserSendPhoneNumberVerificationCodeParams.SmsRetrieverOption;
}

export namespace UserSendPhoneNumberVerificationCodeParams {
  export function fromObject(obj: any): UserSendPhoneNumberVerificationCodeParams {
    return {
      ...obj,
      smsRetrieverOption: UserSendPhoneNumberVerificationCodeParams.SmsRetrieverOption_fromString(obj.smsRetrieverOption),
    }
  }

  export type SmsRetrieverOption = 'DISABLE' | 'ENABLE_RELEASE' | 'ENABLE_DEBUG';

  export function SmsRetrieverOption_fromString(str: string): SmsRetrieverOption | undefined {
    switch (str) {
      case "DISABLE":
      case "ENABLE_RELEASE":
      case "ENABLE_DEBUG":
      return str
      default: return undefined
    }
  }
}

export interface UserSendPhoneNumberVerificationCodeResult {
  verificationToken: string;
  expiry: string;
}

export namespace UserSendPhoneNumberVerificationCodeResult {
  export function fromObject(obj: any): UserSendPhoneNumberVerificationCodeResult {
    return {
      ...obj,
      expiry: obj.expiry.toString(),
    }
  }
}
