/* eslint-disable */

export interface UserVerifyPasswordParams {
  password: string;
}

export namespace UserVerifyPasswordParams {
  export function fromObject(obj: any): UserVerifyPasswordParams {
    return {
      ...obj,
    }
  }
}

export interface UserVerifyPasswordResult {
}

export namespace UserVerifyPasswordResult {
  export function fromObject(obj: any): UserVerifyPasswordResult {
    return {
      ...obj,
    }
  }
}
