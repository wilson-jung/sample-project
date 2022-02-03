/* eslint-disable */

export interface UserCompleteRideReservationsParams {
  /**
   *  예약이 된 RideReservation 의 id 리스트
   */
  rideReservationIds: string[];
}

export namespace UserCompleteRideReservationsParams {
  export function fromObject(obj: any): UserCompleteRideReservationsParams {
    return {
      ...obj,
    }
  }
}
