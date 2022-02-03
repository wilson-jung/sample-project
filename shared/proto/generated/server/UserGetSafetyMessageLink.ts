/* eslint-disable */
import { ShareChannel, ShareChannel_fromString } from '../common';


export interface UserGetSafetyMessageLinkParams {
  rideId: string;
  shareChannel?: ShareChannel;
}

export namespace UserGetSafetyMessageLinkParams {
  export function fromObject(obj: any): UserGetSafetyMessageLinkParams {
    return {
      ...obj,
      shareChannel: ShareChannel_fromString(obj.shareChannel),
    }
  }
}

export interface UserGetSafetyMessageLinkResult {
  link: string;
}

export namespace UserGetSafetyMessageLinkResult {
  export function fromObject(obj: any): UserGetSafetyMessageLinkResult {
    return {
      ...obj,
    }
  }
}
