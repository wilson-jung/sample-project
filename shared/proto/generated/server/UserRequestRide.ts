/* eslint-disable */
import { AddressedLocation } from '../common';
import { StringValue, BoolValue } from '../wrappers';
import { RideDTO } from '../ride';


export interface UserRequestRideParams {
  origin?: AddressedLocation;
  destination?: AddressedLocation;
  /**
   *  라이드 타입. RideType, RideTypeGroup의 값이 올 수 있다.
   *  UserListRideTypes를 통해 받은 값을 그대로 올려준다. 그 외의 값이 들어오면 실패한다.
   */
  rideType: string;
  /**
   *  사용자가 선택한 결제 수단을 올려준다.
   *  결제 프로필이 있을 때 같이 올리면, 현재 결제 프로필에 붙은 결제 수단과 다른 경우 오류가 발생한다.
   */
  paymentMethodId?: StringValue;
  /**
   *  사용자가 선택한 쿠폰을 올려준다.
   */
  couponId?: StringValue;
  /**
   *  크레딧 사용 여부
   */
  usesCredit?: BoolValue;
  /**
   *  ListRideEstimations 했을때 나오는 Token을 그대로 넣어준다.
   *  (EstimationToken 혹은 NearEstimationToken이다)
   *  Token은 유효기간이 있으므로 REESTIMATION_NEEDED 온 경우 다시 Token을 가져와서 호출해야한다.
   */
  estimationToken: string;
  /**
   *  유저가 출발지 설정을 어떤 방법으로 설정했는지에 대한 정보를 올려준다. 로깅을 위한 필드.
   */
  originSource?: UserRequestRideParams.LocationSource;
  /**
   *  유저가 도착지 설정을 어떤 방법으로 설정했는지에 대한 정보를 올려준다. 로깅을 위한 필드.
   */
  destinationSource?: UserRequestRideParams.LocationSource;
  /**
   *  결제 프로필 ID
   */
  paymentProfileId?: StringValue;
  /**
   *  (비즈니스 프로필 사용시) 호출 목적 기입
   */
  bizReason?: StringValue;
  /**
   *  UserGetPickupPoint에서 서버가 내려준 토큰을 여기서 받아 정보를 사용한다.
   */
  pickupPointToken?: StringValue;
  /**
   *  경유지 정보를 담은 리스트
   */
  waypoints: AddressedLocation[];
  /**
   *  대리에 사용될 차량 id
   */
  userVehicleId?: StringValue;
  /**
   *  라이드 시 유저 요청사항
   */
  userRequestTags: RideDTO.UserRequestTag[];
  /**
   *  5분 내에는 안탈게요 옵션 체크 여부
   *  가까운 타다 요청 시 이 값이 내려오면 에러가 발생합니다.
   */
  notRideSoon?: BoolValue;
}

export namespace UserRequestRideParams {
  export function fromObject(obj: any): UserRequestRideParams {
    return {
      ...obj,
      origin: obj.origin != null ? AddressedLocation.fromObject(obj.origin) : undefined,
      destination: obj.destination != null ? AddressedLocation.fromObject(obj.destination) : undefined,
      paymentMethodId: obj.paymentMethodId != null ? StringValue.fromObject(obj.paymentMethodId) : undefined,
      couponId: obj.couponId != null ? StringValue.fromObject(obj.couponId) : undefined,
      usesCredit: obj.usesCredit != null ? BoolValue.fromObject(obj.usesCredit) : undefined,
      originSource: UserRequestRideParams.LocationSource_fromString(obj.originSource),
      destinationSource: UserRequestRideParams.LocationSource_fromString(obj.destinationSource),
      paymentProfileId: obj.paymentProfileId != null ? StringValue.fromObject(obj.paymentProfileId) : undefined,
      bizReason: obj.bizReason != null ? StringValue.fromObject(obj.bizReason) : undefined,
      pickupPointToken: obj.pickupPointToken != null ? StringValue.fromObject(obj.pickupPointToken) : undefined,
      waypoints: obj.waypoints.map((v: any) => AddressedLocation.fromObject(v)),
      userVehicleId: obj.userVehicleId != null ? StringValue.fromObject(obj.userVehicleId) : undefined,
      userRequestTags: obj.userRequestTags.map((v: any) => RideDTO.UserRequestTag_fromString(v)),
      notRideSoon: obj.notRideSoon != null ? BoolValue.fromObject(obj.notRideSoon) : undefined,
    }
  }

  /**
   *  유저가 출발지나 도착지 설정을 어떤 방법으로 설정했는지 나타내는 ENUM 값
   *  클라이언트에서는 UNSPECIFIED는 없는 것으로 생각하고 코드를 작성하시면 됩니다.
   *
   * GEOCODE : 
     *  출빌지나 도착지 설정을 지도를 통해 설정한 경우
   * PLACE : 
     *  출빌지나 도착지 설정을 검색된 장소를 통해 설정한 경우
   * HISTORY : 
     *  최근 설정 값을 통해 설정한 경우
   * FAVORITE : 
     *  즐겨찾기를 통해 설정한 경우
   * CURRENT : 
     *  현재 위치를 통해 설정한 경우
   */
  export type LocationSource = 'UNSPECIFIED' | 'GEOCODE' | 'PLACE' | 'HISTORY' | 'FAVORITE' | 'CURRENT';

  export function LocationSource_fromString(str: string): LocationSource | undefined {
    switch (str) {
      case "UNSPECIFIED":
      case "GEOCODE":
      case "PLACE":
      case "HISTORY":
      case "FAVORITE":
      case "CURRENT":
      return str
      default: return undefined
    }
  }
}

export interface UserRequestRideResult {
  /**
   *  배차전
   */
  ride?: RideDTO;
}

export namespace UserRequestRideResult {
  export function fromObject(obj: any): UserRequestRideResult {
    return {
      ...obj,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
