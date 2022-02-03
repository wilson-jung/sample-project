/* eslint-disable */
import { Int32Value } from '../wrappers';


export interface UserOpenTripReviewParams {
  /**
   *  리뷰 요청할 trip id 정보
   */
  tripId: string;
}

export namespace UserOpenTripReviewParams {
  export function fromObject(obj: any): UserOpenTripReviewParams {
    return {
      ...obj,
    }
  }
}

export interface UserOpenTripReviewResult {
  /**
   *  측정된 점수, 점수 입력을 안했다면 값이 null
   */
  rating?: Int32Value;
}

export namespace UserOpenTripReviewResult {
  export function fromObject(obj: any): UserOpenTripReviewResult {
    return {
      ...obj,
      rating: obj.rating != null ? Int32Value.fromObject(obj.rating) : undefined,
    }
  }
}
