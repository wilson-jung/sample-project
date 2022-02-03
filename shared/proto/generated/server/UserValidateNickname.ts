/* eslint-disable */

export interface UserValidateNicknameParams {
  nickname: string;
}

export namespace UserValidateNicknameParams {
  export function fromObject(obj: any): UserValidateNicknameParams {
    return {
      ...obj,
    }
  }
}

export interface UserValidateNicknameResult {
}

export namespace UserValidateNicknameResult {
  export function fromObject(obj: any): UserValidateNicknameResult {
    return {
      ...obj,
    }
  }
}
