import { Location, Image } from '../common';
import { Int32Value, StringValue } from '../wrappers';
export interface UserGetRideCatalogueParams {
    /**
     *  UserListRideEstimations.proto안에서 Estimation, RideType의 value를 사용합니다.
     *  LITE, PREMIUM, NEAR_TAXI(가까운 타다), RIDE_RESERVATION (호출예약) 등의 값이 올 수 있다.
     */
    rideType: string;
    location?: Location;
    callFee?: Int32Value;
}
export declare namespace UserGetRideCatalogueParams {
    function fromObject(obj: any): UserGetRideCatalogueParams;
}
export interface UserGetRideCatalogueResult {
    rideType: string;
    image?: Image;
    name: string;
    description: string;
    lines: UserGetRideCatalogueResult.LineItem[];
    banner?: UserGetRideCatalogueResult.Banner;
}
export declare namespace UserGetRideCatalogueResult {
    function fromObject(obj: any): UserGetRideCatalogueResult;
    interface LineItem {
        title: string;
        content: string;
        detail?: StringValue;
    }
    namespace LineItem {
        function fromObject(obj: any): LineItem;
    }
    interface Banner {
        url: string;
        image?: Image;
        logKey: string;
    }
    namespace Banner {
        function fromObject(obj: any): Banner;
    }
}
