/* eslint-disable */

export interface UserGetRideDriverVirtualPhoneNumberParams {
  rideId: string;
}

export namespace UserGetRideDriverVirtualPhoneNumberParams {
  export function fromObject(obj: any): UserGetRideDriverVirtualPhoneNumberParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetRideDriverVirtualPhoneNumberResult {
  /**
   *  드라이버의 가상 전화번호
   */
  driverVirtualPhoneNumber: string;
}

export namespace UserGetRideDriverVirtualPhoneNumberResult {
  export function fromObject(obj: any): UserGetRideDriverVirtualPhoneNumberResult {
    return {
      ...obj,
    }
  }
}
