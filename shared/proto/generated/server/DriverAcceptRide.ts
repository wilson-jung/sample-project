/* eslint-disable */
import { RideDTO } from '../ride';


export interface DriverAcceptRideParams {
  rideId: string;
}

export namespace DriverAcceptRideParams {
  export function fromObject(obj: any): DriverAcceptRideParams {
    return {
      ...obj,
    }
  }
}

export interface DriverAcceptRideResult {
  ride?: RideDTO;
}

export namespace DriverAcceptRideResult {
  export function fromObject(obj: any): DriverAcceptRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
