/* eslint-disable */
import { TripDTO } from '../trip';
import { Timestamp } from '../timestamp';
import { VehicleLocation, AddressedLocation } from '../common';


export interface ViewGetTripRideTrackerParams {
  encryptedTripId: string;
}

export namespace ViewGetTripRideTrackerParams {
  export function fromObject(obj: any): ViewGetTripRideTrackerParams {
    return {
      ...obj,
    }
  }
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

export namespace ViewGetTripRideTrackerResult {
  export function fromObject(obj: any): ViewGetTripRideTrackerResult {
    return {
      ...obj,
      rideStatus: TripDTO.TripRideStatus_fromString(obj.rideStatus),
      lastUpdatedAt: obj.lastUpdatedAt != null ? Timestamp.fromObject(obj.lastUpdatedAt) : undefined,
      vehicleLocation: obj.vehicleLocation != null ? VehicleLocation.fromObject(obj.vehicleLocation) : undefined,
      pickedUpAt: obj.pickedUpAt != null ? Timestamp.fromObject(obj.pickedUpAt) : undefined,
      origin: obj.origin != null ? AddressedLocation.fromObject(obj.origin) : undefined,
      waypoints: obj.waypoints.map((v: any) => AddressedLocation.fromObject(v)),
      destination: obj.destination != null ? AddressedLocation.fromObject(obj.destination) : undefined,
    }
  }
}
