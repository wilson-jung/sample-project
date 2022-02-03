/* eslint-disable */
import { TripDTO } from '../trip';


export interface DriverGetTripParams {
  tripId: string;
}

export namespace DriverGetTripParams {
  export function fromObject(obj: any): DriverGetTripParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetTripResult {
  trip?: TripDTO;
}

export namespace DriverGetTripResult {
  export function fromObject(obj: any): DriverGetTripResult {
    return {
      ...obj,
      trip: obj.trip != null ? TripDTO.fromObject(obj.trip) : undefined,
    }
  }
}
