/* eslint-disable */
import { TrackingIdentifiers } from '../common';


export interface UserUpdateTrackingIdentifiersParams {
  trackingIdentifiers?: TrackingIdentifiers;
}

export namespace UserUpdateTrackingIdentifiersParams {
  export function fromObject(obj: any): UserUpdateTrackingIdentifiersParams {
    return {
      ...obj,
      trackingIdentifiers: obj.trackingIdentifiers != null ? TrackingIdentifiers.fromObject(obj.trackingIdentifiers) : undefined,
    }
  }
}

export interface UserUpdateTrackingIdentifiersResult {
}

export namespace UserUpdateTrackingIdentifiersResult {
  export function fromObject(obj: any): UserUpdateTrackingIdentifiersResult {
    return {
      ...obj,
    }
  }
}
