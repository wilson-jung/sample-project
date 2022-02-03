/* eslint-disable */
import { AddressedLocation } from '../common';
import { StringValue } from '../wrappers';


export interface RideReservationBookingParam {
  origin?: AddressedLocation;
  destination?: AddressedLocation;
  paymentProfileId: string;
  paymentMethodId: string;
  bizReason?: StringValue;
  estimationUuid?: StringValue;
}

export namespace RideReservationBookingParam {
  export function fromObject(obj: any): RideReservationBookingParam {
    return {
      ...obj,
      origin: obj.origin != null ? AddressedLocation.fromObject(obj.origin) : undefined,
      destination: obj.destination != null ? AddressedLocation.fromObject(obj.destination) : undefined,
      bizReason: obj.bizReason != null ? StringValue.fromObject(obj.bizReason) : undefined,
      estimationUuid: obj.estimationUuid != null ? StringValue.fromObject(obj.estimationUuid) : undefined,
    }
  }
}
