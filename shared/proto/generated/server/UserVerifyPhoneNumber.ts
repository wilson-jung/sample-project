/* eslint-disable */

export interface UserVerifyPhoneNumberParams {
  code: string;
  verificationToken: string;
}

export namespace UserVerifyPhoneNumberParams {
  export function fromObject(obj: any): UserVerifyPhoneNumberParams {
    return {
      ...obj,
    }
  }
}

export interface UserVerifyPhoneNumberResult {
  verifiedPhoneNumberToken: string;
}

export namespace UserVerifyPhoneNumberResult {
  export function fromObject(obj: any): UserVerifyPhoneNumberResult {
    return {
      ...obj,
    }
  }
}
