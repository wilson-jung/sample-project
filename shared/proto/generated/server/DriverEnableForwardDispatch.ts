/* eslint-disable */
import { DriverStatusDTO } from '../common';


export interface DriverEnableForwardDispatchParams {
}

export namespace DriverEnableForwardDispatchParams {
  export function fromObject(obj: any): DriverEnableForwardDispatchParams {
    return {
      ...obj,
    }
  }
}

export interface DriverEnableForwardDispatchResult {
  driverStatus?: DriverStatusDTO;
}

export namespace DriverEnableForwardDispatchResult {
  export function fromObject(obj: any): DriverEnableForwardDispatchResult {
    return {
      ...obj,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
    }
  }
}
