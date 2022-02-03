/* eslint-disable */
import { Int32Value } from '../wrappers';
import { RideDTO } from '../ride';


export interface DriverNotifyRiderDroppedOffParams {
  rideId: string;
  /**
   *  드라이버가 입력한 톨게이트 비용
   */
  tollgateFee?: Int32Value;
  /**
   *  드라이버가 입력한 택시 사용료
   */
  usageFee?: Int32Value;
}

export namespace DriverNotifyRiderDroppedOffParams {
  export function fromObject(obj: any): DriverNotifyRiderDroppedOffParams {
    return {
      ...obj,
      tollgateFee: obj.tollgateFee != null ? Int32Value.fromObject(obj.tollgateFee) : undefined,
      usageFee: obj.usageFee != null ? Int32Value.fromObject(obj.usageFee) : undefined,
    }
  }
}

export interface DriverNotifyRiderDroppedOffResult {
  ride?: RideDTO;
  forwardRide?: RideDTO;
  /**
   *  드라이버가 휴식없이 너무 오래 일했다고 판정해서
   *  휴식이 필요하다는 메세지를 보여줄 때가 있었다.
   *
   *  그 메세지를 보여줘야 하는지 여부.
   *  basic 일 때 사용하던 기능이다. 이제 안 쓴다.
   */
  notifyCoolDown: boolean;
}

export namespace DriverNotifyRiderDroppedOffResult {
  export function fromObject(obj: any): DriverNotifyRiderDroppedOffResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
      forwardRide: obj.forwardRide != null ? RideDTO.fromObject(obj.forwardRide) : undefined,
    }
  }
}
