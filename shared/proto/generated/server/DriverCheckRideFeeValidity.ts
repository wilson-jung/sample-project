/* eslint-disable */

export interface DriverCheckRideFeeValidityParams {
  rideId: string;
  /**
   *  드라이버가 입력한 택시 사용료
   */
  usageFee: number;
  /**
   *  드라이버가 입력한 톨게이트 비용
   */
  tollgateFee: number;
}

export namespace DriverCheckRideFeeValidityParams {
  export function fromObject(obj: any): DriverCheckRideFeeValidityParams {
    return {
      ...obj,
    }
  }
}

export interface DriverCheckRideFeeValidityResult {
}

export namespace DriverCheckRideFeeValidityResult {
  export function fromObject(obj: any): DriverCheckRideFeeValidityResult {
    return {
      ...obj,
    }
  }
}
