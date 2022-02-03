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
export declare namespace DriverLogNavigationOpenParams {
    function fromObject(obj: any): DriverLogNavigationOpenParams;
    type NavigationApp = 'TMAP' | 'ATLAN' | 'NAVER';
    function NavigationApp_fromString(str: string): NavigationApp | undefined;
    type DestinationType = 'UNSPECIFIED' | 'RIDE_ORIGIN' | 'RIDE_DESTINATION' | 'RIDE_RESERVATION_ORIGIN' | 'TRIP_ORIGIN' | 'TRIP_DESTINATION' | 'ASSIGNED_AREA' | 'VEHICLE_ZONE' | 'RIDE_WAYPOINT' | 'TRIP_WAYPOINT';
    function DestinationType_fromString(str: string): DestinationType | undefined;
}
export interface DriverLogNavigationOpenResult {
}
export declare namespace DriverLogNavigationOpenResult {
    function fromObject(obj: any): DriverLogNavigationOpenResult;
}
