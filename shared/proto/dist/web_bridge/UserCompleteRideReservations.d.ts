export interface UserCompleteRideReservationsParams {
    /**
     *  예약이 된 RideReservation 의 id 리스트
     */
    rideReservationIds: string[];
}
export declare namespace UserCompleteRideReservationsParams {
    function fromObject(obj: any): UserCompleteRideReservationsParams;
}
