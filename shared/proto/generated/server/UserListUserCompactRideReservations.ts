/* eslint-disable */
import { StringValue, Int32Value } from '../wrappers';
import { UserCompactRideReservationDTO } from '../ride_reservation';


export interface UserListUserCompactRideReservationsParams {
  nextToken?: StringValue;
  limit?: Int32Value;
}

export namespace UserListUserCompactRideReservationsParams {
  export function fromObject(obj: any): UserListUserCompactRideReservationsParams {
    return {
      ...obj,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
      limit: obj.limit != null ? Int32Value.fromObject(obj.limit) : undefined,
    }
  }
}

export interface UserListUserCompactRideReservationsResult {
  rideReservations: UserCompactRideReservationDTO[];
  nextToken?: StringValue;
}

export namespace UserListUserCompactRideReservationsResult {
  export function fromObject(obj: any): UserListUserCompactRideReservationsResult {
    return {
      ...obj,
      rideReservations: obj.rideReservations.map((v: any) => UserCompactRideReservationDTO.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}
