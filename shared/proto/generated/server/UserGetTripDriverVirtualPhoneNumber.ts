/* eslint-disable */

export interface UserGetTripDriverVirtualPhoneNumberParams {
  tripId: string;
}

export namespace UserGetTripDriverVirtualPhoneNumberParams {
  export function fromObject(obj: any): UserGetTripDriverVirtualPhoneNumberParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetTripDriverVirtualPhoneNumberResult {
  /**
   *  드라이버의 가상 전화번호
   */
  driverVirtualPhoneNumber: string;
}

export namespace UserGetTripDriverVirtualPhoneNumberResult {
  export function fromObject(obj: any): UserGetTripDriverVirtualPhoneNumberResult {
    return {
      ...obj,
    }
  }
}
