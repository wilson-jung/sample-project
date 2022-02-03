import { TripReceiptPrefilledEntry, TripDTO } from '../trip';
export interface DriverUpdateTripReceiptPrefilledEntriesParams {
    tripId: string;
    receiptPrefilledEntries: TripReceiptPrefilledEntry[];
}
export declare namespace DriverUpdateTripReceiptPrefilledEntriesParams {
    function fromObject(obj: any): DriverUpdateTripReceiptPrefilledEntriesParams;
}
export interface DriverUpdateTripReceiptPrefilledEntriesResult {
    trip?: TripDTO;
}
export declare namespace DriverUpdateTripReceiptPrefilledEntriesResult {
    function fromObject(obj: any): DriverUpdateTripReceiptPrefilledEntriesResult;
}
