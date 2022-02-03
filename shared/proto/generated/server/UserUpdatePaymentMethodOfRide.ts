/* eslint-disable */
import { RideDTO } from '../ride';


export interface UserUpdatePaymentMethodOfRideParams {
  /**
   *  payment method를 변경하고 싶은 Ride의 id.
   */
  rideId: string;
  /**
   *  변경할 payment method의 id.
   */
  paymentMethodId: string;
}

export namespace UserUpdatePaymentMethodOfRideParams {
  export function fromObject(obj: any): UserUpdatePaymentMethodOfRideParams {
    return {
      ...obj,
    }
  }
}

export interface UserUpdatePaymentMethodOfRideResult {
  /**
   *  변경된 ride를 내려준다.
   */
  ride?: RideDTO;
}

export namespace UserUpdatePaymentMethodOfRideResult {
  export function fromObject(obj: any): UserUpdatePaymentMethodOfRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
