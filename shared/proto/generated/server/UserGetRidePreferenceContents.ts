/* eslint-disable */
import { RideDTO } from '../ride';


export interface UserGetRidePreferenceContentsParams {
  rideId: string;
}

export namespace UserGetRidePreferenceContentsParams {
  export function fromObject(obj: any): UserGetRidePreferenceContentsParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetRidePreferenceContentsResult {
  ridePreferenceContents?: UserGetRidePreferenceContentsResult.RidePreferenceContents;
}

export namespace UserGetRidePreferenceContentsResult {
  export function fromObject(obj: any): UserGetRidePreferenceContentsResult {
    return {
      ...obj,
      ridePreferenceContents: obj.ridePreferenceContents != null ? UserGetRidePreferenceContentsResult.RidePreferenceContents.fromObject(obj.ridePreferenceContents) : undefined,
    }
  }

  export interface RidePreferenceContents {
    ridePreferenceSections: UserGetRidePreferenceContentsResult.RidePreferenceContents.RidePreferenceSection[];
  }

  export namespace RidePreferenceContents {
    export function fromObject(obj: any): RidePreferenceContents {
      return {
        ...obj,
        ridePreferenceSections: obj.ridePreferenceSections.map((v: any) => UserGetRidePreferenceContentsResult.RidePreferenceContents.RidePreferenceSection.fromObject(v)),
      }
    }

    export interface RidePreferenceSection {
      displayName: string;
      ridePreferences: RideDTO.UserRidePreference[];
    }

    export namespace RidePreferenceSection {
      export function fromObject(obj: any): RidePreferenceSection {
        return {
          ...obj,
          ridePreferences: obj.ridePreferences.map((v: any) => RideDTO.UserRidePreference.fromObject(v)),
        }
      }
    }
  }
}
