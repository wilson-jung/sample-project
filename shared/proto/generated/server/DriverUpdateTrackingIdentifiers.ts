/* eslint-disable */
import { TrackingIdentifiers } from '../common';


export interface DriverUpdateTrackingIdentifiersParams {
  trackingIdentifiers?: TrackingIdentifiers;
}

export namespace DriverUpdateTrackingIdentifiersParams {
  export function fromObject(obj: any): DriverUpdateTrackingIdentifiersParams {
    return {
      ...obj,
      trackingIdentifiers: obj.trackingIdentifiers != null ? TrackingIdentifiers.fromObject(obj.trackingIdentifiers) : undefined,
    }
  }
}

export interface DriverUpdateTrackingIdentifiersResult {
}

export namespace DriverUpdateTrackingIdentifiersResult {
  export function fromObject(obj: any): DriverUpdateTrackingIdentifiersResult {
    return {
      ...obj,
    }
  }
}
