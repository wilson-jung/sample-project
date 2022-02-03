/* eslint-disable */
import { TripDTO } from '../trip';


export interface DriverLogTripReminderParams {
  tripId: string;
}

export namespace DriverLogTripReminderParams {
  export function fromObject(obj: any): DriverLogTripReminderParams {
    return {
      ...obj,
    }
  }
}

export interface DriverLogTripReminderResult {
  trip?: TripDTO;
}

export namespace DriverLogTripReminderResult {
  export function fromObject(obj: any): DriverLogTripReminderResult {
    return {
      ...obj,
      trip: obj.trip != null ? TripDTO.fromObject(obj.trip) : undefined,
    }
  }
}
