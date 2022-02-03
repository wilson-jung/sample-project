/* eslint-disable */

export interface DriverRejectRideParams {
  rideId: string;
}

export namespace DriverRejectRideParams {
  export function fromObject(obj: any): DriverRejectRideParams {
    return {
      ...obj,
    }
  }
}

export interface DriverRejectRideResult {
}

export namespace DriverRejectRideResult {
  export function fromObject(obj: any): DriverRejectRideResult {
    return {
      ...obj,
    }
  }
}
