/* eslint-disable */
import { DriverStatusDTO } from '../common';


export interface DriverStartDispatchingParams {
}

export namespace DriverStartDispatchingParams {
  export function fromObject(obj: any): DriverStartDispatchingParams {
    return {
      ...obj,
    }
  }
}

export interface DriverStartDispatchingResult {
  driverStatus?: DriverStatusDTO;
}

export namespace DriverStartDispatchingResult {
  export function fromObject(obj: any): DriverStartDispatchingResult {
    return {
      ...obj,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
    }
  }
}
