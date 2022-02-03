/* eslint-disable */
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

export namespace UserGetRideAvailabilityParams {
  export function fromObject(obj: any): UserGetRideAvailabilityParams {
    return {
      ...obj,
      origin: obj.origin != null ? AddressedLocation.fromObject(obj.origin) : undefined,
      destination: obj.destination != null ? AddressedLocation.fromObject(obj.destination) : undefined,
      waypoints: obj.waypoints.map((v: any) => AddressedLocation.fromObject(v)),
      isDaeri: obj.isDaeri != null ? BoolValue.fromObject(obj.isDaeri) : undefined,
    }
  }
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

export namespace UserGetRideAvailabilityResult {
  export function fromObject(obj: any): UserGetRideAvailabilityResult {
    return {
      ...obj,
      issue: obj.issue != null ? RideAvailabilityIssue.fromObject(obj.issue) : undefined,
    }
  }
}
