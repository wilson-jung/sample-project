/* eslint-disable */
import { RideReservationDTO } from '../ride_reservation';


export interface DriverStartRideReservationParams {
  rideReservationId: string;
}

export namespace DriverStartRideReservationParams {
  export function fromObject(obj: any): DriverStartRideReservationParams {
    return {
      ...obj,
    }
  }
}

export interface DriverStartRideReservationResult {
  rideReservation?: RideReservationDTO;
}

export namespace DriverStartRideReservationResult {
  export function fromObject(obj: any): DriverStartRideReservationResult {
    return {
      ...obj,
      rideReservation: obj.rideReservation != null ? RideReservationDTO.fromObject(obj.rideReservation) : undefined,
    }
  }
}
