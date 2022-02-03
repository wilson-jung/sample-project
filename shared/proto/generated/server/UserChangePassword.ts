/* eslint-disable */

export interface UserChangePasswordParams {
  oldPassword: string;
  newPassword: string;
}

export namespace UserChangePasswordParams {
  export function fromObject(obj: any): UserChangePasswordParams {
    return {
      ...obj,
    }
  }
}

export interface UserChangePasswordResult {
}

export namespace UserChangePasswordResult {
  export function fromObject(obj: any): UserChangePasswordResult {
    return {
      ...obj,
    }
  }
}
