import { RideCancellationReasonType, RideDTO } from '../ride';
export interface UserUpdateRideCancellationReasonParams {
    rideId: string;
    /**
     *  Reason에 대한 타입. 로깅해서 분석을 하는 용도로 사용됩니다.
     */
    reasonType?: RideCancellationReasonType.User.Value;
    /**
     *  ReasonType이 CUSTOM이 아닐때도 각 Type에 맞는 문자열을 담아서 올려줘야합니다.
     */
    reason: string;
}
export declare namespace UserUpdateRideCancellationReasonParams {
    function fromObject(obj: any): UserUpdateRideCancellationReasonParams;
}
export interface UserUpdateRideCancellationReasonResult {
    ride?: RideDTO;
}
export declare namespace UserUpdateRideCancellationReasonResult {
    function fromObject(obj: any): UserUpdateRideCancellationReasonResult;
}
