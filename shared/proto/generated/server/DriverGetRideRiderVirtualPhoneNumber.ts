/* eslint-disable */

export interface DriverGetRideRiderVirtualPhoneNumberParams {
  rideId: string;
}

export namespace DriverGetRideRiderVirtualPhoneNumberParams {
  export function fromObject(obj: any): DriverGetRideRiderVirtualPhoneNumberParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetRideRiderVirtualPhoneNumberResult {
  /**
   *  드라이버의 가상 전화번호
   */
  riderVirtualPhoneNumber: string;
}

export namespace DriverGetRideRiderVirtualPhoneNumberResult {
  export function fromObject(obj: any): DriverGetRideRiderVirtualPhoneNumberResult {
    return {
      ...obj,
    }
  }
}
