/* eslint-disable */
import { DriverSocarStatusDTO } from '../common';


export interface DriverGetDriverSocarStatusParams {
}

export namespace DriverGetDriverSocarStatusParams {
  export function fromObject(obj: any): DriverGetDriverSocarStatusParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetDriverSocarStatusResult {
  driverSocarStatus?: DriverSocarStatusDTO;
}

export namespace DriverGetDriverSocarStatusResult {
  export function fromObject(obj: any): DriverGetDriverSocarStatusResult {
    return {
      ...obj,
      driverSocarStatus: obj.driverSocarStatus != null ? DriverSocarStatusDTO.fromObject(obj.driverSocarStatus) : undefined,
    }
  }
}
