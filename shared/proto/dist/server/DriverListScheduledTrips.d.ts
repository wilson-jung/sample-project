import { StringValue, Int32Value } from '../wrappers';
import { TripDTO } from '../trip';
export interface DriverListScheduledTripsParams {
    nextToken?: StringValue;
    limit?: Int32Value;
}
export declare namespace DriverListScheduledTripsParams {
    function fromObject(obj: any): DriverListScheduledTripsParams;
}
export interface DriverListScheduledTripsResult {
    trips: TripDTO[];
    nextToken?: StringValue;
}
export declare namespace DriverListScheduledTripsResult {
    function fromObject(obj: any): DriverListScheduledTripsResult;
}
