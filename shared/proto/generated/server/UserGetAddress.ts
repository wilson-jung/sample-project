/* eslint-disable */
import { Location, AddressedLocation } from '../common';
import { BoolValue } from '../wrappers';


export interface UserGetAddressParams {
  location?: Location;
  usePoiName?: BoolValue;
}

export namespace UserGetAddressParams {
  export function fromObject(obj: any): UserGetAddressParams {
    return {
      ...obj,
      location: obj.location != null ? Location.fromObject(obj.location) : undefined,
      usePoiName: obj.usePoiName != null ? BoolValue.fromObject(obj.usePoiName) : undefined,
    }
  }
}

export interface UserGetAddressResult {
  location?: AddressedLocation;
}

export namespace UserGetAddressResult {
  export function fromObject(obj: any): UserGetAddressResult {
    return {
      ...obj,
      location: obj.location != null ? AddressedLocation.fromObject(obj.location) : undefined,
    }
  }
}
