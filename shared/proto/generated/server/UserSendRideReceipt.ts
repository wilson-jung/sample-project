/* eslint-disable */

export interface UserSendRideReceiptParams {
  rideId: string;
}

export namespace UserSendRideReceiptParams {
  export function fromObject(obj: any): UserSendRideReceiptParams {
    return {
      ...obj,
    }
  }
}

export interface UserSendRideReceiptResult {
}

export namespace UserSendRideReceiptResult {
  export function fromObject(obj: any): UserSendRideReceiptResult {
    return {
      ...obj,
    }
  }
}
