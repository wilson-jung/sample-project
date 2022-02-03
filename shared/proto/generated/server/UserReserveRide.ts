/* eslint-disable */
import { Timestamp } from '../timestamp';
import { AddressedLocation } from '../common';
import { StringValue } from '../wrappers';
import { RideReservationDTO } from '../ride_reservation';


export interface UserReserveRideParams {
  rideType: string;
  expectedPickUpAt: Timestamp[];
  origin?: AddressedLocation;
  destination?: AddressedLocation;
  paymentMethodId: string;
  paymentProfileId: string;
  estimationToken: string;
  bizReason?: StringValue;
  estimationUuid?: StringValue;
}

export namespace UserReserveRideParams {
  export function fromObject(obj: any): UserReserveRideParams {
    return {
      ...obj,
      expectedPickUpAt: obj.expectedPickUpAt.map((v: any) => Timestamp.fromObject(v)),
      origin: obj.origin != null ? AddressedLocation.fromObject(obj.origin) : undefined,
      destination: obj.destination != null ? AddressedLocation.fromObject(obj.destination) : undefined,
      bizReason: obj.bizReason != null ? StringValue.fromObject(obj.bizReason) : undefined,
      estimationUuid: obj.estimationUuid != null ? StringValue.fromObject(obj.estimationUuid) : undefined,
    }
  }
}

export interface UserReserveRideResult {
  rideReservation: RideReservationDTO[];
}

export namespace UserReserveRideResult {
  export function fromObject(obj: any): UserReserveRideResult {
    return {
      ...obj,
      rideReservation: obj.rideReservation.map((v: any) => RideReservationDTO.fromObject(v)),
    }
  }
}
