/* eslint-disable */
import { AddressedLocation } from '../common';
import { StringValue } from '../wrappers';


export interface UserGetPickupPointParams {
  origin?: AddressedLocation;
  destination?: AddressedLocation;
  waypoints: AddressedLocation[];
  /**
   *  라이드 타입에 따라 픽업포인트 조정이 달라지는 경우가 있어 타입을 같이 올려준다.
   *  안 올려줄 경우 프리미엄에 대한 픽업포인트를 내려준다.
   *  RideType 혹은 RideTypeGroup 값이 올 수 있다.
   */
  rideType?: StringValue;
}

export namespace UserGetPickupPointParams {
  export function fromObject(obj: any): UserGetPickupPointParams {
    return {
      ...obj,
      origin: obj.origin != null ? AddressedLocation.fromObject(obj.origin) : undefined,
      destination: obj.destination != null ? AddressedLocation.fromObject(obj.destination) : undefined,
      waypoints: obj.waypoints.map((v: any) => AddressedLocation.fromObject(v)),
      rideType: obj.rideType != null ? StringValue.fromObject(obj.rideType) : undefined,
    }
  }
}

export interface UserGetPickupPointResult {
  /**
   *  이 값이 false인 경우에는 하단 버튼을 비활성화 시켜야한다.
   */
  isAvailable: boolean;
  /**
   *  픽업포인트의 위치. isAvailable이 false인 경우에도 backward compat을 위해 내려간다.
   */
  pickupPoint?: AddressedLocation;
  /**
   *  하단 메시지 뷰의 메시지 문구
   */
  message?: StringValue;
  /**
   *  하단 메시지 뷰의 디테일 메시지 문구
   */
  detailMessage?: StringValue;
  /**
   *  클라이언트에서는 이 필드를 보고 호출 버튼을 누른 경우 팝업을 띄워줘야 한다.
   */
  confirmPopup?: UserGetPickupPointResult.ConfirmPopup;
  /**
   *  클라이언트에서는 UserRequestRide할 때 이 토큰을 올려주어야 한다.
   */
  pickupPointToken?: StringValue;
  /**
   *  5분 내에는 안탈게요 넛지의 메세지 문구
   */
  notRideSoonNudge?: UserGetPickupPointResult.NotRideSoonNudge;
}

export namespace UserGetPickupPointResult {
  export function fromObject(obj: any): UserGetPickupPointResult {
    return {
      ...obj,
      pickupPoint: obj.pickupPoint != null ? AddressedLocation.fromObject(obj.pickupPoint) : undefined,
      message: obj.message != null ? StringValue.fromObject(obj.message) : undefined,
      detailMessage: obj.detailMessage != null ? StringValue.fromObject(obj.detailMessage) : undefined,
      confirmPopup: obj.confirmPopup != null ? UserGetPickupPointResult.ConfirmPopup.fromObject(obj.confirmPopup) : undefined,
      pickupPointToken: obj.pickupPointToken != null ? StringValue.fromObject(obj.pickupPointToken) : undefined,
      notRideSoonNudge: obj.notRideSoonNudge != null ? UserGetPickupPointResult.NotRideSoonNudge.fromObject(obj.notRideSoonNudge) : undefined,
    }
  }

  export interface ConfirmPopup {
    title: string;
    message: string;
  }

  export namespace ConfirmPopup {
    export function fromObject(obj: any): ConfirmPopup {
      return {
        ...obj,
      }
    }
  }

  export interface NotRideSoonNudge {
    title: string;
    message: string;
  }

  export namespace NotRideSoonNudge {
    export function fromObject(obj: any): NotRideSoonNudge {
      return {
        ...obj,
      }
    }
  }
}
