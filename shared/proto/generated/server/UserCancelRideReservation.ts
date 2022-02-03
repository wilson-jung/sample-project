/* eslint-disable */
import { RideReservationDTO } from '../ride_reservation';
import { StringValue } from '../wrappers';


export interface UserCancelRideReservationParams {
  rideReservationId: string;
  cancelRideReservationToken: string;
}

export namespace UserCancelRideReservationParams {
  export function fromObject(obj: any): UserCancelRideReservationParams {
    return {
      ...obj,
    }
  }
}

export interface UserCancelRideReservationResult {
  rideReservation?: RideReservationDTO;
  popupTitle?: StringValue;
  popupBody?: StringValue;
}

export namespace UserCancelRideReservationResult {
  export function fromObject(obj: any): UserCancelRideReservationResult {
    return {
      ...obj,
      rideReservation: obj.rideReservation != null ? RideReservationDTO.fromObject(obj.rideReservation) : undefined,
      popupTitle: obj.popupTitle != null ? StringValue.fromObject(obj.popupTitle) : undefined,
      popupBody: obj.popupBody != null ? StringValue.fromObject(obj.popupBody) : undefined,
    }
  }
}
