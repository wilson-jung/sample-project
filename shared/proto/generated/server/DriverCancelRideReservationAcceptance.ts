/* eslint-disable */
import { RideReservationDTO } from '../ride_reservation';


export interface DriverCancelRideReservationAcceptanceParams {
  rideReservationId: string;
}

export namespace DriverCancelRideReservationAcceptanceParams {
  export function fromObject(obj: any): DriverCancelRideReservationAcceptanceParams {
    return {
      ...obj,
    }
  }
}

export interface DriverCancelRideReservationAcceptanceResult {
  rideReservation?: RideReservationDTO;
}

export namespace DriverCancelRideReservationAcceptanceResult {
  export function fromObject(obj: any): DriverCancelRideReservationAcceptanceResult {
    return {
      ...obj,
      rideReservation: obj.rideReservation != null ? RideReservationDTO.fromObject(obj.rideReservation) : undefined,
    }
  }
}
