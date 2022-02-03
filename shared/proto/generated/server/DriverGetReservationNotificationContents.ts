/* eslint-disable */
import { RideReservationDTO } from '../ride_reservation';
import { TripDTO } from '../trip';
import { Timestamp } from '../timestamp';


export interface DriverGetReservationNotificationContentsParams {
}

export namespace DriverGetReservationNotificationContentsParams {
  export function fromObject(obj: any): DriverGetReservationNotificationContentsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetReservationNotificationContentsResult {
  /**
   * OneOf-data
   */
  upcomingRideReservation?: RideReservationDTO;
  /**
   * OneOf-data
   */
  upcomingTrip?: TripDTO;
  offDriverNotifyFrom?: Timestamp;
  workingDriverNotifyFrom?: Timestamp;
  pendingReservationExists: boolean;
}

export namespace DriverGetReservationNotificationContentsResult {
  export function fromObject(obj: any): DriverGetReservationNotificationContentsResult {
    return {
      ...obj,
      upcomingRideReservation: obj.upcomingRideReservation != null ? RideReservationDTO.fromObject(obj.upcomingRideReservation) : undefined,
      upcomingTrip: obj.upcomingTrip != null ? TripDTO.fromObject(obj.upcomingTrip) : undefined,
      offDriverNotifyFrom: obj.offDriverNotifyFrom != null ? Timestamp.fromObject(obj.offDriverNotifyFrom) : undefined,
      workingDriverNotifyFrom: obj.workingDriverNotifyFrom != null ? Timestamp.fromObject(obj.workingDriverNotifyFrom) : undefined,
    }
  }
}
