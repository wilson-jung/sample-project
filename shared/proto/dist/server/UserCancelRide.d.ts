import { StringValue } from '../wrappers';
import { RideDTO } from '../ride';
export interface UserCancelRideParams {
    rideId: string;
    /**
     *  일반적인 경우 CancelRideToken이며,
     *  호출예약으로 생성된 Ride의 경우 cancelRideReservationToken이다.
     */
    cancelRideToken?: StringValue;
}
export declare namespace UserCancelRideParams {
    function fromObject(obj: any): UserCancelRideParams;
}
export interface UserCancelRideResult {
    ride?: RideDTO;
    popupTitle?: StringValue;
    popupBody?: StringValue;
}
export declare namespace UserCancelRideResult {
    function fromObject(obj: any): UserCancelRideResult;
}
