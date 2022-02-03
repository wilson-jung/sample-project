import { Timestamp } from '../timestamp';
import { AddressedLocation } from '../common';
import { StringValue } from '../wrappers';
import { RideReservationDTO } from '../ride_reservation';
export interface UserReserveRideParams {
    rideType: string;
    expectedPickUpAt: Timestamp[];
    origin?: AddressedLocation;
    destination?: AddressedLocation;
    paymentMethodId: string;
    paymentProfileId: string;
    estimationToken: string;
    bizReason?: StringValue;
    estimationUuid?: StringValue;
}
export declare namespace UserReserveRideParams {
    function fromObject(obj: any): UserReserveRideParams;
}
export interface UserReserveRideResult {
    rideReservation: RideReservationDTO[];
}
export declare namespace UserReserveRideResult {
    function fromObject(obj: any): UserReserveRideResult;
}
