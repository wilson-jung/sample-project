/* eslint-disable */
import { BoolValue } from '../wrappers';


export interface UserGetRideCurrentFeeParams {
  rideId: string;
}

export namespace UserGetRideCurrentFeeParams {
  export function fromObject(obj: any): UserGetRideCurrentFeeParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetRideCurrentFeeResult {
  currentFeeKrw: number;
  /**
   *  sec
   */
  nextUpdateInterval: number;
  taxiSurgeType?: UserGetRideCurrentFeeResult.TaxiSurgeType;
  isGpsUnavailable?: BoolValue;
}

export namespace UserGetRideCurrentFeeResult {
  export function fromObject(obj: any): UserGetRideCurrentFeeResult {
    return {
      ...obj,
      taxiSurgeType: UserGetRideCurrentFeeResult.TaxiSurgeType_fromString(obj.taxiSurgeType),
      isGpsUnavailable: obj.isGpsUnavailable != null ? BoolValue.fromObject(obj.isGpsUnavailable) : undefined,
    }
  }

  /**
   * NONE : 
     *  핧증 없음
   * TAXI_REGION_SURGE : 
     *  시계외 할증
   * NIGHT_SURGE : 
     *  야간 할증
   * COMPOUND_SURGE : 
     *  복합 할증
   */
  export type TaxiSurgeType = 'NONE' | 'TAXI_REGION_SURGE' | 'NIGHT_SURGE' | 'COMPOUND_SURGE';

  export function TaxiSurgeType_fromString(str: string): TaxiSurgeType | undefined {
    switch (str) {
      case "NONE":
      case "TAXI_REGION_SURGE":
      case "NIGHT_SURGE":
      case "COMPOUND_SURGE":
      return str
      default: return undefined
    }
  }
}
