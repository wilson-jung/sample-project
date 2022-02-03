import { BoolValue } from '../wrappers';
import { TripDTO } from '../trip';
export interface DriverNotifyTripDriverArrivedParams {
    tripId: string;
    /**
     *  현재 위치와 라이드 출발지 사이의 거리가 멀어도 픽업지 도착 알림을 보낼지 여부
     *  먼저 false로 해서 요청해본 후, CONFIRM_REQUIRED 에러 발생시 유저에게 확인을 받고 true로 올린다.
     *  하위 호환을 위해 null이면 true와 같다.
     */
    confirmed?: BoolValue;
}
export declare namespace DriverNotifyTripDriverArrivedParams {
    function fromObject(obj: any): DriverNotifyTripDriverArrivedParams;
}
export interface DriverNotifyTripDriverArrivedResult {
    trip?: TripDTO;
    /**
     *  드라이버에게 공지할 정보들
     */
    notice?: DriverNotifyTripDriverArrivedResult.Notice;
}
export declare namespace DriverNotifyTripDriverArrivedResult {
    function fromObject(obj: any): DriverNotifyTripDriverArrivedResult;
    interface Notice {
        imageUrl: string;
        title: string;
        body: string;
    }
    namespace Notice {
        function fromObject(obj: any): Notice;
    }
}
