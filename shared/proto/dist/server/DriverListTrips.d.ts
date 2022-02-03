import { StringValue, Int32Value } from '../wrappers';
import { TripDTO } from '../trip';
export interface DriverListTripsParams {
    nextToken?: StringValue;
    limit?: Int32Value;
}
export declare namespace DriverListTripsParams {
    function fromObject(obj: any): DriverListTripsParams;
}
export interface DriverListTripsResult {
    trips: TripDTO[];
    nextToken?: StringValue;
}
export declare namespace DriverListTripsResult {
    function fromObject(obj: any): DriverListTripsResult;
}
