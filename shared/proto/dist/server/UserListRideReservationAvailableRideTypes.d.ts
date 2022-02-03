import { AddressedLocation } from '../common';
export interface UserListRideReservationAvailableRideTypesParams {
    origin?: AddressedLocation;
    destination?: AddressedLocation;
}
export declare namespace UserListRideReservationAvailableRideTypesParams {
    function fromObject(obj: any): UserListRideReservationAvailableRideTypesParams;
}
export interface UserListRideReservationAvailableRideTypesResult {
    rideTypeInfos: UserListRideReservationAvailableRideTypesResult.RideTypeInfo[];
    /**
     *  페이지에 처음 진입했을 때 기본으로 선택되어 있는 상품 지정하기 위한 값
     */
    defaultRideTypeInfoIndex: number;
}
export declare namespace UserListRideReservationAvailableRideTypesResult {
    function fromObject(obj: any): UserListRideReservationAvailableRideTypesResult;
    interface RideTypeInfo {
        rideType: string;
        minCost: number;
    }
    namespace RideTypeInfo {
        function fromObject(obj: any): RideTypeInfo;
    }
}
