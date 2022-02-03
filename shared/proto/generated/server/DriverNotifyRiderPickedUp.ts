/* eslint-disable */
import { RideDTO } from '../ride';


export interface DriverNotifyRiderPickedUpParams {
  rideId: string;
}

export namespace DriverNotifyRiderPickedUpParams {
  export function fromObject(obj: any): DriverNotifyRiderPickedUpParams {
    return {
      ...obj,
    }
  }
}

export interface DriverNotifyRiderPickedUpResult {
  ride?: RideDTO;
}

export namespace DriverNotifyRiderPickedUpResult {
  export function fromObject(obj: any): DriverNotifyRiderPickedUpResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
