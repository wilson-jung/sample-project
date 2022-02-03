import { StringValue, Int32Value, BoolValue } from './wrappers';
import { Timestamp } from './timestamp';
import { Image, PaymentMethodDTO, PaymentProfileDTO, AddressedLocation, VehicleLocation, UserDTO, DriverDTO, VehicleDTO, UserVehicleDTO, AccidentReportDTO, DaeriTransportationMedium, PopUp } from './common';
import { CouponDTO } from './coupon';
export interface RideTypeDescription {
    /**
     *  라이드 타입. RideType, RideTypeGroup의 값이 올 수 있다.
     *
     *  2021.11.4.
     *  원래 프리미엄/플러스 라이드 모두 PREMIUM으로 내려줘야 하는데, 플러스는 PLUS로 잘못 내려주고 있었다.
     *  지금 와서 PLUS -> PREMIUM으로 바꾸면 무슨 문제가 날지 모르므로,
     *  client deprecation 시켜서 앞으로 사용하지 못하도록만 막는다.
     */
    name: string;
}
export declare namespace RideTypeDescription {
    function fromObject(obj: any): RideTypeDescription;
}
export interface RideCancellationCause {
    value?: RideCancellationCause.Value;
}
export declare namespace RideCancellationCause {
    function fromObject(obj: any): RideCancellationCause;
    type Value = 'UNSPECIFIED' | 'DISPATCH_TIMEOUT' | 'DRIVER_CANCELLED' | 'RIDER_CANCELLED' | 'ADMIN_CANCELLED';
    function Value_fromString(str: string): Value | undefined;
}
export interface RideCancellationReasonType {
    /**
     * OneOf-type
     */
    driver?: RideCancellationReasonType.Driver.Value;
    /**
     * OneOf-type
     */
    user?: RideCancellationReasonType.User.Value;
}
export declare namespace RideCancellationReasonType {
    function fromObject(obj: any): RideCancellationReasonType;
    interface Driver {
    }
    namespace Driver {
        function fromObject(obj: any): Driver;
        /**
         * USER_NOT_SHOWN :
           *  손님이 나타나지 않음
         * NOT_ENOUGH_SPACE :
           *  손님 수나 짐이 너무 많음
         * ACCIDENT :
           *  사고 발생
         * PERSONAL_REASON :
           *  개인 사정
         * WRONG_RIDER :
           *  손님을 잘못 태움
         * TOO_LONG_TO_BE_PICKED_UP :
           *  고객 대기시간이 길어짐
         * USER_REQUESTED :
           *  손님이 배차 취소를 요청함
         * NO_MASK :
           *  손님이 마스크를 착용하지 않음
         * DRIVING_UNAVAILABLE_VEHICLE :
           *  (대리) 운행할 수 없는 차량임
         * OVERRIDDEN_BY_OTHER_APP :
           *  (대리) 타사 호출 수행
         * TOO_FAR_ORIGIN :
           *  (대리) 거리가 먼 출발지
         */
        type Value = 'CUSTOM' | 'USER_NOT_SHOWN' | 'NOT_ENOUGH_SPACE' | 'ACCIDENT' | 'PERSONAL_REASON' | 'WRONG_RIDER' | 'TOO_LONG_TO_BE_PICKED_UP' | 'USER_REQUESTED' | 'NO_MASK' | 'DRIVING_UNAVAILABLE_VEHICLE' | 'OVERRIDDEN_BY_OTHER_APP' | 'TOO_FAR_ORIGIN';
        function Value_fromString(str: string): Value | undefined;
    }
    interface User {
    }
    namespace User {
        function fromObject(obj: any): User;
        /**
         * OTHER_TRANSPORTATION :
           *  다른 교통수단을 이용
         * TOO_LONG_WAITING :
           *  너무 긴 탑승 대기 시간
         * TOO_SHORT_WAITING :
           *  너무 짧은 탑승 대기 시간
         * INVALID_ORIGIN :
           *  탑승 장소 설정 오류
         * DRIVER_NOT_SHOWN :
           *  탐승 장소에 차량이 오지 않음
         * DRIVER_REQUESTED :
           *  드라이버가 취소를 요구했을 경우
         * TOO_LATE_ETA :
           *  예상 도착시간이 너무 늦음
         * WANT_TO_CHANGE_DEPARTURE_TIME :
           *  출발시간 변경 희망
         * ADDRESS_SETUP_ERROR :
           *  주소지 설정 오류/실수
         */
        type Value = 'CUSTOM' | 'OTHER_TRANSPORTATION' | 'TOO_LONG_WAITING' | 'TOO_SHORT_WAITING' | 'INVALID_ORIGIN' | 'DRIVER_NOT_SHOWN' | 'DRIVER_REQUESTED' | 'TOO_LATE_ETA' | 'WANT_TO_CHANGE_DEPARTURE_TIME' | 'ADDRESS_SETUP_ERROR';
        function Value_fromString(str: string): Value | undefined;
    }
}
export interface RideCancellationFeeType {
    value?: RideCancellationFeeType.Value;
}
export declare namespace RideCancellationFeeType {
    function fromObject(obj: any): RideCancellationFeeType;
    /**
     * CANCELLATION_FEE :
       *  배차 후 취소 수수료
     * NO_SHOW_CANCELLATION_FEE :
       *  도착 후 미탑승 수수료
     * NO_CANCELLATION_FEE :
       *  취소 수수료가 없다
     */
    type Value = 'CANCELLATION_FEE' | 'NO_SHOW_CANCELLATION_FEE' | 'NO_CANCELLATION_FEE';
    function Value_fromString(str: string): Value | undefined;
}
export interface RideCancellationFeePolicy {
    cancellationFeeType?: RideCancellationFeeType;
    /**
     *  수수료가 언제부터 적용되는지 (예, 300초 = 5분)
     */
    cancellationPenaltyDurationSeconds: number;
    /**
     *  수수료
     */
    cancellationFeeKrw: number;
    /**
     *  Ride 상세 화면에서 보여지는 취소 수수료에 대한 설명
     */
    cancellationFeeDescription?: StringValue;
}
export declare namespace RideCancellationFeePolicy {
    function fromObject(obj: any): RideCancellationFeePolicy;
}
export interface RideCouponDTO {
    /**
     *  쿠폰 id
     */
    id: string;
    /**
     *  쿠폰 이름
     */
    name: string;
    /**
     *  할인되는 종류(DISCOUNT_RATE, DISCOUNT_AMOUNT)
     */
    benefitType?: RideCouponDTO.BenefitType;
    /**
     *  할인 정보(양수로 내려갑니다. 클라에서 필요할 때 - 붙여주시면 됩니다.)
     *  DISCOUNT_RATE일때는 퍼센트(ex. 70%인 경우 70)가 내려갑니다.
     *  DISCOUNT_AMOUNT일 때에는 할인되는 금액이 내려갑니다.
     */
    benefitAmount: number;
    /**
     *  유효 기간
     */
    validAfter?: Timestamp;
    expiresAt?: Timestamp;
    /**
     *  쿠폰 코드(혹은 입력한 값)
     */
    couponCode: string;
    /**
     *  쿠폰의 활성 상태. 주의: 이 값은 쿠폰 리스트에서만 의미가 있습니다.
     */
    isActive: boolean;
    /**
     *  쿠폰의 사용 조건
     *  ex) "5000원 이상 결제 시"
     */
    conditionText?: StringValue;
}
export declare namespace RideCouponDTO {
    function fromObject(obj: any): RideCouponDTO;
    type BenefitType = 'DISCOUNT_AMOUNT' | 'DISCOUNT_RATE';
    function BenefitType_fromString(str: string): BenefitType | undefined;
}
/**
 *  출발지 혹은 도착지까지 차량이 언제 도착할지에 대한 ETA 객체.
 *  timestamp필드의 경우, 예상 도착 시간의 절대 시각의 Epoch Millis값이다.
 *  클라이언트는 로컬 시각과 비교하여 도착 예상 시각을 보여줘야한다.
 *  만약 로컬 시각보다 예상시간이 이른 경우는 적당히 표시해주는 로직이 필요하다.
 */
