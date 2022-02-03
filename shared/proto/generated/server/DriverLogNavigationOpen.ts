/* eslint-disable */


export interface DriverLogNavigationOpenParams {
  app?: DriverLogNavigationOpenParams.NavigationApp;
  destinationType?: DriverLogNavigationOpenParams.DestinationType;
  clientTimeMs: string;
  /**
   *  Optional: 안전 운행 모드로 가는 경우 아무 값도 넣어주지 않아도 됩니다.
   */
  lng: number;
  /**
   *  Optional: 안전 운행 모드로 가는 경우 아무 값도 넣어주지 않아도 됩니다.
   */
  lat: number;
  /**
   *  Optional: 현재 라이드가 없다면 아무 값도 넣어주지 않아도 됩니다.
   */
  rideId: string;
  /**
   *  Optional: 현재 라이드가 없다면 아무 값도 넣어주지 않아도 됩니다.
   */
  rideStatus: string;
  /**
   *  Optional: 현재 트립이 없다면 아무 값도 넣어주지 않아도 됩니다.
   */
  tripId: string;
  /**
   *  Optional: 현재 트립이 없다면 아무 값도 넣어주지 않아도 됩니다.
   */
  tripRideStatus: string;
  /**
   *  Optional: 현재 미션이 없다면 아무 값도 넣어주지 않아도 됩니다.
   */
  missionId: string;
}

export namespace DriverLogNavigationOpenParams {
  export function fromObject(obj: any): DriverLogNavigationOpenParams {
    return {
      ...obj,
      app: DriverLogNavigationOpenParams.NavigationApp_fromString(obj.app),
      destinationType: DriverLogNavigationOpenParams.DestinationType_fromString(obj.destinationType),
      clientTimeMs: obj.clientTimeMs.toString(),
    }
  }

  export type NavigationApp = 'TMAP' | 'ATLAN' | 'NAVER';

  export function NavigationApp_fromString(str: string): NavigationApp | undefined {
    switch (str) {
      case "TMAP":
      case "ATLAN":
      case "NAVER":
      return str
      default: return undefined
    }
  }

  export type DestinationType = 'UNSPECIFIED' | 'RIDE_ORIGIN' | 'RIDE_DESTINATION' | 'RIDE_RESERVATION_ORIGIN' | 'TRIP_ORIGIN' | 'TRIP_DESTINATION' | 'ASSIGNED_AREA' | 'VEHICLE_ZONE' | 'RIDE_WAYPOINT' | 'TRIP_WAYPOINT';

  export function DestinationType_fromString(str: string): DestinationType | undefined {
    switch (str) {
      case "UNSPECIFIED":
      case "RIDE_ORIGIN":
      case "RIDE_DESTINATION":
      case "RIDE_RESERVATION_ORIGIN":
      case "TRIP_ORIGIN":
      case "TRIP_DESTINATION":
      case "ASSIGNED_AREA":
      case "VEHICLE_ZONE":
      case "RIDE_WAYPOINT":
      case "TRIP_WAYPOINT":
      return str
      default: return undefined
    }
  }
}

export interface DriverLogNavigationOpenResult {
}

export namespace DriverLogNavigationOpenResult {
  export function fromObject(obj: any): DriverLogNavigationOpenResult {
    return {
      ...obj,
    }
  }
}
