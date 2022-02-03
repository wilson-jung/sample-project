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
export declare namespace UserListRideReservationEstimationsParams {
    function fromObject(obj: any): UserListRideReservationEstimationsParams;
}
export interface UserListRideReservationEstimationsResult {
    estimations: UserListRideReservationEstimationsResult.RideReservationEstimation[];
    estimationToken: string;
}
export declare namespace UserListRideReservationEstimationsResult {
    function fromObject(obj: any): UserListRideReservationEstimationsResult;
    interface RideReservationEstimation {
        expectedPickUpAt?: Timestamp;
        cost: number;
        surgeMultiplier?: StringValue;
    }
    namespace RideReservationEstimation {
        function fromObject(obj: any): RideReservationEstimation;
    }
}
