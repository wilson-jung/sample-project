/* eslint-disable */

export interface UserLogAppReviewParams {
  isAppReviewed: boolean;
}

export namespace UserLogAppReviewParams {
  export function fromObject(obj: any): UserLogAppReviewParams {
    return {
      ...obj,
    }
  }
}

export interface UserLogAppReviewResult {
}

export namespace UserLogAppReviewResult {
  export function fromObject(obj: any): UserLogAppReviewResult {
    return {
      ...obj,
    }
  }
}
