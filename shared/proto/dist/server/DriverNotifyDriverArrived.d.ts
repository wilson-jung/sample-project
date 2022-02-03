import { BoolValue } from '../wrappers';
import { RideDTO } from '../ride';
export interface DriverNotifyDriverArrivedParams {
    rideId: string;
    /**
     *  현재 위치와 라이드 출발지 사이의 거리가 멀거나 출발지 입구점 안내일 때 출발지 도착 알림을 보낼지 여부
     *  먼저 false로 해서 요청해본 후, CONFIRM_REQUIRED 에러 발생시 유저에게 확인을 받고 true로 올린다.
     *  하위 호환을 위해 null이면 true와 같다.
     */
    confirmed?: BoolValue;
}
export declare namespace DriverNotifyDriverArrivedParams {
    function fromObject(obj: any): DriverNotifyDriverArrivedParams;
}
export interface DriverNotifyDriverArrivedResult {
    ride?: RideDTO;
    /**
     *  첫 탑승 이벤트를 위해 사용. 값이 null이 아니고 true인 경우에만 첫 탐승 웰컴 키트 알럿을 띄우면 된다.
     *  나중에 첫탑승 이벤트가 종료되면 없어질 수 있는 필드이므로 BoolValue로 내려준다.
     */
    isUserFirstRide?: BoolValue;
    /**
     *  드라이버에게 공지할 정보들
     */
    notice?: DriverNotifyDriverArrivedResult.Notice;
}
export declare namespace DriverNotifyDriverArrivedResult {
    function fromObject(obj: any): DriverNotifyDriverArrivedResult;
    interface Notice {
        imageUrl: string;
        title: string;
        body: string;
    }
    namespace Notice {
        function fromObject(obj: any): Notice;
    }
}
