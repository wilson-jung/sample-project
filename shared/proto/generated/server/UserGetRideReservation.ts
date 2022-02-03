/* eslint-disable */
import { RideReservationDTO } from '../ride_reservation';


export interface UserGetRideReservationParams {
  rideReservationId: string;
}

export namespace UserGetRideReservationParams {
  export function fromObject(obj: any): UserGetRideReservationParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetRideReservationResult {
  rideReservation?: RideReservationDTO;
}

export namespace UserGetRideReservationResult {
  export function fromObject(obj: any): UserGetRideReservationResult {
    return {
      ...obj,
      rideReservation: obj.rideReservation != null ? RideReservationDTO.fromObject(obj.rideReservation) : undefined,
    }
  }
}
