import { ShareChannel } from '../common';
export interface UserGetSafetyMessageLinkParams {
    rideId: string;
    shareChannel?: ShareChannel;
}
export declare namespace UserGetSafetyMessageLinkParams {
    function fromObject(obj: any): UserGetSafetyMessageLinkParams;
}
export interface UserGetSafetyMessageLinkResult {
    link: string;
}
export declare namespace UserGetSafetyMessageLinkResult {
    function fromObject(obj: any): UserGetSafetyMessageLinkResult;
}
