/* eslint-disable */
import { Int32Value } from '../wrappers';
import { RideDTO } from '../ride';


export interface DriverUpdateWaypointsOfRideParams {
  rideId: string;
  /**
   *  추후 진짜 경유지 수정이 생기는 경우를 고려해서 wrapper type으로 만듬
   */
  additionalWaypointCount?: Int32Value;
}

export namespace DriverUpdateWaypointsOfRideParams {
  export function fromObject(obj: any): DriverUpdateWaypointsOfRideParams {
    return {
      ...obj,
      additionalWaypointCount: obj.additionalWaypointCount != null ? Int32Value.fromObject(obj.additionalWaypointCount) : undefined,
    }
  }
}

export interface DriverUpdateWaypointsOfRideResult {
  ride?: RideDTO;
}

export namespace DriverUpdateWaypointsOfRideResult {
  export function fromObject(obj: any): DriverUpdateWaypointsOfRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
