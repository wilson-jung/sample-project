/* eslint-disable */
import { RideDTO } from '../ride';


export interface DriverAddRideStopoverParams {
  rideId: string;
  /**
   *  DriverPrepareAddRideStopover API에서 내려준 토큰
   */
  addToken: string;
}

export namespace DriverAddRideStopoverParams {
  export function fromObject(obj: any): DriverAddRideStopoverParams {
    return {
      ...obj,
    }
  }
}

export interface DriverAddRideStopoverResult {
  ride?: RideDTO;
}

export namespace DriverAddRideStopoverResult {
  export function fromObject(obj: any): DriverAddRideStopoverResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
