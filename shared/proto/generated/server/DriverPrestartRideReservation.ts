/* eslint-disable */
import { RideReservationDTO } from '../ride_reservation';


export interface DriverPrestartRideReservationParams {
  rideReservationId: string;
}

export namespace DriverPrestartRideReservationParams {
  export function fromObject(obj: any): DriverPrestartRideReservationParams {
    return {
      ...obj,
    }
  }
}

export interface DriverPrestartRideReservationResult {
  rideReservation?: RideReservationDTO;
}

export namespace DriverPrestartRideReservationResult {
  export function fromObject(obj: any): DriverPrestartRideReservationResult {
    return {
      ...obj,
      rideReservation: obj.rideReservation != null ? RideReservationDTO.fromObject(obj.rideReservation) : undefined,
    }
  }
}
