/* eslint-disable */
import { AddressedLocation } from '../common';


export interface UserListRideReservationAvailableRideTypesParams {
  origin?: AddressedLocation;
  destination?: AddressedLocation;
}

export namespace UserListRideReservationAvailableRideTypesParams {
  export function fromObject(obj: any): UserListRideReservationAvailableRideTypesParams {
    return {
      ...obj,
      origin: obj.origin != null ? AddressedLocation.fromObject(obj.origin) : undefined,
      destination: obj.destination != null ? AddressedLocation.fromObject(obj.destination) : undefined,
    }
  }
}

export interface UserListRideReservationAvailableRideTypesResult {
  rideTypeInfos: UserListRideReservationAvailableRideTypesResult.RideTypeInfo[];
  /**
   *  페이지에 처음 진입했을 때 기본으로 선택되어 있는 상품 지정하기 위한 값
   */
  defaultRideTypeInfoIndex: number;
}

export namespace UserListRideReservationAvailableRideTypesResult {
  export function fromObject(obj: any): UserListRideReservationAvailableRideTypesResult {
    return {
      ...obj,
      rideTypeInfos: obj.rideTypeInfos.map((v: any) => UserListRideReservationAvailableRideTypesResult.RideTypeInfo.fromObject(v)),
    }
  }

  export interface RideTypeInfo {
    rideType: string;
    minCost: number;
  }

  export namespace RideTypeInfo {
    export function fromObject(obj: any): RideTypeInfo {
      return {
        ...obj,
      }
    }
  }
}
