/* eslint-disable */
import { DriverStatusDTO } from '../common';


export interface DriverRejectForwardRideParams {
  rideId: string;
}

export namespace DriverRejectForwardRideParams {
  export function fromObject(obj: any): DriverRejectForwardRideParams {
    return {
      ...obj,
    }
  }
}

export interface DriverRejectForwardRideResult {
  driverStatus?: DriverStatusDTO;
}

export namespace DriverRejectForwardRideResult {
  export function fromObject(obj: any): DriverRejectForwardRideResult {
    return {
      ...obj,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
    }
  }
}
