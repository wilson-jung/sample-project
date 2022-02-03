/* eslint-disable */

export interface DriverQueryPaidRoadPassedParams {
  rideId: string;
}

export namespace DriverQueryPaidRoadPassedParams {
  export function fromObject(obj: any): DriverQueryPaidRoadPassedParams {
    return {
      ...obj,
    }
  }
}

export interface DriverQueryPaidRoadPassedResult {
  passed: boolean;
}

export namespace DriverQueryPaidRoadPassedResult {
  export function fromObject(obj: any): DriverQueryPaidRoadPassedResult {
    return {
      ...obj,
    }
  }
}
