import { StringValue } from '../wrappers';
import { RideStatisticsDetailDTO } from '../ride_statistics';
export interface DriverListRideStatisticsDetailsParams {
    /**
     *  특정 날짜의 ride dispatches 를 조회하고자 하는 경우 YYYY-MM-DD 형태로 넣어준다.
     */
    date?: StringValue;
}
export declare namespace DriverListRideStatisticsDetailsParams {
    function fromObject(obj: any): DriverListRideStatisticsDetailsParams;
}
export interface DriverListRideStatisticsDetailsResult {
    details: RideStatisticsDetailDTO[];
}
export declare namespace DriverListRideStatisticsDetailsResult {
    function fromObject(obj: any): DriverListRideStatisticsDetailsResult;
}
