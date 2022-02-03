/* eslint-disable */

export interface DriverPrepareAddRideStopoverParams {
  rideId: string;
}

export namespace DriverPrepareAddRideStopoverParams {
  export function fromObject(obj: any): DriverPrepareAddRideStopoverParams {
    return {
      ...obj,
    }
  }
}

export interface DriverPrepareAddRideStopoverResult {
  currentAddress: string;
  /**
   *  토큰은 5분간 유효하다.
   */
  addToken: string;
}

export namespace DriverPrepareAddRideStopoverResult {
  export function fromObject(obj: any): DriverPrepareAddRideStopoverResult {
    return {
      ...obj,
    }
  }
}
