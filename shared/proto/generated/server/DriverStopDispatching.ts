/* eslint-disable */
import { DriverStatusDTO } from '../common';


export interface DriverStopDispatchingParams {
}

export namespace DriverStopDispatchingParams {
  export function fromObject(obj: any): DriverStopDispatchingParams {
    return {
      ...obj,
    }
  }
}

export interface DriverStopDispatchingResult {
  driverStatus?: DriverStatusDTO;
}

export namespace DriverStopDispatchingResult {
  export function fromObject(obj: any): DriverStopDispatchingResult {
    return {
      ...obj,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
    }
  }
}
