/* eslint-disable */
import { RideDTO } from '../ride';


export interface DriverDeleteRideStopoverParams {
  rideId: string;
  /**
   *  삭제하려는 Stopover.created_at을 담아서 올리면 된다.
   */
  stopoverCreatedAt: string;
}

export namespace DriverDeleteRideStopoverParams {
  export function fromObject(obj: any): DriverDeleteRideStopoverParams {
    return {
      ...obj,
      stopoverCreatedAt: obj.stopoverCreatedAt.toString(),
    }
  }
}

export interface DriverDeleteRideStopoverResult {
  ride?: RideDTO;
}

export namespace DriverDeleteRideStopoverResult {
  export function fromObject(obj: any): DriverDeleteRideStopoverResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
