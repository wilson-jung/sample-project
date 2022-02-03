import { RideCancellationReasonType, RideDTO } from '../ride';
import { BoolValue } from '../wrappers';
export interface DriverCancelRideParams {
    rideId: string;
    /**
     *  Reason에 대한 타입. 로깅해서 분석을 하는 용도로 사용됩니다.
     */
    reasonType?: RideCancellationReasonType.Driver.Value;
    /**
     *  ReasonType이 CUSTOM이 아닐때도 각 Type에 맞는 문자열을 담아서 올려줘야합니다.
     */
    reason: string;
    /**
     *  라이드를 취소할 때 확인이 필요한 경우 확인했다는 표시.
     */
    confirmed?: BoolValue;
}
export declare namespace DriverCancelRideParams {
    function fromObject(obj: any): DriverCancelRideParams;
}
export interface DriverCancelRideResult {
    ride?: RideDTO;
}
export declare namespace DriverCancelRideResult {
    function fromObject(obj: any): DriverCancelRideResult;
}
