/* eslint-disable */
import { StringValue } from '../wrappers';


export interface DriverReviewTripParams {
  tripId: string;
  /**
   *  좋아요 : 0, 싫어요 : -1
   */
  tripRating: number;
  reason?: StringValue;
  tripRatingTags: DriverReviewTripParams.TripRatingTag[];
}

export namespace DriverReviewTripParams {
  export function fromObject(obj: any): DriverReviewTripParams {
    return {
      ...obj,
      reason: obj.reason != null ? StringValue.fromObject(obj.reason) : undefined,
      tripRatingTags: obj.tripRatingTags.map((v: any) => DriverReviewTripParams.TripRatingTag_fromString(v)),
    }
  }

  /**
   * CUSTOM : 
     *  기타 (직접입력)
   * LONG_WAITING : 
     *  과도한 대기시간 발생
   * RUDE_ATTITUDE : 
     *  하대하는 언행 (갑질)
   * REQUEST_ILLEGAL : 
     *  법규위반 요구 (과속, 신호위반 등)
   * SMOKING : 
     *  차내 흡연
   * INGESTION : 
     *  음식물 섭취
   * GARBAGE_DUMPING : 
     *  쓰레기 투기 (더럽게 쓰는 경우)
   * NOISY : 
     *  차내 소란
   * NO_MASK : 
     *  마스크 착용하지 않음
   */
  export type TripRatingTag = 'CUSTOM' | 'LONG_WAITING' | 'RUDE_ATTITUDE' | 'REQUEST_ILLEGAL' | 'SMOKING' | 'INGESTION' | 'GARBAGE_DUMPING' | 'NOISY' | 'NO_MASK';

  export function TripRatingTag_fromString(str: string): TripRatingTag | undefined {
    switch (str) {
      case "CUSTOM":
      case "LONG_WAITING":
      case "RUDE_ATTITUDE":
      case "REQUEST_ILLEGAL":
      case "SMOKING":
      case "INGESTION":
      case "GARBAGE_DUMPING":
      case "NOISY":
      case "NO_MASK":
      return str
      default: return undefined
    }
  }
}

export interface DriverReviewTripResult {
}

export namespace DriverReviewTripResult {
  export function fromObject(obj: any): DriverReviewTripResult {
    return {
      ...obj,
    }
  }
}
