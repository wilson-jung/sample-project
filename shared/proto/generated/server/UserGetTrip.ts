/* eslint-disable */
import { TripDTO } from '../trip';


export interface UserGetTripParams {
  tripId: string;
}

export namespace UserGetTripParams {
  export function fromObject(obj: any): UserGetTripParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetTripResult {
  trip?: TripDTO;
}

export namespace UserGetTripResult {
  export function fromObject(obj: any): UserGetTripResult {
    return {
      ...obj,
      trip: obj.trip != null ? TripDTO.fromObject(obj.trip) : undefined,
    }
  }
}
