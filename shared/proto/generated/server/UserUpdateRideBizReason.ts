/* eslint-disable */
import { RideDTO } from '../ride';


export interface UserUpdateRideBizReasonParams {
  rideId: string;
  bizReason: string;
}

export namespace UserUpdateRideBizReasonParams {
  export function fromObject(obj: any): UserUpdateRideBizReasonParams {
    return {
      ...obj,
    }
  }
}

export interface UserUpdateRideBizReasonResult {
  ride?: RideDTO;
}

export namespace UserUpdateRideBizReasonResult {
  export function fromObject(obj: any): UserUpdateRideBizReasonResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
