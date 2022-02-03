/* eslint-disable */

export interface UserPrepareCancelRideReservationParams {
  rideReservationId: string;
}

export namespace UserPrepareCancelRideReservationParams {
  export function fromObject(obj: any): UserPrepareCancelRideReservationParams {
    return {
      ...obj,
    }
  }
}

export interface UserPrepareCancelRideReservationResult {
  cancelRideReservationToken: string;
  popupTitle: string;
  popupBody: string;
  popupActionButtonText: string;
}

export namespace UserPrepareCancelRideReservationResult {
  export function fromObject(obj: any): UserPrepareCancelRideReservationResult {
    return {
      ...obj,
    }
  }
}
