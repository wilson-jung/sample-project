/* eslint-disable */
import { TripReceiptPrefilledEntry, TripDTO } from '../trip';


export interface DriverUpdateTripReceiptPrefilledEntriesParams {
  tripId: string;
  receiptPrefilledEntries: TripReceiptPrefilledEntry[];
}

export namespace DriverUpdateTripReceiptPrefilledEntriesParams {
  export function fromObject(obj: any): DriverUpdateTripReceiptPrefilledEntriesParams {
    return {
      ...obj,
      receiptPrefilledEntries: obj.receiptPrefilledEntries.map((v: any) => TripReceiptPrefilledEntry.fromObject(v)),
    }
  }
}

export interface DriverUpdateTripReceiptPrefilledEntriesResult {
  trip?: TripDTO;
}

export namespace DriverUpdateTripReceiptPrefilledEntriesResult {
  export function fromObject(obj: any): DriverUpdateTripReceiptPrefilledEntriesResult {
    return {
      ...obj,
      trip: obj.trip != null ? TripDTO.fromObject(obj.trip) : undefined,
    }
  }
}
