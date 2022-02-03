/* eslint-disable */
import { RideDTO } from '../ride';


export interface DriverGetDispatchedRideParams {
}

export namespace DriverGetDispatchedRideParams {
  export function fromObject(obj: any): DriverGetDispatchedRideParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetDispatchedRideResult {
  ride?: RideDTO;
  dispatchTimeoutSeconds: number;
}

export namespace DriverGetDispatchedRideResult {
  export function fromObject(obj: any): DriverGetDispatchedRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
