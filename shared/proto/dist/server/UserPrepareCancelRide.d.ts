export interface UserPrepareCancelRideParams {
    rideId: string;
}
export declare namespace UserPrepareCancelRideParams {
    function fromObject(obj: any): UserPrepareCancelRideParams;
}
export interface UserPrepareCancelRideResult {
    /**
     *  일반적인 경우 CancelRideToken이 내려가며,
     *  호출예약으로 생성된 Ride의 경우 cancelRideReservationToken이 내려간다.
     */
    cancelRideToken: string;
    popupTitle: string;
    popupBody: string;
    popupActionButton: string;
}
export declare namespace UserPrepareCancelRideResult {
    function fromObject(obj: any): UserPrepareCancelRideResult;
}
