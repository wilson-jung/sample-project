/* eslint-disable */
import { RideDTO } from '../ride';


export interface UserUpdatePaymentProfileOfRideParams {
  /**
   *  payment profile을 변경하고 싶은 Ride의 id.
   */
  rideId: string;
  /**
   *  변경할 payment profile의 id.
   */
  paymentProfileId: string;
}

export namespace UserUpdatePaymentProfileOfRideParams {
  export function fromObject(obj: any): UserUpdatePaymentProfileOfRideParams {
    return {
      ...obj,
    }
  }
}

export interface UserUpdatePaymentProfileOfRideResult {
  /**
   *  변경된 ride를 내려준다.
   */
  ride?: RideDTO;
}

export namespace UserUpdatePaymentProfileOfRideResult {
  export function fromObject(obj: any): UserUpdatePaymentProfileOfRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
