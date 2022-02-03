import { Image } from '../common';
import { StringValue } from '../wrappers';
export interface DriverListGigHomeViewBannersParams {
}
export declare namespace DriverListGigHomeViewBannersParams {
    function fromObject(obj: any): DriverListGigHomeViewBannersParams;
}
export interface DriverListGigHomeViewBannersResult {
    banners: DriverListGigHomeViewBannersResult.Banner[];
}
export declare namespace DriverListGigHomeViewBannersResult {
    function fromObject(obj: any): DriverListGigHomeViewBannersResult;
    interface Banner {
        url: string;
        image?: Image;
        logKey?: StringValue;
    }
    namespace Banner {
        function fromObject(obj: any): Banner;
    }
}
