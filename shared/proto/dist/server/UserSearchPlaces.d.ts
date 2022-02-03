import { Location, AddressedLocation } from '../common';
export interface UserSearchPlacesParams {
    /**
     *  검색하고자 하는 키워드
     */
    keyword: string;
    /**
     *  현재 검색하고자 하는 대상 (출발지, 도착지에 대한 정보)
     */
    hint?: UserSearchPlacesParams.Hint;
}
export declare namespace UserSearchPlacesParams {
    function fromObject(obj: any): UserSearchPlacesParams;
    interface Hint {
        type?: UserSearchPlacesParams.Hint.Type;
        /**
         *  그냥 라이더앱에서 현재 위치를 올려준다.
         *  만약 현재 위치를 알 수 없다면 올려주지 않아도 된다.
         *  서버는 이 정보를 바탕으로 출발지 검색시 근처에 있는 장소 위주로 검색해서 내려준다.
         */
        location?: Location;
    }
    namespace Hint {
        function fromObject(obj: any): Hint;
        type Type = 'UNSPECIFIED' | 'ORIGIN' | 'DESTINATION' | 'WAYPOINT';
        function Type_fromString(str: string): Type | undefined;
    }
}
export interface UserSearchPlacesResult {
    places: UserSearchPlacesResult.Place[];
}
export declare namespace UserSearchPlacesResult {
    function fromObject(obj: any): UserSearchPlacesResult;
    interface Place {
        name: string;
        address: string;
        location?: AddressedLocation;
    }
    namespace Place {
        function fromObject(obj: any): Place;
    }
}
