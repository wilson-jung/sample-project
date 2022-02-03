import { RideDTO } from '../ride';
import { BoolValue } from '../wrappers';
export interface UserGetRideParams {
    rideId: string;
}
export declare namespace UserGetRideParams {
    function fromObject(obj: any): UserGetRideParams;
}
export interface UserGetRideResult {
    ride?: RideDTO;
    /**
     *  유저 탑승 상세내역에서 드라이버에게 전화하는 버튼을 그려줄지 여부(분실물 찾기)
     */
    showCallDriverButton?: BoolValue;
}
export declare namespace UserGetRideResult {
    function fromObject(obj: any): UserGetRideResult;
}
