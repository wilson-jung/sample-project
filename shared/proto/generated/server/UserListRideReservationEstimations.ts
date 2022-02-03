/* eslint-disable */
import { AddressedLocation } from '../common';
import { Timestamp } from '../timestamp';
import { StringValue } from '../wrappers';


export interface UserListRideReservationEstimationsParams {
  /**
   *  non-null
   */
  origin?: AddressedLocation;
  /**
   *  non-null
   */
  destination?: AddressedLocation;
  rideType: string;
  expectedPickUpAtList: Timestamp[];
  newExpectedPickUpAt?: Timestamp;
  /**
   *  최초 호출 시에는 비워서 호출하고, 이후부터는 가장 마지막에 내려준 값을 그대로 올려준다.
   */
  estimationToken?: StringValue;
}

export namespace UserListRideReservationEstimationsParams {
  export function fromObject(obj: any): UserListRideReservationEstimationsParams {
    return {
      ...obj,
      origin: obj.origin != null ? AddressedLocation.fromObject(obj.origin) : undefined,
      destination: obj.destination != null ? AddressedLocation.fromObject(obj.destination) : undefined,
      expectedPickUpAtList: obj.expectedPickUpAtList.map((v: any) => Timestamp.fromObject(v)),
      newExpectedPickUpAt: obj.newExpectedPickUpAt != null ? Timestamp.fromObject(obj.newExpectedPickUpAt) : undefined,
      estimationToken: obj.estimationToken != null ? StringValue.fromObject(obj.estimationToken) : undefined,
    }
  }
}

export interface UserListRideReservationEstimationsResult {
  estimations: UserListRideReservationEstimationsResult.RideReservationEstimation[];
  estimationToken: string;
}

export namespace UserListRideReservationEstimationsResult {
  export function fromObject(obj: any): UserListRideReservationEstimationsResult {
    return {
      ...obj,
      estimations: obj.estimations.map((v: any) => UserListRideReservationEstimationsResult.RideReservationEstimation.fromObject(v)),
    }
  }

  export interface RideReservationEstimation {
    expectedPickUpAt?: Timestamp;
    cost: number;
    surgeMultiplier?: StringValue;
  }

  export namespace RideReservationEstimation {
    export function fromObject(obj: any): RideReservationEstimation {
      return {
        ...obj,
        expectedPickUpAt: obj.expectedPickUpAt != null ? Timestamp.fromObject(obj.expectedPickUpAt) : undefined,
        surgeMultiplier: obj.surgeMultiplier != null ? StringValue.fromObject(obj.surgeMultiplier) : undefined,
      }
    }
  }
}
