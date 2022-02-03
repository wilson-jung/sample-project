/* eslint-disable */
import { Location, Image, BrazeEvent } from '../common';
import { StringValue } from '../wrappers';


export interface UserGetTutorialContentParams {
  /**
   *  현재 위치. GPS 권한이 없든지 해서 못 얻어오면 null
   */
  currentLocation?: Location;
}

export namespace UserGetTutorialContentParams {
  export function fromObject(obj: any): UserGetTutorialContentParams {
    return {
      ...obj,
      currentLocation: obj.currentLocation != null ? Location.fromObject(obj.currentLocation) : undefined,
    }
  }
}

export interface UserGetTutorialContentResult {
  /**
   *  이 필드가 있으면 해당 내용으로 웰컴 쿠폰 제공 팝업을 띄웁니다.
   *  2021-05-16 추가) 쿠폰과 관련되지 않더라도 웰컴 팝업이 필요한 경우 이 메시지가 내려갑니다.
   */
  welcomeCouponProvided?: UserGetTutorialContentResult.WelcomeCouponProvided;
}

export namespace UserGetTutorialContentResult {
  export function fromObject(obj: any): UserGetTutorialContentResult {
    return {
      ...obj,
      welcomeCouponProvided: obj.welcomeCouponProvided != null ? UserGetTutorialContentResult.WelcomeCouponProvided.fromObject(obj.welcomeCouponProvided) : undefined,
    }
  }

  export interface WelcomeCouponProvided {
    messageTitle?: StringValue;
    messageBody?: StringValue;
    image?: Image;
    closeButton?: UserGetTutorialContentResult.WelcomeCouponProvided.Button;
    confirmButton?: UserGetTutorialContentResult.WelcomeCouponProvided.Button;
    logKey: string;
    /**
     *  이 필드가 있으면 클라이언트는 팝업 확인 버튼이 눌릴 때 Braze SDK로 커스텀 이벤트를 발생시킨다.
     *  https://www.braze.com/docs/developer_guide/platform_integration_guides/android/analytics/tracking_custom_events/
     *  https://www.braze.com/docs/developer_guide/platform_integration_guides/ios/analytics/tracking_custom_events/
     */
    brazeEventsOnConfirm: BrazeEvent[];
  }

  export namespace WelcomeCouponProvided {
    export function fromObject(obj: any): WelcomeCouponProvided {
      return {
        ...obj,
        messageTitle: obj.messageTitle != null ? StringValue.fromObject(obj.messageTitle) : undefined,
        messageBody: obj.messageBody != null ? StringValue.fromObject(obj.messageBody) : undefined,
        image: obj.image != null ? Image.fromObject(obj.image) : undefined,
        closeButton: obj.closeButton != null ? UserGetTutorialContentResult.WelcomeCouponProvided.Button.fromObject(obj.closeButton) : undefined,
        confirmButton: obj.confirmButton != null ? UserGetTutorialContentResult.WelcomeCouponProvided.Button.fromObject(obj.confirmButton) : undefined,
        brazeEventsOnConfirm: obj.brazeEventsOnConfirm.map((v: any) => BrazeEvent.fromObject(v)),
      }
    }

    export interface Button {
      text: string;
      link?: StringValue;
    }

    export namespace Button {
      export function fromObject(obj: any): Button {
        return {
          ...obj,
          link: obj.link != null ? StringValue.fromObject(obj.link) : undefined,
        }
      }
    }
  }
}