export interface RideEta {
    timestamp: string;
}
export declare namespace RideEta {
    function fromObject(obj: any): RideEta;
}
/**
 *  라이드 origin, destination 사이의 운행에 대한 예측치
 *  RequestRide에 같이 올려준 EstimationToken의 값을 그대로 내려준다.
 */
export interface RideEstimation {
    /**
     *  won
     */
    minCost: number;
    /**
     *  won
     */
    maxCost: number;
    /**
     *  won
     */
    originalMinCost?: Int32Value;
    /**
     *  won
     */
    originalMaxCost?: Int32Value;
    /**
     *  할인 적용 전 단일가 예상요금
     */
    originalEstimatedCost?: Int32Value;
    /**
     *  단일가 예상요금
     */
    estimatedCost?: Int32Value;
    /**
     *  meter
     */
    surgePercentage?: Int32Value;
    /**
     *  second
     */
    originalCallFee?: Int32Value;
    /**
     *  서지 조건에 부합하는 경우 해당하는 퍼센티지가 내려감
     *  클라에서는 추후에 서지 정도를 표현할 일이 있지 않는 이상 무시하시면 됩니다.
     */
    callFee?: Int32Value;
}
export declare namespace RideEstimation {
    function fromObject(obj: any): RideEstimation;
}
/**
 *  매칭 후 탑승 시 주의사항에 대한 정보를 담고 있는 객체.
 */
export interface RidePickupCaution {
    image?: Image;
    title: string;
    body: string;
}
export declare namespace RidePickupCaution {
    function fromObject(obj: any): RidePickupCaution;
}
/**
 *  주행에 대한 정보를 담고 있는 객체.
 *  예측값으로 내려가거나, 라이드가 완료된 후 주행 정보로 내려갈 수 있다. (RideDTO의 route_estimation, route 참고)
 */
