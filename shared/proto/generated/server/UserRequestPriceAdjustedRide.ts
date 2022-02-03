/* eslint-disable */
import { RideDTO } from '../ride';


export interface UserRequestPriceAdjustedRideParams {
  rideId: string;
  adjustedPrice: number;
}

export namespace UserRequestPriceAdjustedRideParams {
  export function fromObject(obj: any): UserRequestPriceAdjustedRideParams {
    return {
      ...obj,
    }
  }
}

export interface UserRequestPriceAdjustedRideResult {
  ride?: RideDTO;
}

export namespace UserRequestPriceAdjustedRideResult {
  export function fromObject(obj: any): UserRequestPriceAdjustedRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
