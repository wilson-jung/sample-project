import { Image } from '../common';
import { StringValue } from '../wrappers';
export interface UserGetHomeContentsParams {
}
export declare namespace UserGetHomeContentsParams {
    function fromObject(obj: any): UserGetHomeContentsParams;
}
export interface UserGetHomeContentsResult {
    mainBanners: UserGetHomeContentsResult.MainBanner[];
    hiddenBanners: UserGetHomeContentsResult.HiddenBanner[];
    /**
     *  탑승 예정인 호출예약 개수
     */
    rideReservationCount: number;
}
export declare namespace UserGetHomeContentsResult {
    function fromObject(obj: any): UserGetHomeContentsResult;
    interface MainBanner {
        url: string;
        image?: Image;
        logKey?: StringValue;
        weight: number;
    }
    namespace MainBanner {
        function fromObject(obj: any): MainBanner;
    }
    interface HiddenBanner {
        url: string;
        title: string;
        message: string;
        image?: Image;
        logKey?: StringValue;
    }
    namespace HiddenBanner {
        function fromObject(obj: any): HiddenBanner;
    }
}
