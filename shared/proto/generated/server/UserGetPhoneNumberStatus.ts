/* eslint-disable */

export interface UserGetPhoneNumberStatusParams {
  verifiedPhoneNumberToken: string;
}

export namespace UserGetPhoneNumberStatusParams {
  export function fromObject(obj: any): UserGetPhoneNumberStatusParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetPhoneNumberStatusResult {
  isRegisteredPhoneNumber: boolean;
}

export namespace UserGetPhoneNumberStatusResult {
  export function fromObject(obj: any): UserGetPhoneNumberStatusResult {
    return {
      ...obj,
    }
  }
}
