import { StringValue } from '../wrappers';
import { Image } from '../common';
export interface UserGetActiveTripCountParams {
}
export declare namespace UserGetActiveTripCountParams {
    function fromObject(obj: any): UserGetActiveTripCountParams;
}
export interface UserGetActiveTripCountResult {
    activeTripCount: number;
    label?: StringValue;
}
export declare namespace UserGetActiveTripCountResult {
    function fromObject(obj: any): UserGetActiveTripCountResult;
    interface Banner {
        icon?: Image;
        title: string;
        description: string;
        deepLink?: StringValue;
    }
    namespace Banner {
        function fromObject(obj: any): Banner;
    }
}
