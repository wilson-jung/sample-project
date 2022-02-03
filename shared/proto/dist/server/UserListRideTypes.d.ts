import { AddressedLocation } from '../common';
export interface UserListRideTypesParams {
    origin?: AddressedLocation;
    destination?: AddressedLocation;
}
export declare namespace UserListRideTypesParams {
    function fromObject(obj: any): UserListRideTypesParams;
}
export interface UserListRideTypesResult {
    /**
     *  클라이언트가 모르는 RideType이 들어온 경우 무시하는 등의 처리가 필요하다.
     */
    rideTypes: UserListRideTypesResult.Entry[];
}
export declare namespace UserListRideTypesResult {
    function fromObject(obj: any): UserListRideTypesResult;
    interface Entry {
        /**
         *  라이드 타입. 앞으로 BASIC, ASSIST, BLACK 등의 값이 올 수 있다.
         */
        value: string;
        /**
         *  화면에 보여줄 사람이 알아볼 수 있는 값들
         */
        name: string;
        description: string;
        imageUrl: string;
        /**
         *  현재 이용 가능한지 여부
         *  아직 오픈은 안했지만 유저에게 보여주기는 하지만 DIM처리하고 싶을때 사용한다.
         *  실제 호출해도 호출에 실패하고 적절한 에러가 내려간다.
         */
        isActive: boolean;
    }
    namespace Entry {
        function fromObject(obj: any): Entry;
    }
}
