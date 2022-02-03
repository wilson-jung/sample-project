/* eslint-disable */
import { DriverStatusDTO } from '../common';


export interface DriverStartTripReturningParams {
}

export namespace DriverStartTripReturningParams {
  export function fromObject(obj: any): DriverStartTripReturningParams {
    return {
      ...obj,
    }
  }
}

export interface DriverStartTripReturningResult {
  driverStatus?: DriverStatusDTO;
}

export namespace DriverStartTripReturningResult {
  export function fromObject(obj: any): DriverStartTripReturningResult {
    return {
      ...obj,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
    }
  }
}
