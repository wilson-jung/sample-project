/* eslint-disable */
import { DriverStatusDTO } from '../common';


export interface DriverUpdateIdentityCertificationParams {
  identityCertificationToken: string;
}

export namespace DriverUpdateIdentityCertificationParams {
  export function fromObject(obj: any): DriverUpdateIdentityCertificationParams {
    return {
      ...obj,
    }
  }
}

export interface DriverUpdateIdentityCertificationResult {
  driverStatus?: DriverStatusDTO;
}

export namespace DriverUpdateIdentityCertificationResult {
  export function fromObject(obj: any): DriverUpdateIdentityCertificationResult {
    return {
      ...obj,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
    }
  }
}
