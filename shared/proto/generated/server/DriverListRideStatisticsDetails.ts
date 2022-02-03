/* eslint-disable */
import { StringValue } from '../wrappers';
import { RideStatisticsDetailDTO } from '../ride_statistics';


export interface DriverListRideStatisticsDetailsParams {
  /**
   *  특정 날짜의 ride dispatches 를 조회하고자 하는 경우 YYYY-MM-DD 형태로 넣어준다.
   */
  date?: StringValue;
}

export namespace DriverListRideStatisticsDetailsParams {
  export function fromObject(obj: any): DriverListRideStatisticsDetailsParams {
    return {
      ...obj,
      date: obj.date != null ? StringValue.fromObject(obj.date) : undefined,
    }
  }
}

export interface DriverListRideStatisticsDetailsResult {
  details: RideStatisticsDetailDTO[];
}

export namespace DriverListRideStatisticsDetailsResult {
  export function fromObject(obj: any): DriverListRideStatisticsDetailsResult {
    return {
      ...obj,
      details: obj.details.map((v: any) => RideStatisticsDetailDTO.fromObject(v)),
    }
  }
}
