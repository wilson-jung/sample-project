/* eslint-disable */
import { DriverStatusDTO } from '../common';


export interface DriverStopWorkingParams {
}

export namespace DriverStopWorkingParams {
  export function fromObject(obj: any): DriverStopWorkingParams {
    return {
      ...obj,
    }
  }
}

export interface DriverStopWorkingResult {
  driverStatus?: DriverStatusDTO;
}

export namespace DriverStopWorkingResult {
  export function fromObject(obj: any): DriverStopWorkingResult {
    return {
      ...obj,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
    }
  }
}
