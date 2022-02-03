/* eslint-disable */
import { StringValue, BoolValue } from '../wrappers';
import { RideDTO } from '../ride';


export interface UserUpdateDiscountOptionsOfRideParams {
  rideId: string;
  couponId?: StringValue;
  usesCredit?: BoolValue;
}

export namespace UserUpdateDiscountOptionsOfRideParams {
  export function fromObject(obj: any): UserUpdateDiscountOptionsOfRideParams {
    return {
      ...obj,
      couponId: obj.couponId != null ? StringValue.fromObject(obj.couponId) : undefined,
      usesCredit: obj.usesCredit != null ? BoolValue.fromObject(obj.usesCredit) : undefined,
    }
  }
}

export interface UserUpdateDiscountOptionsOfRideResult {
  ride?: RideDTO;
}

export namespace UserUpdateDiscountOptionsOfRideResult {
  export function fromObject(obj: any): UserUpdateDiscountOptionsOfRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
