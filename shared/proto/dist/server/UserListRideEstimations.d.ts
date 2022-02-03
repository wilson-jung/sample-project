import { AddressedLocation, Image, RideAvailabilityIssue, Location } from '../common';
import { StringValue, BoolValue, Int32Value } from '../wrappers';
import { RideEstimation, RideRoute } from '../ride';
export interface UserListRideEstimationsParams {
    origin?: AddressedLocation;
    destination?: AddressedLocation;
    /**
     *  사용자가 선택한 쿠폰을 올려준다.
     */
    couponId?: StringValue;
    /**
     *  크레딧 사용 여부
     */
    usesCredit?: BoolValue;
    /**
     *  결제 수단 ID
     *  결제 프로필이 있을 때 같이 올리면, 현재 결제 프로필에 붙은 결제 수단과 다른 경우 오류가 발생한다.
     */
    paymentMethodId?: StringValue;
    /**
     *  결제 프로필 ID
     */
    paymentProfileId?: StringValue;
    /**
     *  예측하고자 하는 라이드 타입 리스트. RideType 혹은 RideTypeGroup 값이 올 수 있다.
     *  빈 리스트로 올라오면 적절히 전체 RideType과 RideTypeGroup에 대한 예측 결과가 내려간다.
     */
    rideTypes: string[];
    /**
     *  경유지 정보를 담은 리스트
     */
    waypoints: AddressedLocation[];
    /**
     *  대리 서비스 종료로 null을 넣으면 된다.
     */
    isDaeri?: BoolValue;
    /**
     *  대리에 사용될 차량 id
     */
    userVehicleId?: StringValue;
}
export declare namespace UserListRideEstimationsParams {
    function fromObject(obj: any): UserListRideEstimationsParams;
}
export interface UserListRideEstimationsResult {
    rideEstimations: UserListRideEstimationsResult.Estimation[];
    /**
     *  라이드 타입. null 값 또는 ride_estimations 중의 index 번째를 선택(0부터 시작) null 이면 아무 것도 선택하지 않는다
     */
    selectedIndex?: Int32Value;
    /**
     *  대리 부르기 화면 차량 프로모션 문구
     */
    daeriEstimateRidePromotionText?: StringValue;
    /**
     *  대리기사 호출하기 프로모션 팝업
     */
    daeriRequestRidePromotionPopup?: UserListRideEstimationsResult.DaeriRequestRidePromotionPopup;
    /**
     *  크레딧 사용이 적용된 경우 true로 내려간다.
     */
    isCreditApplied?: BoolValue;
    /**
     *  패스포트 넛지 관련 정보
     *  넛지 정보가 내려오면 호출뷰 패스포트 넛지 처리를 해주어야 합니다.
     */
    passportMembershipNudge?: UserListRideEstimationsResult.PassportMembershipNudge;
    /**
     *  예상 경로 관련 정보
     */
    estimatedRoute?: UserListRideEstimationsResult.EstimatedRoute;
}
export declare namespace UserListRideEstimationsResult {
    function fromObject(obj: any): UserListRideEstimationsResult;
    interface Estimation {
        rideType?: UserListRideEstimationsResult.Estimation.RideType;
        /**
         *  예상 정보
         */
        estimation?: RideEstimation;
        /**
         *  RideRoute에 대한 예측값.
         *  가까운 타다 출시 이후 버전(3.2.0 이상)에서는 RideRoute 예측값이 필요할 때 route_estimation을 사용한다.
         *  가까운 타다 출시 이전 버전(3.2.0 미만)에서는 RideRoute 예측값이 필요할 때 estimation을 사용한다.
         */
        routeEstimation?: RideRoute;
        /**
         *  RequestRide 할 때 이 값을 함께 올려줘야한다.
         *  (RideEstimationToken 혹은 NearRideEstimationToken이다)
         */
        estimationToken?: StringValue;
        /**
         *  예상 요금 이후 단계로 넘어갈 때 뷰 로깅에 이 값을 달아줘야 한다.
         */
        estimationUuid?: StringValue;
        /**
         *  Estimation이 없는 이유 (미지원 출도착지)
         */
        estimationUnavailableIssue?: StringValue;
        /**
         *  탄력요금제 정보가 있는 경우 값이 내려간다.
         */
        surgeInfo?: UserListRideEstimationsResult.Estimation.SurgeInfo;
        /**
         *  상품이 선택된 직후에 보여줄 팝업이 있으면 내려주는 필드
         */
        notice?: UserListRideEstimationsResult.Estimation.Notice;
        /**
         *  상품을 호출했을 때 보여줄 팝업
         */
        noticeAfterClick?: UserListRideEstimationsResult.Estimation.NoticeAfterClick;
        /**
         *  쿠폰 ID가 올라오지 않았거나, 쿠폰 ID가 올라왔지만 적용할 수 없는 경우 false이다.
         *  클라이언트에서는 쿠폰 ID를 올렸지만 false인 경우 UI에서 쿠폰 적용을 해제해야 한다.
         */
        isCouponApplied: boolean;
        rideAvailability?: UserListRideEstimationsResult.Estimation.RideAvailability;
        isDaeri?: BoolValue;
        /**
         *  대리에 대한 Estimation인지의 여부.
         */
        headline: string;
        /**
         *  예상요금 타입명 아래에 상품에 대한 설명이 들어오는 필드
         *  필요에 따라 특수한 정보를 전달해주는 용도로 사용될 수 있다. (e.g. 이벤트 진행, 주변차 넛지 등)
         */
        shouldHeadlineHighlighted: boolean;
        /**
         *  헤드라인에 하이라이트 효과가 들어가야되는지 여부
         */
        baroDaeriInfo?: UserListRideEstimationsResult.Estimation.BaroDaeriInfo;
        /**
         *  바로대리 관련 정보
         */
        passportMembershipDescription?: UserListRideEstimationsResult.Estimation.PassportMembershipDescription;
        /**
         *  패스포트 멤버십 문구 관련 정보
         *  기존 headline과 passport_membership_description 둘 다 값이 내려옵니다.
         *  passport_membership_description을 사용할 수 있으면 사용하고
         *  아니라면 기존 headline을 사용해야 합니다.
         */
        rideReservationInfo?: UserListRideEstimationsResult.Estimation.RideReservationInfo;
    }
    namespace Estimation {
        function fromObject(obj: any): Estimation;
        interface RideType {
            /**
             *  라이드 타입.
             *  LITE, PREMIUM, NEAR_TAXI(가까운 타다), RIDE_RESERVATION (호출예약) 등의 값이 올 수 있다.
             */
            value: string;
            /**
             *  화면에 보여줄 차량 이미지
             */
            image?: Image;
            /**
             *  서비스 이름
             */
            name: string;
            /**
             *  좌석 숫자
             */
            seats: number;
            /**
             *  라벨 이름
             */
            statusLabel?: StringValue;
            /**
             *  호출뷰에서 현재 Estimation을 선택했을 때 액션 버튼에 보여지는 텍스트 문구
             *  RIDE_RESERVATION (호출예약)의 경우만 값이 내려가며, 나머지 경우는 내려가지 않고 클라이언트에서 적절히 name 필드를 사용해서 보여준다.
             */
            actionButtonText?: StringValue;
        }
        namespace RideType {
            function fromObject(obj: any): RideType;
        }
        interface SurgeInfo {
            /**
             *  surge 조건에 부합할 경우 내려가는 팝업 문구
             */
            popupTitle: string;
            popupBody: string;
        }
        namespace SurgeInfo {
            function fromObject(obj: any): SurgeInfo;
        }
        interface Notice {
            image?: Image;
            title?: StringValue;
            body: string;
            /**
             *  클라이언트는 특정 ID로 된 notice를 이미 보여준 경우 다시 보여주지 않아야 합니다.
             *  FIXME: 팝업을 계속 띄우지 않으려면 필요?
             */
            id: string;
        }
        namespace Notice {
            function fromObject(obj: any): Notice;
        }
        interface NoticeAfterClick {
            image?: Image;
            title?: StringValue;
            body: string;
        }
        namespace NoticeAfterClick {
            function fromObject(obj: any): NoticeAfterClick;
        }
        interface RideAvailability {
            /**
             *  호출 가능한지 여부
             */
            isAvailable: boolean;
            /**
             *  호출 할 수 없는 경우, 혹은 호출 할 수 있더라도 서비스 품질 관련 이슈가 있는 경우 그 이유에 대해서 내려주는 필드
             *  호출 버튼을 누를 때 이것을 보고 팝업을 띄워주면 된다.
             */
            issue?: RideAvailabilityIssue;
        }
        namespace RideAvailability {
            function fromObject(obj: any): RideAvailability;
        }
        interface BaroDaeriInfo {
            /**
             *  바로대리 호출 가능한지 여부
             */
            isAvailable: boolean;
            /**
             *  바로대리 설명
             */
            description: string;
            /**
             *  설명을 눌렀을 때 나오는 바로대리 안내 팝업
             */
            popup?: UserListRideEstimationsResult.Estimation.BaroDaeriInfo.Popup;
            /**
             *  바로대리 호출 가능할 때 호출 버튼에 보여줄 문구
             *  (예: 15분 만에 오는 바로대리 호출)
             */
            requestButtonText?: StringValue;
        }
        namespace BaroDaeriInfo {
            function fromObject(obj: any): BaroDaeriInfo;
            interface Popup {
                image?: Image;
                title: string;
                body: string;
            }
            namespace Popup {
                function fromObject(obj: any): Popup;
            }
        }
        interface PassportMembershipDescription {
            /**
             *  패스포트 멤버십 프로모션 관련 문구가 들어오는 필드
             *  ex) 2% 적립, 가입 시 5% 적립
             */
            benefitDescription: string;
            /**
             *  프로모션 문구가 타다 패스포트 색이어야 하는지 여부
             */
            shouldHighlight: boolean;
        }
        namespace PassportMembershipDescription {
            function fromObject(obj: any): PassportMembershipDescription;
        }
        interface RideReservationInfo {
            /**
             *  호출예약 예약하기 웹뷰 url
             */
            reservationPageUrl: string;
        }
        namespace RideReservationInfo {
            function fromObject(obj: any): RideReservationInfo;
        }
    }
    interface DaeriRequestRidePromotionPopup {
        url: string;
        image?: Image;
        title: string;
        body: string;
    }
    namespace DaeriRequestRidePromotionPopup {
        function fromObject(obj: any): DaeriRequestRidePromotionPopup;
    }
    interface PassportMembershipNudge {
        /**
         *  넛지 문구 ex) 패스포트 가입하고 [b]바로 7만원 혜택받기! >[/b]
         */
        description: string;
        url: string;
        logKey: string;
    }
    namespace PassportMembershipNudge {
        function fromObject(obj: any): PassportMembershipNudge;
    }
    interface EstimatedRoute {
        routeUnits: UserListRideEstimationsResult.EstimatedRoute.RouteUnit[];
    }
    namespace EstimatedRoute {
        function fromObject(obj: any): EstimatedRoute;
        interface RouteUnit {
            points: Location[];
        }
        namespace RouteUnit {
            function fromObject(obj: any): RouteUnit;
        }
    }
}
