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
export declare namespace RideReservationBookingParam {
    function fromObject(obj: any): RideReservationBookingParam;
}
