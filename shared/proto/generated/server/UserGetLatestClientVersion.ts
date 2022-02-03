/* eslint-disable */

export interface UserGetLatestClientVersionParams {
}

export namespace UserGetLatestClientVersionParams {
  export function fromObject(obj: any): UserGetLatestClientVersionParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetLatestClientVersionResult {
  latestAndroidClientVersion: string;
  latestIosClientVersion: string;
}

export namespace UserGetLatestClientVersionResult {
  export function fromObject(obj: any): UserGetLatestClientVersionResult {
    return {
      ...obj,
    }
  }
}
