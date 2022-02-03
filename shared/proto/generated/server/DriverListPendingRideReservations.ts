/* eslint-disable */
import { Int32Value, StringValue } from '../wrappers';
import { RideReservationDTO } from '../ride_reservation';


export interface DriverListPendingRideReservationsParams {
  limit?: Int32Value;
  /**
   *  다음 페이지를 볼 때 올려준다.
   */
  nextToken?: StringValue;
}

export namespace DriverListPendingRideReservationsParams {
  export function fromObject(obj: any): DriverListPendingRideReservationsParams {
    return {
      ...obj,
      limit: obj.limit != null ? Int32Value.fromObject(obj.limit) : undefined,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}

export interface DriverListPendingRideReservationsResult {
  pendingRideReservations: RideReservationDTO[];
  nextToken?: StringValue;
}

export namespace DriverListPendingRideReservationsResult {
  export function fromObject(obj: any): DriverListPendingRideReservationsResult {
    return {
      ...obj,
      pendingRideReservations: obj.pendingRideReservations.map((v: any) => RideReservationDTO.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}
