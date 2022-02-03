/* eslint-disable */

export interface UserGetRideReservationDriverVirtualPhoneNumberParams {
  rideReservationId: string;
}

export namespace UserGetRideReservationDriverVirtualPhoneNumberParams {
  export function fromObject(obj: any): UserGetRideReservationDriverVirtualPhoneNumberParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetRideReservationDriverVirtualPhoneNumberResult {
  /**
   *  드라이버의 가상 전화번호
   */
  driverVirtualPhoneNumber: string;
}

export namespace UserGetRideReservationDriverVirtualPhoneNumberResult {
  export function fromObject(obj: any): UserGetRideReservationDriverVirtualPhoneNumberResult {
    return {
      ...obj,
    }
  }
}
