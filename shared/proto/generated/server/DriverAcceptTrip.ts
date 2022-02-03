/* eslint-disable */
import { TripDTO } from '../trip';


export interface DriverAcceptTripParams {
  tripId: string;
}

export namespace DriverAcceptTripParams {
  export function fromObject(obj: any): DriverAcceptTripParams {
    return {
      ...obj,
    }
  }
}

export interface DriverAcceptTripResult {
  trip?: TripDTO;
}

export namespace DriverAcceptTripResult {
  export function fromObject(obj: any): DriverAcceptTripResult {
    return {
      ...obj,
      trip: obj.trip != null ? TripDTO.fromObject(obj.trip) : undefined,
    }
  }
}
