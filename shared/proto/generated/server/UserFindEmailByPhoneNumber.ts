/* eslint-disable */

export interface UserFindEmailByPhoneNumberParams {
  verifiedPhoneNumberToken: string;
}

export namespace UserFindEmailByPhoneNumberParams {
  export function fromObject(obj: any): UserFindEmailByPhoneNumberParams {
    return {
      ...obj,
    }
  }
}

export interface UserFindEmailByPhoneNumberResult {
  email: string;
}

export namespace UserFindEmailByPhoneNumberResult {
  export function fromObject(obj: any): UserFindEmailByPhoneNumberResult {
    return {
      ...obj,
    }
  }
}
