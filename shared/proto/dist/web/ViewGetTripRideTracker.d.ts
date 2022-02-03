import { TripDTO } from '../trip';
import { Timestamp } from '../timestamp';
import { VehicleLocation, AddressedLocation } from '../common';
export interface ViewGetTripRideTrackerParams {
    encryptedTripId: string;
}
export declare namespace ViewGetTripRideTrackerParams {
    function fromObject(obj: any): ViewGetTripRideTrackerParams;
}
export interface ViewGetTripRideTrackerResult {
    riderName: string;
    rideStatus?: TripDTO.TripRideStatus;
    lastUpdatedAt?: Timestamp;
    vehicleModel: string;
    vehicleLicensePlate: string;
    vehicleLocation?: VehicleLocation;
    pickedUpAt?: Timestamp;
    origin?: AddressedLocation;
    waypoints: AddressedLocation[];
    destination?: AddressedLocation;
}
export declare namespace ViewGetTripRideTrackerResult {
    function fromObject(obj: any): ViewGetTripRideTrackerResult;
}
