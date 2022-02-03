/* eslint-disable */
import { RideDTO } from '../ride';


export interface UserGetLatestRideParams {
}

export namespace UserGetLatestRideParams {
  export function fromObject(obj: any): UserGetLatestRideParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetLatestRideResult {
  ride?: RideDTO;
}

export namespace UserGetLatestRideResult {
  export function fromObject(obj: any): UserGetLatestRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
