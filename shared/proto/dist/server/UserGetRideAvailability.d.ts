import { AddressedLocation, RideAvailabilityIssue } from '../common';
import { BoolValue } from '../wrappers';
export interface UserGetRideAvailabilityParams {
    origin?: AddressedLocation;
    destination?: AddressedLocation;
    waypoints: AddressedLocation[];
    /**
     *  대리에 대한 Availability인지의 여부.
     *  대리를 지원하지 않는 버전에서는 null로 올려줄 경우 false로 인식하고, 그 외에는 모든 상품(실시간, 대리)에 대한 Availability가 내려간다.
     */
    isDaeri?: BoolValue;
}
export declare namespace UserGetRideAvailabilityParams {
    function fromObject(obj: any): UserGetRideAvailabilityParams;
}
export interface UserGetRideAvailabilityResult {
    /**
     *  현재 정보로 차량을 호출할 수 있는지 여부
     */
    isAvailable: boolean;
    /**
     *  호출 할 수 없는 경우, 혹은 호출 할 수 있더라도 서비스 품질 관련 이슈가 있는 경우 그 이유에 대해서 내려주는 필드
     */
    issue?: RideAvailabilityIssue;
}
export declare namespace UserGetRideAvailabilityResult {
    function fromObject(obj: any): UserGetRideAvailabilityResult;
}
