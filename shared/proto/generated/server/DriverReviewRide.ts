/* eslint-disable */
import { StringValue, BoolValue } from '../wrappers';


export interface DriverReviewRideParams {
  rideId: string;
  /**
   *  좋아요 : 0, 싫어요 : -1
   */
  rideRating: number;
  reason?: StringValue;
  rideRatingTags: DriverReviewRideParams.RideRatingTag[];
  preventSameRiderMatching?: BoolValue;
}

export namespace DriverReviewRideParams {
  export function fromObject(obj: any): DriverReviewRideParams {
    return {
      ...obj,
      reason: obj.reason != null ? StringValue.fromObject(obj.reason) : undefined,
      rideRatingTags: obj.rideRatingTags.map((v: any) => DriverReviewRideParams.RideRatingTag_fromString(v)),
      preventSameRiderMatching: obj.preventSameRiderMatching != null ? BoolValue.fromObject(obj.preventSameRiderMatching) : undefined,
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
   * UNKIND : 
     *  (대리) 반말 및 무례한 태도였습니다
   * FORCE_ROUTE : 
     *  (대리) 요청하지 않은 경로를 강요했습니다
   * DRUNKEN : 
     *  (대리) 술에 취해 안 일어났습니다
   * DAERI_LONG_WAIT : 
     *  (대리) 대기를 길게 했습니다
   */
  export type RideRatingTag = 'CUSTOM' | 'LONG_WAITING' | 'RUDE_ATTITUDE' | 'REQUEST_ILLEGAL' | 'SMOKING' | 'INGESTION' | 'GARBAGE_DUMPING' | 'NOISY' | 'NO_MASK' | 'UNKIND' | 'FORCE_ROUTE' | 'DRUNKEN' | 'DAERI_LONG_WAIT';

  export function RideRatingTag_fromString(str: string): RideRatingTag | undefined {
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
      case "UNKIND":
      case "FORCE_ROUTE":
      case "DRUNKEN":
      case "DAERI_LONG_WAIT":
      return str
      default: return undefined
    }
  }
}

export interface DriverReviewRideResult {
}

export namespace DriverReviewRideResult {
  export function fromObject(obj: any): DriverReviewRideResult {
    return {
      ...obj,
    }
  }
}
