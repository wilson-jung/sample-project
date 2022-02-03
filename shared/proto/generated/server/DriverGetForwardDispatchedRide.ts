/* eslint-disable */
import { RideDTO } from '../ride';


export interface DriverGetForwardDispatchedRideParams {
}

export namespace DriverGetForwardDispatchedRideParams {
  export function fromObject(obj: any): DriverGetForwardDispatchedRideParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetForwardDispatchedRideResult {
  ride?: RideDTO;
}

export namespace DriverGetForwardDispatchedRideResult {
  export function fromObject(obj: any): DriverGetForwardDispatchedRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
