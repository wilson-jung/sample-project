import { StringValue, Int32Value } from '../wrappers';
import { RideDTO } from '../ride';
export interface UserListRidesParams {
    nextToken?: StringValue;
    limit?: Int32Value;
}
export declare namespace UserListRidesParams {
    function fromObject(obj: any): UserListRidesParams;
}
export interface UserListRidesResult {
    rides: RideDTO[];
    nextToken?: StringValue;
}
export declare namespace UserListRidesResult {
    function fromObject(obj: any): UserListRidesResult;
}
