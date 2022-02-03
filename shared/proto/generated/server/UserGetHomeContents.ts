/* eslint-disable */
import { Image } from '../common';
import { StringValue } from '../wrappers';


export interface UserGetHomeContentsParams {
}

export namespace UserGetHomeContentsParams {
  export function fromObject(obj: any): UserGetHomeContentsParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetHomeContentsResult {
  mainBanners: UserGetHomeContentsResult.MainBanner[];
  hiddenBanners: UserGetHomeContentsResult.HiddenBanner[];
  /**
   *  탑승 예정인 호출예약 개수
   */
  rideReservationCount: number;
}

export namespace UserGetHomeContentsResult {
  export function fromObject(obj: any): UserGetHomeContentsResult {
    return {
      ...obj,
      mainBanners: obj.mainBanners.map((v: any) => UserGetHomeContentsResult.MainBanner.fromObject(v)),
      hiddenBanners: obj.hiddenBanners.map((v: any) => UserGetHomeContentsResult.HiddenBanner.fromObject(v)),
    }
  }

  export interface MainBanner {
    url: string;
    image?: Image;
    logKey?: StringValue;
    weight: number;
  }

  export namespace MainBanner {
    export function fromObject(obj: any): MainBanner {
      return {
        ...obj,
        image: obj.image != null ? Image.fromObject(obj.image) : undefined,
        logKey: obj.logKey != null ? StringValue.fromObject(obj.logKey) : undefined,
      }
    }
  }

  export interface HiddenBanner {
    url: string;
    title: string;
    message: string;
    image?: Image;
    logKey?: StringValue;
  }

  export namespace HiddenBanner {
    export function fromObject(obj: any): HiddenBanner {
      return {
        ...obj,
        image: obj.image != null ? Image.fromObject(obj.image) : undefined,
        logKey: obj.logKey != null ? StringValue.fromObject(obj.logKey) : undefined,
      }
    }
  }
}
