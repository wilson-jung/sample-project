export interface UserPrepareCancelRideReservationParams {
    rideReservationId: string;
}
export declare namespace UserPrepareCancelRideReservationParams {
    function fromObject(obj: any): UserPrepareCancelRideReservationParams;
}
export interface UserPrepareCancelRideReservationResult {
    cancelRideReservationToken: string;
    popupTitle: string;
    popupBody: string;
    popupActionButtonText: string;
}
export declare namespace UserPrepareCancelRideReservationResult {
    function fromObject(obj: any): UserPrepareCancelRideReservationResult;
}
