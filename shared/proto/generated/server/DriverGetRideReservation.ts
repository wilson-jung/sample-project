/* eslint-disable */
import { RideReservationDTO } from '../ride_reservation';


export interface DriverGetRideReservationParams {
  rideReservationId: string;
}

export namespace DriverGetRideReservationParams {
  export function fromObject(obj: any): DriverGetRideReservationParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetRideReservationResult {
  rideReservation?: RideReservationDTO;
}

export namespace DriverGetRideReservationResult {
  export function fromObject(obj: any): DriverGetRideReservationResult {
    return {
      ...obj,
      rideReservation: obj.rideReservation != null ? RideReservationDTO.fromObject(obj.rideReservation) : undefined,
    }
  }
}
