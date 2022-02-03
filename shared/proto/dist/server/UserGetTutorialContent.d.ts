import { Location, Image, BrazeEvent } from '../common';
import { StringValue } from '../wrappers';
export interface UserGetTutorialContentParams {
    /**
     *  현재 위치. GPS 권한이 없든지 해서 못 얻어오면 null
     */
    currentLocation?: Location;
}
export declare namespace UserGetTutorialContentParams {
    function fromObject(obj: any): UserGetTutorialContentParams;
}
export interface UserGetTutorialContentResult {
    /**
     *  이 필드가 있으면 해당 내용으로 웰컴 쿠폰 제공 팝업을 띄웁니다.
     *  2021-05-16 추가) 쿠폰과 관련되지 않더라도 웰컴 팝업이 필요한 경우 이 메시지가 내려갑니다.
     */
    welcomeCouponProvided?: UserGetTutorialContentResult.WelcomeCouponProvided;
}
export declare namespace UserGetTutorialContentResult {
    function fromObject(obj: any): UserGetTutorialContentResult;
    interface WelcomeCouponProvided {
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
    namespace WelcomeCouponProvided {
        function fromObject(obj: any): WelcomeCouponProvided;
        interface Button {
            text: string;
            link?: StringValue;
        }
        namespace Button {
            function fromObject(obj: any): Button;
        }
    }
}
