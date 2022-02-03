/* eslint-disable */
import { RideDTO } from '../ride';
import { DriverStatusDTO } from '../common';


export interface DriverAcceptForwardRideParams {
  rideId: string;
}

export namespace DriverAcceptForwardRideParams {
  export function fromObject(obj: any): DriverAcceptForwardRideParams {
    return {
      ...obj,
    }
  }
}

export interface DriverAcceptForwardRideResult {
  ride?: RideDTO;
  driverStatus?: DriverStatusDTO;
}

export namespace DriverAcceptForwardRideResult {
  export function fromObject(obj: any): DriverAcceptForwardRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
    }
  }
}