export interface RideRoute {
    durationSeconds: number;
    distanceMeters: number;
}
export declare namespace RideRoute {
    function fromObject(obj: any): RideRoute;
}
export interface RidePaymentMethodDTO {
    id: string;
    type?: PaymentMethodDTO.Type;
    createdAt: string;
    /**
     * OneOf-method
     */
    card?: PaymentMethodDTO.Card;
    /**
     * OneOf-method
     */
    bizCard?: PaymentMethodDTO.BizCard;
    /**
     * OneOf-method
     */
    bizCredit?: PaymentMethodDTO.BizCredit;
    /**
     * OneOf-method
     */
    tossAppPay?: PaymentMethodDTO.TossAppPay;
}
export declare namespace RidePaymentMethodDTO {
    function fromObject(obj: any): RidePaymentMethodDTO;
}
export interface RidePaymentProfileDTO {
    id: string;
    name: string;
    email: string;
    type?: PaymentProfileDTO.Type;
}
export declare namespace RidePaymentProfileDTO {
    function fromObject(obj: any): RidePaymentProfileDTO;
}
/**
 *  라이드의 리뷰를 담고 있는 객체.
 */
export interface RideReviewByUserDTO {
    id: string;
    rating: number;
    /**
     *  optional
     */
    reason?: StringValue;
    createdAt: string;
}
export declare namespace RideReviewByUserDTO {
    function fromObject(obj: any): RideReviewByUserDTO;
}
export interface RideReceipt {
    totalPriceKRW: number;
    lineItem: RideReceipt.LineItem[];
    /**
     *  환불된 경우 환불 금액 (양수로 들어옵니다)
     */
    refundAmountKRW?: Int32Value;
}
export declare namespace RideReceipt {
    function fromObject(obj: any): RideReceipt;
    interface LineItem {
        /**
         *  타입. 이 필드를 보고 들여쓰기를 할지 결정한다.
         *  모르는 타입이 들어오는경우 그냥 뒤에 넣어주면 된다.
         */
        category?: RideReceipt.LineItem.Category;
        /**
         *  화면에 표시되어야 하는 이름
         */
        name: string;
        /**
         *  금액. 할인이라도 항상 양수가 들어온다.
         */
        amountKRW: number;
    }
    namespace LineItem {
        function fromObject(obj: any): LineItem;
        /**
         *  이 ENUM 값은 언제든지 추가 될 수 있으므로,
         *  따라서 모르는 ENUM값이 왔을때에 대한 처리를 잘 해줘야한다.
         *  모르는 값은 그냥 맨 뒤에 넣어주면 된다.
         *
         * DRIVING :
           *  운전비용
         * RENT :
           *  자동차 대여 비용
         * TOLLS :
           *  통행료
         * DISCOUNT :
           *  할인 금액 (양수 값이 들어온다! 클라에서 마이너스 붙여서 보여줍니다)
         * CLEANING :
           *  손망실비 (토하거나 차량 파손인 경우 청구되는 항목)
         * CANCELLATION :
           *  취소수수료
         * CALL :
           *  호출료
         * CREDIT :
           *  크레딧 사용량 (양수 값이 들어온다! 클라에서 마이너스 붙여서 보여줍니다)
           *  단위는 원 대신에 크레딧을 붙여야 합니다
         * RESERVATION :
           *  예약비
         * ADDITIONAL_DISTANCE_FEE :
           *  거리 추가 요금
         */
        type Category = 'UNSPECIFIED' | 'DRIVING' | 'RENT' | 'TOLLS' | 'DISCOUNT' | 'CLEANING' | 'CANCELLATION' | 'CALL' | 'CREDIT' | 'RESERVATION' | 'ADDITIONAL_DISTANCE_FEE';
        function Category_fromString(str: string): Category | undefined;
    }
}
/**
 *  길안내에 사용해야하는 옵션과 정보들
 */
export interface NavigationOptions {
    /**
     *  방향성 옵션 고려 유무
     */
    shouldConsiderDirection: boolean;
    /**
     *  안내 입구 위치
     */
    entranceLocation?: AddressedLocation;
}
export declare namespace NavigationOptions {
    function fromObject(obj: any): NavigationOptions;
}
/**
 *  라이더가 적용받는 바로대리 정보
 */
