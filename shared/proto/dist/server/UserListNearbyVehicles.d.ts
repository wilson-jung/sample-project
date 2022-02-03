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
export declare namespace UserListNearbyVehiclesParams {
    function fromObject(obj: any): UserListNearbyVehiclesParams;
}
export interface UserListNearbyVehiclesResult {
    vehicleLocations: UserListNearbyVehiclesResult.TypedVehicleLocation[];
}
export declare namespace UserListNearbyVehiclesResult {
    function fromObject(obj: any): UserListNearbyVehiclesResult;
    interface TypedVehicleLocation {
        rideType: string;
        lng: number;
        lat: number;
        bearing: number;
        speedMeterPerSecond: number;
    }
    namespace TypedVehicleLocation {
        function fromObject(obj: any): TypedVehicleLocation;
    }
}
