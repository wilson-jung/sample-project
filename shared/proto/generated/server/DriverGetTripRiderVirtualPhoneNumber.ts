/* eslint-disable */

export interface DriverGetTripRiderVirtualPhoneNumberParams {
  tripId: string;
}

export namespace DriverGetTripRiderVirtualPhoneNumberParams {
  export function fromObject(obj: any): DriverGetTripRiderVirtualPhoneNumberParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetTripRiderVirtualPhoneNumberResult {
  /**
   *  드라이버의 가상 전화번호
   */
  riderVirtualPhoneNumber: string;
}

export namespace DriverGetTripRiderVirtualPhoneNumberResult {
  export function fromObject(obj: any): DriverGetTripRiderVirtualPhoneNumberResult {
    return {
      ...obj,
    }
  }
}
