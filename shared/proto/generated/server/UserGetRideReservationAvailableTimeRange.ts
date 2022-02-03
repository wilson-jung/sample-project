/* eslint-disable */
import { Timestamp } from '../timestamp';


export interface UserGetRideReservationAvailableTimeRangeParams {
}

export namespace UserGetRideReservationAvailableTimeRangeParams {
  export function fromObject(obj: any): UserGetRideReservationAvailableTimeRangeParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetRideReservationAvailableTimeRangeResult {
  minAvailableTime?: Timestamp;
  maxAvailableTime?: Timestamp;
  timeStepMinutes: number;
}

export namespace UserGetRideReservationAvailableTimeRangeResult {
  export function fromObject(obj: any): UserGetRideReservationAvailableTimeRangeResult {
    return {
      ...obj,
      minAvailableTime: obj.minAvailableTime != null ? Timestamp.fromObject(obj.minAvailableTime) : undefined,
      maxAvailableTime: obj.maxAvailableTime != null ? Timestamp.fromObject(obj.maxAvailableTime) : undefined,
    }
  }
}
