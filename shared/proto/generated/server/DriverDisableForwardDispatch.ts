/* eslint-disable */
import { DriverStatusDTO } from '../common';


export interface DriverDisableForwardDispatchParams {
}

export namespace DriverDisableForwardDispatchParams {
  export function fromObject(obj: any): DriverDisableForwardDispatchParams {
    return {
      ...obj,
    }
  }
}

export interface DriverDisableForwardDispatchResult {
  driverStatus?: DriverStatusDTO;
}

export namespace DriverDisableForwardDispatchResult {
  export function fromObject(obj: any): DriverDisableForwardDispatchResult {
    return {
      ...obj,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
    }
  }
}
