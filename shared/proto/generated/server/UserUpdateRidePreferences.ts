/* eslint-disable */
import { RideDTO } from '../ride';


export interface UserUpdateRidePreferencesParams {
  rideId: string;
  userRidePreferenceTags: RideDTO.UserRidePreferenceTag[];
}

export namespace UserUpdateRidePreferencesParams {
  export function fromObject(obj: any): UserUpdateRidePreferencesParams {
    return {
      ...obj,
      userRidePreferenceTags: obj.userRidePreferenceTags.map((v: any) => RideDTO.UserRidePreferenceTag_fromString(v)),
    }
  }
}

export interface UserUpdateRidePreferencesResult {
}

export namespace UserUpdateRidePreferencesResult {
  export function fromObject(obj: any): UserUpdateRidePreferencesResult {
    return {
      ...obj,
    }
  }
}
