import { RideDTO } from '../ride';
export interface UserGetRidePreferenceContentsParams {
    rideId: string;
}
export declare namespace UserGetRidePreferenceContentsParams {
    function fromObject(obj: any): UserGetRidePreferenceContentsParams;
}
export interface UserGetRidePreferenceContentsResult {
    ridePreferenceContents?: UserGetRidePreferenceContentsResult.RidePreferenceContents;
}
export declare namespace UserGetRidePreferenceContentsResult {
    function fromObject(obj: any): UserGetRidePreferenceContentsResult;
    interface RidePreferenceContents {
        ridePreferenceSections: UserGetRidePreferenceContentsResult.RidePreferenceContents.RidePreferenceSection[];
    }
    namespace RidePreferenceContents {
        function fromObject(obj: any): RidePreferenceContents;
        interface RidePreferenceSection {
            displayName: string;
            ridePreferences: RideDTO.UserRidePreference[];
        }
        namespace RidePreferenceSection {
            function fromObject(obj: any): RidePreferenceSection;
        }
    }
}
