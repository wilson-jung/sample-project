/* eslint-disable */
import { StringValue } from '../wrappers';
import { RideDTO } from '../ride';


export interface UserCancelRideParams {
  rideId: string;
  /**
   *  일반적인 경우 CancelRideToken이며,
   *  호출예약으로 생성된 Ride의 경우 cancelRideReservationToken이다.
   */
  cancelRideToken?: StringValue;
}

export namespace UserCancelRideParams {
  export function fromObject(obj: any): UserCancelRideParams {
    return {
      ...obj,
      cancelRideToken: obj.cancelRideToken != null ? StringValue.fromObject(obj.cancelRideToken) : undefined,
    }
  }
}

export interface UserCancelRideResult {
  ride?: RideDTO;
  popupTitle?: StringValue;
  popupBody?: StringValue;
}

export namespace UserCancelRideResult {
  export function fromObject(obj: any): UserCancelRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
      popupTitle: obj.popupTitle != null ? StringValue.fromObject(obj.popupTitle) : undefined,
      popupBody: obj.popupBody != null ? StringValue.fromObject(obj.popupBody) : undefined,
    }
  }
}
