/* eslint-disable */
import { DriverStatusDTO } from '../common';


export interface DriverStopTripReturningParams {
}

export namespace DriverStopTripReturningParams {
  export function fromObject(obj: any): DriverStopTripReturningParams {
    return {
      ...obj,
    }
  }
}

export interface DriverStopTripReturningResult {
  driverStatus?: DriverStatusDTO;
}

export namespace DriverStopTripReturningResult {
  export function fromObject(obj: any): DriverStopTripReturningResult {
    return {
      ...obj,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
    }
  }
}