export interface RiderBaroDaeriInfo {
    /**
     *  드라이버의 출발지 도착 시각을 보장할 때 기준이 되는 시각 (최초 호출 시각)
     */
    startAt?: Timestamp;
    guarantees: RiderBaroDaeriInfo.Guarantee[];
    /**
     *  클라에서 start_at과 guarantees를 조합하여 보여줄 문구를 판단하는 것이 아니라 문구가 이미 정해진 경우 타입과 설명을 내려준다.
     */
    confirmedType?: RiderBaroDaeriInfo.ConfirmedType;
    /**
     *  예) "보상쿠폰 지급 완료" 등
     */
    confirmedDescription?: StringValue;
    /**
     *  바로대리 안내 팝업
     */
    popup?: RiderBaroDaeriInfo.Popup;
}
export declare namespace RiderBaroDaeriInfo {
    function fromObject(obj: any): RiderBaroDaeriInfo;
    /**
     * COMPENSATED_BY_OTHER_RIDE :
       *  이전 라이드에서 바로대리 보상을 받은 경우
     * COMPENSATED_BY_CURRENT_RIDE :
       *  현 라이드에서 바로대리 보상을 받은 경우
     */
    type ConfirmedType = 'COMPENSATED_BY_OTHER_RIDE' | 'COMPENSATED_BY_CURRENT_RIDE';
    function ConfirmedType_fromString(str: string): ConfirmedType | undefined;
    interface Guarantee {
        /**
         *  최초 호출 시각으로부터 드라이버 출발지 도착까지 걸리는 시각을 보장할 때 값
         */
        driverToArriveDurationSeconds: string;
        /**
         *  duration_seconds가 지났을 때 보여주는 보상 관련 설명
         *  예) "30% 쿠폰 발급 예정", "100% 쿠폰 발급 예정" 등
         */
        compensationDescription?: StringValue;
    }
    namespace Guarantee {
        function fromObject(obj: any): Guarantee;
    }
    interface Popup {
        image?: Image;
        title: string;
        body: string;
    }
    namespace Popup {
        function fromObject(obj: any): Popup;
    }
}
export interface RideDTO {
    id: string;
    /**
     *  라이드 타입.
     *  보통 RideType의 값이 들어가는데, Status가 PENDING, CANCELLED일 때는 RideTypeGroup의 값이 들어올 수도 있다.
     */
    type: string;
    typeDescription?: RideTypeDescription;
    /**
     *  현재 Ride의 상태에 따라 설정된다.
     */
    status?: RideDTO.Status;
    /**
     *  version이 클수록 이 Ride에 대한 최신 정보를 담고 있다.
     */
    version: string;
    /**
     *  sequenceNumber가 클수록 더 나중에 생긴 Ride이다.
     */
    sequenceNumber: string;
    /**
     *  가까운타다(RideTypeGroup) 호출 시 후보로 선택되는 라이드 타입 정보. 현재는 정확한 타입이 정해지지 않은(드라이버가 배정되지 않은) PENDING 상태인 경우에만 값이 채워진다.
     */
    candidateTypeDescriptions: RideTypeDescription[];
    /**
     *  라이더가 요청한 출발 지점
     */
    origin?: AddressedLocation;
    /**
     *  실제 라이더가 픽업된 지점. PICKED_UP 상태 이후부터 설정된다.
     */
    pickup?: AddressedLocation;
    /**
     *  라이더가 요청한 도착 지점.
     */
    destination?: AddressedLocation;
    /**
     *  실제 라이더가 내린 지점. DROPPED_OFF 상태 이후에 설정된다.
     */
    dropoff?: AddressedLocation;
    /**
     *  취소에 대한 정보를 담고 있으며, Ride가 취소된 경우에 설졍된다.
     */
    cancellationCause?: RideCancellationCause;
    /**
     *  자동차의 현재 위치 정보를 보여준다.
     *  ACCPETED, ARRIVED, PICKED_UP 상태일때만 내려온다.
     */
    location?: VehicleLocation;
    /**
     *  취소에 대한 이유를 담고 있으며, Ride가 취소된 경우에 설졍된다.
     */
    cancellationReason?: StringValue;
    /**
     *  취소 수수료의 종류 (배차 후 취소 수수료, 도착 후 미탑승 수수료)
     */
    cancellationFeeType?: RideCancellationFeeType;
    /**
     *  취소 수수료 정책
     */
    cancellationFeePolicies: RideCancellationFeePolicy[];
    /**
     *  Ride 펼침 화면에서 보여지는 취소 수수료 문구
     */
    cancellationFeeWarning?: StringValue;
    /**
     *  취소시에 내려주는 이유 타입
     */
    cancellationReasonType?: RideCancellationReasonType;
    /**
     *  Ride를 호출한 유저에 대한 정보
     */
    rider?: UserDTO;
    /**
     *  Ride에 배차된 드라이버의 정보. Ride가 드라이버에 의해 Accept 된 경우에만 설정된다.
     *  즉, CANCELLED 상태일때도 Ride가 Accept된 적이 없다면 설정되어 있지 않을 수 있다.
     */
    driver?: DriverDTO;
    /**
     *  이 Ride에 드라이버와 함께 할당된 차량 정보.
     *  즉, driver 필드가 설정되어 있는 경우에만 이 필드가 설정된다.
     */
    vehicle?: VehicleDTO;
    /**
     *  라이더의 휴대폰 전화번호.
     *  라이더의 개인정보 보호를 위해 드라이버 앱에서 라이더와의 통화기록을 삭제할 때 사용된다.
     */
    riderRealPhoneNumber?: StringValue;
    /**
     *  어시스트에서 라이더의 속성.
     *  DISABLED_PERSON(장애인) 혹은 SENIOR(65세 이상) 두 가지가 모두 내려갈 수 있다.
     */
    userVehicle?: UserVehicleDTO;
    /**
     *  대리에 사용될 유저의 차량 정보
     */
    waypoints: AddressedLocation[];
    /**
     *  경유지 정보
     */
    additionalWaypointCount?: Int32Value;
    /**
     *  추가 경유지 개수
     */
    originEta?: RideEta;
    /**
     *  차량이 출발지까지 이동하는데 얼마나 걸릴지에 대한 정보.
     *  ACCEPTED 상태인 경우에만 이 필드가 설정된다.
     */
    destinationEta?: RideEta;
    /**
     *  차량이 도착지까지 이동하는데 얼마나 걸릴지에 대한 정보.
     *  PICKED_UP 상태인 경우에만 이 필드가 설정된다.
     */
    acceptedAt?: Timestamp;
    /**
     *  드라이버가 배차를 수락한 시각.
     *  ACCEPTED 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    arrivedAt?: Timestamp;
    /**
     *  드라이버가 픽업 장소에 도착한 시각.
     *  ARRIVED 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    pickedUpAt?: Timestamp;
    /**
     *  라이더가 픽업된 시각.
     *  PICKED_UP 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    droppedOffAt?: Timestamp;
    /**
     *  라이더가 내린 시각.
     *  DROPPED_OFF 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    cancelledAt?: Timestamp;
    /**
     *  라이드가 취소된 시각.
     */
    approachingDestinationSince?: Timestamp;
    /**
     *  목적지 부근을 최초로 접근한 시각.
     */
    leavingDestinationSince?: Timestamp;
    /**
     *  목적지 부근을 떠난 시각.
     */
    approachingOriginSince?: Timestamp;
    /**
     *  출발지 부근을 최초로 접근한 시각.
     */
    leavingOriginSince?: Timestamp;
    /**
     *  출발지 부근을 떠난 시각.
     */
    estimation?: RideEstimation;
    /**
     *  RequestRide에 같이 올려준 EstimationToken의 값을 그대로 설정된다.
     */
    routeEstimation?: RideRoute;
    /**
     *  RideRoute에 대한 예측값.
     *  가까운 타다 출시 이후 버전(3.2.0 이상)에서는 RideRoute 예측값이 필요할 때 route_estimation을 사용한다.
     *  가까운 타다 출시 이전 버전(3.2.0 미만)에서는 RideRoute 예측값이 필요할 때 estimation을 사용한다.
     */
    route?: RideRoute;
    /**
     *  차량이 승객을 태우고 이동한 경로에 대한 정보.
     *  DROPPED_OFF 상태인 경우에만 이 필드가 채워진다.
     */
    paymentMethod?: RidePaymentMethodDTO;
    /**
     *  사용자가 라이드를 결제할/결제한 결제 수단에 대한 정보 (미수금 처리시 초기 선택과 달라질 수 있음)
     */
    receipt?: RideReceipt;
    /**
     *  라이더에게 청구된 요금에 대한 영수증 정보.
     *  DROPPED_OFF 혹은 CANCELED(취소수수료)일 때 설정될 수 있다.
     */
    coupon?: CouponDTO;
    /**
     *  라이드에 사용되는 쿠폰에 대한 정보
     */
    usesCredit?: BoolValue;
    /**
     *  크레딧 사용이 적용된 경우 true, 나머지 경우 false로 내려간다.
     */
    totalPriceKRW?: Int32Value;
    /**
     *  추가과금 금액을 포함한 가격 (receipt에는 추가과금 금액이 포함되지 않는다.)
     *  탑승내역 리스트에서는 이 값을 보여줘야 합니다.
     */
    driverProfitKRW?: Int32Value;
    /**
     *  드라이버 수입액
     *  드라이버 앱에서, 프리미엄 드라이버일 때만 내려갑니다.
     */
    surgeMultiplier?: StringValue;
    /**
     *  서지 정보.
     */
    paymentProfile?: RidePaymentProfileDTO;
    /**
     *  결제 프로필 정보
     */
    bizReason?: StringValue;
    /**
     *  (비즈니스 프로필) 호출 목적
     */
    disableVehicleBearing?: BoolValue;
    /**
     *  이 값이 true인 경우 탑뷰가 아닌 차량 아이콘을 그린다.
     *  이 값이 내려오지 않는 경우 false로 취급한다.
     */
    pickupCaution?: RidePickupCaution;
    /**
     *  라이드 요청 후 매칭됐을 때 주의사항에 관한 내용
     *  이 값이 내려가는 경우 클라에서는 한 번만 보여준다.
     */
    originNavigationOptions?: NavigationOptions;
    /**
     *  출발지 길안내에 사용해야하는 옵션
     */
    isDaeri?: BoolValue;
    /**
     *  대리 여부.
     */
    riderBaroDaeriInfo?: RiderBaroDaeriInfo;
    userRequestTags: RideDTO.UserRequestTag[];
    /**
     *  라이드 시 유저 요청사항. 이 필드가 바어있지 않으면 하차 후 평가 시 여기 있는 태그와 관련된 리뷰 태그로만 리뷰를 받아야 한다.
     */
    riderReviewExpiresAt?: Timestamp;
    /**
     *  평가 화면이 만료되는 시점. 필드가 채워진 경우 이 시점 이후로는 평가 화면을 띄우지 않아도 된다.(현재는 대리만 내려간다.)
     */
    uncompletedAccidentReport?: AccidentReportDTO;
    /**
     *  대리 드라이버가 아직 운행 계속 여부를 결정하지 않은 사고 접수 내역이 있으면 내려준다.
     *  클라이언트에서는 이 값이 있으면 운행 계속 여부를 선택하는 화면을 띄워줘야 한다.
     */
    insuranceDescription?: StringValue;
    /**
     *  적용된 보험 관련 설명. 있는 경우에만 내려가는데, 대리에만 존재합니다.
     */
    stopovers: RideDTO.Stopover[];
    isUsingMechanicalMeter?: BoolValue;
    riderDriverBanExpirationDays?: Int32Value;
    /**
     *  드라이버 Ban expiration. 라이더 앱에서는 이 필드를 보고 버튼 명을 결정한다. 비어있을 경우는 30일, 음수일 경우는 영원히로 간주한다.
     */
    daeriToOriginTransportationMedium?: DaeriTransportationMedium;
    /**
     *  #cell_대리이동수단_eta 에서 추가한, 대리드라이버가 origin 까지 이동할 거라고 설정해 둔 수단.
     *  https://docs.google.com/presentation/d/1z8TsiuatYStcLUf5iXq2pJgBInnku7Gz5yKeQm3swRM/edit#slide=id.ga9b354c0fd_0_71
     */
    shouldGetPriceAdjustedRideSuggestion?: BoolValue;
    passportMembershipBenefit?: RideDTO.PassportMembershipBenefit;
    /**
     *  패스포트 혜택 관련 필드
     */
    passportMembershipBottomSheetNudge?: RideDTO.PassportMembershipBottomSheetNudge;
    /**
     *  패스포트 바텀 시트 넛지
     */
    passportMembershipFoldingNudge?: RideDTO.PassportMembershipFoldingNudge;
    /**
     *  패스포트 접기형 넛지
     */
    previousRideInfo?: RideDTO.PreviousRideInfo;
    /**
     *  포워드 디스패치일 경우, 이전 라이드의 도착지 등의 정보
     */
    callButtonDisablePopup?: PopUp;
    /**
     *  유저에게 배차된 이후, 드라이버에게 전화하는 것이 불가능할 때 내려주는 팝업
     *  유저가 드라이버에게 전화하는 것이 가능하다면 아무것도 내려가지 않습니다.
     */
    callFee?: Int32Value;
    daeriRiderReviewEvent2020Image?: Image;
    /**
     *  라이더 앱 리뷰 화면에서 보여주는 대리 라이더 리뷰 이벤트 진행 현황 이미지를 위한 임시 필드.
     */
    isReservedRide: boolean;
    expectedPickUpAt?: Timestamp;
    /**
     *  호출예약일 때만 내려간다.
     *  호출예약일 때는 arrived_at 대신 이 값을 기준으로 미탑승 수수료 카운트를 해야 한다.
     */
    isDriverNoShow: boolean;
    reservationAcceptedAt?: Timestamp;
    /**
     *  호출예약일 때만 내려준다.
     */
    cancellationCompletedPopup?: PopUp;
    /**
     *  라이드 취소 팝업
     */
    userRidePreferences: RideDTO.UserRidePreference[];
}
export declare namespace RideDTO {
    function fromObject(obj: any): RideDTO;
    type Status = 'UNSPECIFIED' | 'PENDING' | 'ACCEPTED' | 'ARRIVED' | 'PICKED_UP' | 'DROPPED_OFF' | 'CANCELED';
    function Status_fromString(str: string): Status | undefined;
    /**
     * CUSTOM :
       *  기타 (직접입력)
     * NO_WILD_DRIVING :
       *  부드럽게 운행해주세요
     * NO_UNCLEAN :
       *  담배 냄새는 거북합니다
     * NO_BYPASSING_ROUTE :
       *  네비게이션 경로대로 가주세요
     * NO_TOO_MUCH_TALKER :
       *  불필요한 대화는 사양합니다
     * NO_UNKIND :
       *  반말과 과격한 언행은 싫어요
     */
    type UserRequestTag = 'CUSTOM' | 'NO_WILD_DRIVING' | 'NO_UNCLEAN' | 'NO_BYPASSING_ROUTE' | 'NO_TOO_MUCH_TALKER' | 'NO_UNKIND';
    function UserRequestTag_fromString(str: string): UserRequestTag | undefined;
    /**
     * SAFE_RIDE :
       *  천천히 안전하게 이동해주세요
     * HURRY_RIDE :
       *  조금 서둘러 이동해주세요
     * NAVIGATION_PATH :
       *  네비게이션 안내대로 이동해주세요
     * FREE_PATH :
       *  드라이버님이 아시는 길로 이동해도 좋아요
     */
    type UserRidePreferenceTag = 'UNKNOWN' | 'SAFE_RIDE' | 'HURRY_RIDE' | 'NAVIGATION_PATH' | 'FREE_PATH';
    function UserRidePreferenceTag_fromString(str: string): UserRidePreferenceTag | undefined;
    interface UserRidePreference {
        displayName: string;
        ridePreferenceTag?: RideDTO.UserRidePreferenceTag;
    }
    namespace UserRidePreference {
        function fromObject(obj: any): UserRidePreference;
    }
    interface Stopover {
        address: string;
        stoppedOverAt: string;
        createdAt: string;
    }
    namespace Stopover {
        function fromObject(obj: any): Stopover;
    }
    interface PassportMembershipBenefit {
        /**
         *  이용 예정, 이용 완료 상세 화면, 평가 화면 영수증에 보여줄 문구
         *  이용 완료, 평가 화면 -> ex) "플러스 탑승 (5% 적립)"
         *  이용 예정          -> ex) "플러스 탑승 (5% 적립 예정) (호출 예약)
         */
        depositDescription?: StringValue;
        /**
         *  이용 완료 상세 화면에 보여줄 실제 크레딧 적립량 (적립이 없을 때는 0)
         *  "+ 100 크레딧"으로 표시해줘야 합니다.
         */
        creditDepositAmount: number;
        /**
         *  이용 예정 상세, 평가 화면 영수증에 보여줄 예상 크레딧 적립량 (아직 확정나지 않았을 때는 0)
         *  "+ 100 크레딧"으로 표시해줘야 합니다.
         */
        expectedCreditDepositAmount: number;
        /**
         *  예상 혜택 문구
         *  평가 화면 이전 Ride -> ex) "5% 적립", "크레딧 적립 예정" (가까운 타다)
         *  평가 화면 이후 Ride -> ex) "500 크레딧 적립"
         */
        expectedBenefitText: string;
    }
    namespace PassportMembershipBenefit {
        function fromObject(obj: any): PassportMembershipBenefit;
    }
    interface PassportMembershipBottomSheetNudge {
        /**
         *  ex) 바로 적용 가능한 [b]7만원 혜택[/b] 받기
         */
        title: string;
        /**
         *  ex) 패스포트 가입하고
         */
        subtitle?: StringValue;
        closeButtonText: string;
        confirmButton?: RideDTO.PassportMembershipBottomSheetNudge.ConfirmButton;
        image?: Image;
        logKey: string;
    }
    namespace PassportMembershipBottomSheetNudge {
        function fromObject(obj: any): PassportMembershipBottomSheetNudge;
        interface ConfirmButton {
            text: string;
            link?: StringValue;
        }
        namespace ConfirmButton {
            function fromObject(obj: any): ConfirmButton;
        }
    }
    interface PassportMembershipFoldingNudge {
        /**
         *  ex) 패스포트로 [b]바로 할인받기[/b]
         */
        description: string;
        link: string;
        logKey: string;
    }
    namespace PassportMembershipFoldingNudge {
        function fromObject(obj: any): PassportMembershipFoldingNudge;
    }
    interface PreviousRideInfo {
        dropOff?: AddressedLocation;
    }
    namespace PreviousRideInfo {
        function fromObject(obj: any): PreviousRideInfo;
    }
}
/**
 *  RideDTO를 라이더에게 리스트로 내려줄 때 사용되는 RideDTO의 경량화 버전.
 */
