/* eslint-disable */

export interface UserResetPasswordParams {
  resetPasswordToken: string;
  newPassword: string;
}

export namespace UserResetPasswordParams {
  export function fromObject(obj: any): UserResetPasswordParams {
    return {
      ...obj,
    }
  }
}

export interface UserResetPasswordResult {
}

export namespace UserResetPasswordResult {
  export function fromObject(obj: any): UserResetPasswordResult {
    return {
      ...obj,
    }
  }
}
