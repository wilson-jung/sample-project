import { Location, AddressedLocation } from '../common';
import { BoolValue } from '../wrappers';
export interface UserGetAddressParams {
    location?: Location;
    usePoiName?: BoolValue;
}
export declare namespace UserGetAddressParams {
    function fromObject(obj: any): UserGetAddressParams;
}
export interface UserGetAddressResult {
    location?: AddressedLocation;
}
export declare namespace UserGetAddressResult {
    function fromObject(obj: any): UserGetAddressResult;
}
