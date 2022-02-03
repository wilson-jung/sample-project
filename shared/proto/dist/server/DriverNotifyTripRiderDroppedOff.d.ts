import { BoolValue } from '../wrappers';
import { TripDTO } from '../trip';
export interface DriverNotifyTripRiderDroppedOffParams {
    tripId: string;
    /**
     *  프라이빗의 경우, 현재 시간이 예약 종료 시간보다 너무 이른 경우 운행 완료를 눌렀을 때, 드라이버가 확인했는지의 여부.
     *  먼저 false로 해서 요청해본 후, CONFIRM_REQUIRED 에러 발생시 드라이버에게 확인을 받고 true로 올린다.
     *  하위 호환을 위해 null이면 true와 같다.
     */
    confirmed?: BoolValue;
}
export declare namespace DriverNotifyTripRiderDroppedOffParams {
    function fromObject(obj: any): DriverNotifyTripRiderDroppedOffParams;
}
export interface DriverNotifyTripRiderDroppedOffResult {
    trip?: TripDTO;
}
export declare namespace DriverNotifyTripRiderDroppedOffResult {
    function fromObject(obj: any): DriverNotifyTripRiderDroppedOffResult;
}
