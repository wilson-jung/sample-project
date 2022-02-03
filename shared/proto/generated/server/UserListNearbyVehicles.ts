/* eslint-disable */
import { Location } from '../common';


export interface UserListNearbyVehiclesParams {
  location?: Location;
  /**
   *  목적지가 있는 경우(ex. 호출뷰)에만 넣어준다.
   */
  destination?: Location;
  /**
   *  라이드 타입. RideType, RideTypeGroup의 값이 올 수 있다. 여러 값을 넣어주는 것도 가능하다.
   */
  rideTypes: string[];
}

export namespace UserListNearbyVehiclesParams {
  export function fromObject(obj: any): UserListNearbyVehiclesParams {
    return {
      ...obj,
      location: obj.location != null ? Location.fromObject(obj.location) : undefined,
      destination: obj.destination != null ? Location.fromObject(obj.destination) : undefined,
    }
  }
}

export interface UserListNearbyVehiclesResult {
  vehicleLocations: UserListNearbyVehiclesResult.TypedVehicleLocation[];
}

export namespace UserListNearbyVehiclesResult {
  export function fromObject(obj: any): UserListNearbyVehiclesResult {
    return {
      ...obj,
      vehicleLocations: obj.vehicleLocations.map((v: any) => UserListNearbyVehiclesResult.TypedVehicleLocation.fromObject(v)),
    }
  }

  export interface TypedVehicleLocation {
    rideType: string;
    lng: number;
    lat: number;
    bearing: number;
    speedMeterPerSecond: number;
  }

  export namespace TypedVehicleLocation {
    export function fromObject(obj: any): TypedVehicleLocation {
      return {
        ...obj,
      }
    }
  }
}
