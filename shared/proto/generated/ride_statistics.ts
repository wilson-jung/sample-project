/* eslint-disable */
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

export namespace RideStatisticsDetailDTO {
  export function fromObject(obj: any): RideStatisticsDetailDTO {
    return {
      ...obj,
      type: RideStatisticsDetailDTO.RideStatisticsDetailEntryType_fromString(obj.type),
      ride: obj.ride != null ? DriverCompactRideDTO.fromObject(obj.ride) : undefined,
      rideDispatch: obj.rideDispatch != null ? RideStatisticsDetailDTO.CompactRideDispatchDTO.fromObject(obj.rideDispatch) : undefined,
      rideReservation: obj.rideReservation != null ? DriverCompactRideReservationDTO.fromObject(obj.rideReservation) : undefined,
    }
  }

  export type RideStatisticsDetailEntryType = 'RIDE' | 'RIDE_DISPATCH' | 'RIDE_RESERVATION';

  export function RideStatisticsDetailEntryType_fromString(str: string): RideStatisticsDetailEntryType | undefined {
    switch (str) {
      case "RIDE":
      case "RIDE_DISPATCH":
      case "RIDE_RESERVATION":
      return str
      default: return undefined
    }
  }

  export interface CompactRideDispatchDTO {
    id: string;
    createdAt?: Timestamp;
  }

  export namespace CompactRideDispatchDTO {
    export function fromObject(obj: any): CompactRideDispatchDTO {
      return {
        ...obj,
        createdAt: obj.createdAt != null ? Timestamp.fromObject(obj.createdAt) : undefined,
      }
    }
  }
}
