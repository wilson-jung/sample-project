import { Location } from '../common';
import { Timestamp } from '../timestamp';
export interface DriverGetCurrentLocationParams {
}
export declare namespace DriverGetCurrentLocationParams {
    function fromObject(obj: any): DriverGetCurrentLocationParams;
}
export interface DriverGetCurrentLocationResult {
    /**
     *  서버가 인지하고 있는 드라이버의 위치
     *  예외: 첫 출근 직후에는 일시적으로 null일 수 있다.
     */
    currentLocation?: Location;
    /**
     *  current_location에 해당하는 주소.
     *  "[시군구] [읍면동]"의 형태로 내려간다.
     *  예외: 첫 출근 직후에는 일시적으로 empty string일 수 있다.
     */
    address: string;
    /**
     *  드라이버의 위치가 마지막으로 업데이트 된 시각
     *  예외: 첫 출근 직후에는 일시적으로 null일 수 있다.
     */
    lastUpdatedAt?: Timestamp;
}
export declare namespace DriverGetCurrentLocationResult {
    function fromObject(obj: any): DriverGetCurrentLocationResult;
}
