/* eslint-disable */
import { RideReservationDTO } from '../ride_reservation';
import { TripDTO } from '../trip';


export interface DriverListScheduledTripsAndRideReservationsParams {
}

export namespace DriverListScheduledTripsAndRideReservationsParams {
  export function fromObject(obj: any): DriverListScheduledTripsAndRideReservationsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverListScheduledTripsAndRideReservationsResult {
  entries: DriverListScheduledTripsAndRideReservationsResult.Entry[];
}

export namespace DriverListScheduledTripsAndRideReservationsResult {
  export function fromObject(obj: any): DriverListScheduledTripsAndRideReservationsResult {
    return {
      ...obj,
      entries: obj.entries.map((v: any) => DriverListScheduledTripsAndRideReservationsResult.Entry.fromObject(v)),
    }
  }

  export interface Entry {
    /**
     *  둘 중 하나만 null이 아니어야한다.
     */
    rideReservation?: RideReservationDTO;
    trip?: TripDTO;
  }

  export namespace Entry {
    export function fromObject(obj: any): Entry {
      return {
        ...obj,
        rideReservation: obj.rideReservation != null ? RideReservationDTO.fromObject(obj.rideReservation) : undefined,
        trip: obj.trip != null ? TripDTO.fromObject(obj.trip) : undefined,
      }
    }
  }
}
