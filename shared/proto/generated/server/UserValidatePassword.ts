/* eslint-disable */

export interface UserValidatePasswordParams {
  password: string;
}

export namespace UserValidatePasswordParams {
  export function fromObject(obj: any): UserValidatePasswordParams {
    return {
      ...obj,
    }
  }
}

export interface UserValidatePasswordResult {
}

export namespace UserValidatePasswordResult {
  export function fromObject(obj: any): UserValidatePasswordResult {
    return {
      ...obj,
    }
  }
}
