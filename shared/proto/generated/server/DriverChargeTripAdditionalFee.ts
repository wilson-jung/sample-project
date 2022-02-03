/* eslint-disable */
import { Int32Value } from '../wrappers';
import { TripDTO } from '../trip';


export interface DriverChargeTripAdditionalFeeParams {
  tripId: string;
  /**
   *  드라이버가 입력한 톨게이트 비용
   */
  tollgateFee?: Int32Value;
  /**
   *  드라이버가 입력한 주차장 비용
   */
  parkingFee?: Int32Value;
}

export namespace DriverChargeTripAdditionalFeeParams {
  export function fromObject(obj: any): DriverChargeTripAdditionalFeeParams {
    return {
      ...obj,
      tollgateFee: obj.tollgateFee != null ? Int32Value.fromObject(obj.tollgateFee) : undefined,
      parkingFee: obj.parkingFee != null ? Int32Value.fromObject(obj.parkingFee) : undefined,
    }
  }
}

export interface DriverChargeTripAdditionalFeeResult {
  trip?: TripDTO;
}

export namespace DriverChargeTripAdditionalFeeResult {
  export function fromObject(obj: any): DriverChargeTripAdditionalFeeResult {
    return {
      ...obj,
      trip: obj.trip != null ? TripDTO.fromObject(obj.trip) : undefined,
    }
  }
}
