/* eslint-disable */

export interface UserLogAppSatisfactionParams {
  isUserSatisfied: boolean;
}

export namespace UserLogAppSatisfactionParams {
  export function fromObject(obj: any): UserLogAppSatisfactionParams {
    return {
      ...obj,
    }
  }
}

export interface UserLogAppSatisfactionResult {
}

export namespace UserLogAppSatisfactionResult {
  export function fromObject(obj: any): UserLogAppSatisfactionResult {
    return {
      ...obj,
    }
  }
}