export interface UserCompactRideDTO {
    id: string;
    /**
     *  라이드 타입.
     *  보통 RideType의 값이 들어가는데, Status가 PENDING, CANCELLED일 때는 RideTypeGroup의 값이 들어올 수도 있다.
     */
    type: string;
    typeDescription?: RideTypeDescription;
    /**
     *  현재 Ride의 상태에 따라 설정된다.
     */
    status?: RideDTO.Status;
    /**
     *  라이더가 요청한 출발 지점
     */
    origin?: AddressedLocation;
    /**
     *  실제 라이더가 픽업된 지점. PICKED_UP 상태 이후부터 설정된다.
     */
    pickup?: AddressedLocation;
    /**
     *  라이더가 요청한 도착 지점.
     */
    destination?: AddressedLocation;
    /**
     *  실제 라이더가 내린 지점. DROPPED_OFF 상태 이후에 설정된다.
     */
    dropoff?: AddressedLocation;
    /**
     *  취소에 대한 정보를 담고 있으며, Ride가 취소된 경우에 설졍된다.
     */
    cancellationCause?: RideCancellationCause;
    /**
     *  취소시에 내려주는 이유 타입
     */
    cancellationReasonType?: RideCancellationReasonType;
    /**
     *  취소 수수료의 종류 (배차 후 취소 수수료, 도착 후 미탑승 수수료)
     */
    cancellationFeeType?: RideCancellationFeeType;
    /**
     *  취소 수수료 정책
     */
    cancellationFeePolicies: RideCancellationFeePolicy[];
    /**
     *  새로운 취소 수수료 정책이 시작되었는가에 대한 정보
     *  20191118 0시 전까지 false이며, 이후 null이 됨
     */
    shouldApplyChangedCancellationFeePolicies?: BoolValue;
    /**
     *  드라이버가 배차를 수락한 시각.
     *  ACCEPTED 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    acceptedAt?: Timestamp;
    /**
     *  드라이버가 픽업 장소에 도착한 시각.
     *  ARRIVED 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    arrivedAt?: Timestamp;
    /**
     *  라이더가 픽업된 시각.
     *  PICKED_UP 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    pickedUpAt?: Timestamp;
    /**
     *  라이더가 내린 시각.
     *  DROPPED_OFF 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    droppedOffAt?: Timestamp;
    /**
     *  라이드가 취소된 시각.
     *  DROPPED_OFF 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    cancelledAt?: Timestamp;
    /**
     *  경유지 정보
     */
    waypoints: AddressedLocation[];
    /**
     *  추가 경유지 개수
     */
    additionalWaypointCount?: Int32Value;
    /**
     *  라이드에 사용되는 쿠폰에 대한 정보
     */
    totalPriceKRW?: Int32Value;
    /**
     *  추가과금 금액을 포함한 가격 (receipt에는 추가과금 금액이 포함되지 않는다.)
     *  탑승내역 리스트에서는 이 값을 보여줘야 합니다.
     */
    hasReceipt: boolean;
    /**
     *  요금 상세내역이 있는지 여부
     *  status와 조합하여 취소수수료가 발생했는지 확인하는데에 사용
     */
    bizProfileName?: StringValue;
    /**
     *  비즈니스 프로필 이름
     */
    isDaeri?: BoolValue;
    /**
     *  대리 여부.
     */
    isDiscountApplied: boolean;
    /**
     *  할인 적용 여부
     */
    providedPassportMembershipBenefitDescription?: StringValue;
    /**
     *  실제 제공받은 패스포트 멤버십 혜택 관련 문구
     *  ex) "500 크레딧 적립"
     */
    createdAt?: Timestamp;
    rideProductType?: UserCompactRideDTO.RideProductType;
    isDriverNoShow: boolean;
    reservationAcceptedAt?: Timestamp;
    /**
     *  호출예약일 때만 내려준다.
     */
    expectedPickUpAt?: Timestamp;
}
export declare namespace UserCompactRideDTO {
    function fromObject(obj: any): UserCompactRideDTO;
    type RideProductType = 'UNKNOWN' | 'REAL_TIME_RIDE' | 'RESERVED_RIDE' | 'RIDE_RESERVATION';
    function RideProductType_fromString(str: string): RideProductType | undefined;
}
/**
 *  RideDTO를 드라이버에게 리스트로 내려줄 때 사용되는 RideDTO의 경량화 버전.
 */
