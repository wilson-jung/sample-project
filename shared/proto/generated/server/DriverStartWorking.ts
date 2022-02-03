/* eslint-disable */
import { DriverStatusDTO } from '../common';


export interface DriverStartWorkingParams {
  feedbackConfirmed: boolean;
}

export namespace DriverStartWorkingParams {
  export function fromObject(obj: any): DriverStartWorkingParams {
    return {
      ...obj,
    }
  }
}

export interface DriverStartWorkingResult {
  driverStatus?: DriverStatusDTO;
}

export namespace DriverStartWorkingResult {
  export function fromObject(obj: any): DriverStartWorkingResult {
    return {
      ...obj,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
    }
  }
}
