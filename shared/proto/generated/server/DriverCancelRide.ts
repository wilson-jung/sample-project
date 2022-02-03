/* eslint-disable */
import { RideCancellationReasonType, RideDTO } from '../ride';
import { BoolValue } from '../wrappers';


export interface DriverCancelRideParams {
  rideId: string;
  /**
   *  Reason에 대한 타입. 로깅해서 분석을 하는 용도로 사용됩니다.
   */
  reasonType?: RideCancellationReasonType.Driver.Value;
  /**
   *  ReasonType이 CUSTOM이 아닐때도 각 Type에 맞는 문자열을 담아서 올려줘야합니다.
   */
  reason: string;
  /**
   *  라이드를 취소할 때 확인이 필요한 경우 확인했다는 표시.
   */
  confirmed?: BoolValue;
}

export namespace DriverCancelRideParams {
  export function fromObject(obj: any): DriverCancelRideParams {
    return {
      ...obj,
      reasonType: RideCancellationReasonType.Driver.Value_fromString(obj.reasonType),
      confirmed: obj.confirmed != null ? BoolValue.fromObject(obj.confirmed) : undefined,
    }
  }
}

export interface DriverCancelRideResult {
  ride?: RideDTO;
}

export namespace DriverCancelRideResult {
  export function fromObject(obj: any): DriverCancelRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
