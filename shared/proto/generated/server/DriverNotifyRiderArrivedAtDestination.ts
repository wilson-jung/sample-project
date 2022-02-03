/* eslint-disable */
import { RideDTO } from '../ride';


export interface DriverNotifyRiderArrivedAtDestinationParams {
  rideId: string;
}

export namespace DriverNotifyRiderArrivedAtDestinationParams {
  export function fromObject(obj: any): DriverNotifyRiderArrivedAtDestinationParams {
    return {
      ...obj,
    }
  }
}

export interface DriverNotifyRiderArrivedAtDestinationResult {
  ride?: RideDTO;
  /**
   *  기계식 미터기일 때는 0이 내려감
   */
  totalPrice: number;
  callFee: number;
}

export namespace DriverNotifyRiderArrivedAtDestinationResult {
  export function fromObject(obj: any): DriverNotifyRiderArrivedAtDestinationResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
