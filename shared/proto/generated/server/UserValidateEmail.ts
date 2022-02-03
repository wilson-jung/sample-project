/* eslint-disable */

export interface UserValidateEmailParams {
  email: string;
}

export namespace UserValidateEmailParams {
  export function fromObject(obj: any): UserValidateEmailParams {
    return {
      ...obj,
    }
  }
}

export interface UserValidateEmailResult {
}

export namespace UserValidateEmailResult {
  export function fromObject(obj: any): UserValidateEmailResult {
    return {
      ...obj,
    }
  }
}
