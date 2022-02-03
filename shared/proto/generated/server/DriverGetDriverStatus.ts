/* eslint-disable */
import { DriverDTO, DriverStatusDTO, DriverScheduleDTO, VehicleDTO } from '../common';
import { RideDTO } from '../ride';
import { TripDTO } from '../trip';
import { RideReservationDTO } from '../ride_reservation';
import { StringValue } from '../wrappers';


export interface DriverGetDriverStatusParams {
}

export namespace DriverGetDriverStatusParams {
  export function fromObject(obj: any): DriverGetDriverStatusParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetDriverStatusResult {
  driver?: DriverDTO;
  driverStatus?: DriverStatusDTO;
  /**
   *  바뀔 사항 :
   *    - 드라이버에게 할당되거나 나중에 할당될 차량은 driverSchedule.vehicle을 통해 차량을 내려준다.
   *  유의 사항 :
   *    - 아직 할당 예정인 차량이 없을 경우 driverSchedule.vehicle이 null일 수 있음.
   */
  driverSchedule?: DriverScheduleDTO;
  /**
   *  현재 :
   *    1. 드라이버가 이미 운행 중인 차량, 2. 드라이버에게 할당된 차량, 3. 미래에 드라이버에게 할당될 차량을 내려주었다.
   *  바뀔 사항 :
   *    - semantic에서는 드라이버가 이미 운행 중인 차량만 내려줄 예정이다.
   *    - 드라이버에게 할당된 차량이나 나중에 할당될 차량은 driverSchedule.vehicle을 통해 내려주도록 바뀔 것이다.
   *  유의 사항 :
   *    - 출근 전 화면에서는 vehicle을 사용하면 안 됨. (e.g. 출근 전, 퇴근 이후)
   */
  vehicle?: VehicleDTO;
  ride?: RideDTO;
  forwardRide?: RideDTO;
  trip?: TripDTO;
  nearestRideReservation?: RideReservationDTO;
  /**
   *  유의사항 :
   *    - 드라이버가 넥스트가 아닐 경우 null이 내려감
   */
  tadaNextRideReportUrl?: StringValue;
}

export namespace DriverGetDriverStatusResult {
  export function fromObject(obj: any): DriverGetDriverStatusResult {
    return {
      ...obj,
      driver: obj.driver != null ? DriverDTO.fromObject(obj.driver) : undefined,
      driverStatus: obj.driverStatus != null ? DriverStatusDTO.fromObject(obj.driverStatus) : undefined,
      driverSchedule: obj.driverSchedule != null ? DriverScheduleDTO.fromObject(obj.driverSchedule) : undefined,
      vehicle: obj.vehicle != null ? VehicleDTO.fromObject(obj.vehicle) : undefined,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
      forwardRide: obj.forwardRide != null ? RideDTO.fromObject(obj.forwardRide) : undefined,
      trip: obj.trip != null ? TripDTO.fromObject(obj.trip) : undefined,
      nearestRideReservation: obj.nearestRideReservation != null ? RideReservationDTO.fromObject(obj.nearestRideReservation) : undefined,
      tadaNextRideReportUrl: obj.tadaNextRideReportUrl != null ? StringValue.fromObject(obj.tadaNextRideReportUrl) : undefined,
    }
  }
}