export interface DriverCompactRideDTO {
    id: string;
    /**
     *  라이드 타입.
     *  보통 RideType의 값이 들어가는데, Status가 PENDING, CANCELLED일 때는 RideTypeGroup의 값이 들어올 수도 있다.
     */
    type: string;
    typeDescription?: RideTypeDescription;
    /**
     *  현재 Ride의 상태에 따라 설정된다.
     */
    status?: RideDTO.Status;
    /**
     *  라이더가 요청한 출발 지점
     */
    origin?: AddressedLocation;
    /**
     *  실제 라이더가 픽업된 지점. PICKED_UP 상태 이후부터 설정된다.
     */
    pickup?: AddressedLocation;
    /**
     *  라이더가 요청한 도착 지점.
     */
    destination?: AddressedLocation;
    /**
     *  실제 라이더가 내린 지점. DROPPED_OFF 상태 이후에 설정된다.
     */
    dropoff?: AddressedLocation;
    /**
     *  취소에 대한 정보를 담고 있으며, Ride가 취소된 경우에 설졍된다.
     */
    cancellationCause?: RideCancellationCause;
    /**
     *  취소에 대한 이유를 담고 있으며, Ride가 취소된 경우에 설졍된다.
     */
    cancellationReason?: StringValue;
    /**
     *  취소시에 내려주는 이유 타입
     */
    cancellationReasonType?: RideCancellationReasonType;
    /**
     *  취소수수료가 부과됐는지 여부를 담고 있으며, Ride가 취소된 경우에 설정된다.
     */
    hasCancellationFee?: BoolValue;
    /**
     *  Ride를 호출한 유저에 대한 정보
     */
    rider?: UserDTO;
    /**
     *  경유지 정보
     */
    waypoints: AddressedLocation[];
    /**
     *  추가 경유지 개수
     */
    additionalWaypointCount?: Int32Value;
    /**
     *  드라이버가 배차를 수락한 시각.
     *  ACCEPTED 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    acceptedAt?: Timestamp;
    /**
     *  드라이버가 픽업 장소에 도착한 시각.
     *  ARRIVED 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    arrivedAt?: Timestamp;
    /**
     *  라이더가 픽업된 시각.
     *  PICKED_UP 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    pickedUpAt?: Timestamp;
    /**
     *  라이더가 내린 시각.
     *  DROPPED_OFF 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    droppedOffAt?: Timestamp;
    /**
     *  라이드가 취소된 시각.
     *  DROPPED_OFF 상태가 된적이 있는 경우에만 이 필드가 설정된다.
     */
    cancelledAt?: Timestamp;
    /**
     *  차량이 승객을 태우고 이동한 경로에 대한 정보.
     *  DROPPED_OFF 상태인 경우에만 이 필드가 채워진다.
     */
    route?: RideRoute;
    /**
     *  해당 라이드의 매출. 프리미엄 운행 드라이버에게만 내려갑니다.
     *  운행이력 리스트에서는 이 값을 보여줘야 합니다.
     */
    driverProfitKRW?: Int32Value;
    /**
     *  서지 정보.
     */
    surgeMultiplier?: StringValue;
    /**
     *  보험사 이름. 있는 경우에만 내려가는데, 대리에만 존재합니다. (핸들모아)
     */
    insuranceCompanyName?: StringValue;
    /**
     *  사고 발생 여부. 발생한 경우에만 true로 내려갑니다. null이나 false이면 무사고. (핸들모아)
     */
    isAccidentReported?: BoolValue;
    /**
     *  사고 접수 번호. 보험사에 접수된 접수 번호가 있는 경우 내려갑니다. (핸들모아)
     */
    insuranceReportId: string[];
    /**
     *  사고 접수 버튼 표시 여부 (핸들모아)
     */
    shouldShowAccidentReport?: BoolValue;
    callFee?: Int32Value;
    isReservedRide: boolean;
    /**
     *  is_reserved_ride가 true면 아래 두 필드는 non-null이다.
     *  호출예약의 수락 시각 (배차시각)
     */
    reservationAcceptedAt?: Timestamp;
    /**
     *  호출예약의 탑승 예정 시각 (예약시각)
     */
    expectedPickUpAt?: Timestamp;
}
export declare namespace DriverCompactRideDTO {
    function fromObject(obj: any): DriverCompactRideDTO;
}
