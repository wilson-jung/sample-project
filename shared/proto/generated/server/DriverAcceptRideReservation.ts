/* eslint-disable */
import { RideReservationDTO } from '../ride_reservation';


export interface DriverAcceptRideReservationParams {
  rideReservationId: string;
}

export namespace DriverAcceptRideReservationParams {
  export function fromObject(obj: any): DriverAcceptRideReservationParams {
    return {
      ...obj,
    }
  }
}

export interface DriverAcceptRideReservationResult {
  rideReservation?: RideReservationDTO;
}

export namespace DriverAcceptRideReservationResult {
  export function fromObject(obj: any): DriverAcceptRideReservationResult {
    return {
      ...obj,
      rideReservation: obj.rideReservation != null ? RideReservationDTO.fromObject(obj.rideReservation) : undefined,
    }
  }
}
