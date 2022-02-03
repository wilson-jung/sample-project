import { DriverCompactRideDTO } from './ride';
import { DriverCompactRideReservationDTO } from './ride_reservation';
import { Timestamp } from './timestamp';
export interface RideStatisticsDetailDTO {
    type?: RideStatisticsDetailDTO.RideStatisticsDetailEntryType;
    /**
     * OneOf-entry
     *  1. 호출예약이 아닌 Ride 중 최소 accept 한 것 (ACCEPTED 이후 취소 / 하차 완료)
     *  2. 호출예약 수행 시작을 해서 생긴 Ride (취소 / 하차 완료)
     */
    ride?: DriverCompactRideDTO;
    /**
     * OneOf-entry
     *  수락하지 않고 취소된 RideDispatch
     */
    rideDispatch?: RideStatisticsDetailDTO.CompactRideDispatchDTO;
    /**
     * OneOf-entry
     *  Ride 없이 취소된 호출예약 건
     */
    rideReservation?: DriverCompactRideReservationDTO;
}
export declare namespace RideStatisticsDetailDTO {
    function fromObject(obj: any): RideStatisticsDetailDTO;
    type RideStatisticsDetailEntryType = 'RIDE' | 'RIDE_DISPATCH' | 'RIDE_RESERVATION';
    function RideStatisticsDetailEntryType_fromString(str: string): RideStatisticsDetailEntryType | undefined;
    interface CompactRideDispatchDTO {
        id: string;
        createdAt?: Timestamp;
    }
    namespace CompactRideDispatchDTO {
        function fromObject(obj: any): CompactRideDispatchDTO;
    }
}
