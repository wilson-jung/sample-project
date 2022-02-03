/* eslint-disable */
import { RideReservationDTO } from '../ride_reservation';


export interface UserUpdateRideReservationBizReasonParams {
  rideReservationId: string;
  bizReason: string;
}

export namespace UserUpdateRideReservationBizReasonParams {
  export function fromObject(obj: any): UserUpdateRideReservationBizReasonParams {
    return {
      ...obj,
    }
  }
}

export interface UserUpdateRideReservationBizReasonResult {
  rideReservation?: RideReservationDTO;
}

export namespace UserUpdateRideReservationBizReasonResult {
  export function fromObject(obj: any): UserUpdateRideReservationBizReasonResult {
    return {
      ...obj,
      rideReservation: obj.rideReservation != null ? RideReservationDTO.fromObject(obj.rideReservation) : undefined,
    }
  }
}
