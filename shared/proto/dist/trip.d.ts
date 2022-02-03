import { Int32Value, StringValue } from './wrappers';
import { AddressedLocation, UserDTO, DriverDTO, PaymentMethodDTO, PaymentProfileDTO, Image } from './common';
import { Timestamp } from './timestamp';
export declare type TripAirType = 'SENDING' | 'PICK_UP';
export declare function TripAirType_fromString(str: string): TripAirType | undefined;
export declare type TripAvailableDatetimeType = 'DAYS_IN_MONTH' | 'HOURS_IN_DAY' | 'TEN_MINUTES_IN_HOUR' | 'ALL_DAYS' | 'RIDE_FLUX_TO_JUNGMUN' | 'RIDE_FLUX_TO_CJU_AIRPORT';
export declare function TripAvailableDatetimeType_fromString(str: string): TripAvailableDatetimeType | undefined;
export interface TripCancellationCause {
    value?: TripCancellationCause.Value;
}
export declare namespace TripCancellationCause {
    function fromObject(obj: any): TripCancellationCause;
    type Value = 'UNSPECIFIED' | 'DRIVER_CANCELLED' | 'RIDER_CANCELLED';
    function Value_fromString(str: string): Value | undefined;
}
export interface TripTypeDescription {
    /**
     *  Trip 타입. 앞으로 AIR, CHARTER 등의 값이 올 수 있다.
     */
    value?: TripTypeDescription.TripType;
    /**
     *  화면에 보여줄 사람이 알아볼 수 있는 값들
     */
    name: string;
}
export declare namespace TripTypeDescription {
    function fromObject(obj: any): TripTypeDescription;
    type TripType = 'UNSPECIFIED' | 'AIR' | 'CHARTER' | 'VAN';
    function TripType_fromString(str: string): TripType | undefined;
}
export interface TripReceipt {
    lineItems: TripReceipt.LineItem[];
    /**
     *  유저에게만 내려감. lineItems의 amountKRW의 합과 일치하지 않을 수 있다!
     */
    totalPriceKRW?: Int32Value;
    /**
     *  프리미엄 개인 기사에게만 내려감. basicFee discount (시간 할인) 이 적용된 이후의 금액이다.
     */
    driverProfitKRW?: Int32Value;
    /**
     *  프리미엄 개인 기사에게만 내려감. 취소 수수료 관련 설명이다.
     */
    cancellationFeeDescription?: StringValue;
}
export declare namespace TripReceipt {
    function fromObject(obj: any): TripReceipt;
    interface LineItem {
        name: string;
        amountKRW: number;
    }
    namespace LineItem {
        function fromObject(obj: any): LineItem;
    }
}
export interface TripReceiptPrefilledEntry {
    type?: TripReceiptPrefilledEntry.Type;
    amountKRW: number;
}
export declare namespace TripReceiptPrefilledEntry {
    function fromObject(obj: any): TripReceiptPrefilledEntry;
    type Type = 'UNSPECIFIED' | 'PARKING' | 'TOLL';
    function Type_fromString(str: string): Type | undefined;
}
/**
 *  현재 Trip이 완료된 후, 주행에 대한 정보를 담고 있는 객체.
 */
export interface TripRoute {
    durationSeconds: number;
    distanceMeters: number;
}
export declare namespace TripRoute {
    function fromObject(obj: any): TripRoute;
}
export interface TripDTO {
    id: string;
    typeDescription?: TripTypeDescription;
    /**
     *  현재 Ride의 상태에 따라 설정된다.
     */
    tripRideStatus?: TripDTO.TripRideStatus;
    /**
     *  version이 클수록 이 Ride에 대한 최신 정보를 담고 있다.
     */
    version: string;
    /**
     *  sequenceNumber가 클수록 더 나중에 생긴 Trip이다.
     */
    sequenceNumber: string;
    /**
     *  추가 정보 리스트
     */
    detailItems: TripDTO.DetailItem[];
    /**
     *  요청 사항
     */
    comment?: StringValue;
    /**
     *  요청 사항
     */
    waypoint?: StringValue;
    /**
     *  라이더가 요청한 출발 지점
     */
    origin?: AddressedLocation;
    /**
     *  라이더가 요청한 출발 지점의 상세 (EX.101동 지하주차장).
     */
    originDetails?: StringValue;
    /**
     *  실제 라이더가 픽업된 지점. PICKED_UP 상태 이후부터 설정된다.
     */
    pickup?: AddressedLocation;
    /**
     *  라이더가 요청한 도착 지점.
     */
    destination?: AddressedLocation;
    /**
     *  라이더가 요청한 도착 지점의 상세 (EX.101동 지하주차장).
     */
    destinationDetails?: StringValue;
    /**
     *  실제 라이더가 내린 지점. DROPPED_OFF 상태 이후에 설정된다.
     */
    dropoff?: AddressedLocation;
    /**
     *  취소에 대한 정보를 담고 있으며, Trip이 취소된 경우에 설졍된다.
     */
    cancellationCause?: TripCancellationCause;
    /**
     *  Ride를 호출한 유저에 대한 정보
     */
    rider?: UserDTO;
    /**
     *  Trip에 배차된 드라이버의 정보. Trip이 드라이버에 의해 Accept 된 경우에만 설정된다.
     */
    driver?: DriverDTO;
    /**
     *  라이더의 휴대폰 전화번호.
     *  라이더의 개인정보 보호를 위해 드라이버 앱에서 라이더와의 통화기록을 삭제할 때 사용된다.
     */
    riderRealPhoneNumber?: StringValue;
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
     *  라이더를 픽업할 시각.
     */
    pickUpScheduledAt?: Timestamp;
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
     *  목적지 부근을 최초로 지난 시각.
     */
    approachingDestinationSince?: Timestamp;
    /**
     *  출발지 부근을 떠난 지난 시각.
     */
    leavingOriginSince?: Timestamp;
    /**
     *  차량이 승객을 태우고 이동한 경로에 대한 정보.
     *  DROPPED_OFF 상태인 경우에만 이 필드가 채워진다.
     */
    route?: TripRoute;
    /**
     *  영수증 정보
     */
    receipt?: TripReceipt;
    /**
     *  고객에게 과금할 추가요금 미리 입력 정보
     */
    receiptPrefilledEntries: TripReceiptPrefilledEntry[];
    /**
     *  사용자가 라이드를 결제할/결제한 결제 수단에 대한 정보 (미수금 처리시 초기 선택과 달라질 수 있음)
     *  라이더에게만 내려감
     */
    paymentMethod?: PaymentMethodDTO;
    /**
     *  결제 프로필 정보
     *  라이더에게만 내려감
     */
    paymentProfile?: PaymentProfileDTO;
    /**
     *  거리 상한 정보
     *  프리미엄 개인에게만 내려간다
     */
    km?: Int32Value;
    /**
     *  취소 관련 정보(ex. "예약 취소됨")
     *  드라이버에게만 내려간다
     */
    cancelDescription?: StringValue;
}
export declare namespace TripDTO {
    function fromObject(obj: any): TripDTO;
    type TripRideStatus = 'UNSPECIFIED' | 'PENDING' | 'ACCEPTED' | 'ARRIVED' | 'PICKED_UP' | 'DROPPED_OFF' | 'CANCELED';
    function TripRideStatus_fromString(str: string): TripRideStatus | undefined;
    interface DetailItem {
        key: string;
        value: string;
    }
    namespace DetailItem {
        function fromObject(obj: any): DetailItem;
    }
}
export interface TripVehicle {
    type?: TripVehicle.TripVehicleType;
    brand: string;
    model: string;
    publicName: string;
    image?: Image;
    /**
     *  설명 슬라이드용 이미지
     */
    slideImages: Image[];
    seats: number;
}
export declare namespace TripVehicle {
    function fromObject(obj: any): TripVehicle;
    type TripVehicleType = 'CARNIVAL' | 'SPRINTER' | 'SOLATI' | 'SEDAN';
    function TripVehicleType_fromString(str: string): TripVehicleType | undefined;
}
export interface TripAddressedLocation {
    location?: AddressedLocation;
    details?: StringValue;
}
export declare namespace TripAddressedLocation {
    function fromObject(obj: any): TripAddressedLocation;
}
export interface TripLuggage {
    /**
     *  특수 수하물
     */
    large: number;
    /**
     *  대형 수하물
     */
    medium: number;
    /**
     *  일반 수하물
     */
    small: number;
    /**
     *  소형 수하물
     */
    tiny: number;
}
export declare namespace TripLuggage {
    function fromObject(obj: any): TripLuggage;
}
export interface TripEstimation {
    basicFee: number;
    basicFeeDiscount: number;
    basicFeeDiscountType?: TripEstimation.TripBasicFeeDiscountType;
    couponDiscount: number;
    totalFee: number;
    bizDiscount: number;
    /**
     *  "1.23%" 형태의 문자열
     */
    bizDiscountPercentage?: StringValue;
}
export declare namespace TripEstimation {
    function fromObject(obj: any): TripEstimation;
    type TripBasicFeeDiscountType = 'UNSPECIFIED' | 'DATE_TIME' | 'EMPLOYEE' | 'AIR_DEAL' | 'EARLY_BIRD' | 'MEMBERSHIP';
    function TripBasicFeeDiscountType_fromString(str: string): TripBasicFeeDiscountType | undefined;
}
export interface TripRider {
    name: string;
    phoneNumber: string;
}
export declare namespace TripRider {
    function fromObject(obj: any): TripRider;
}
export interface TripAvailableDatetime {
    isAvailable: boolean;
    datetime?: Timestamp;
    priceRate: number;
    dropOffAt?: Timestamp;
}
export declare namespace TripAvailableDatetime {
    function fromObject(obj: any): TripAvailableDatetime;
}
export interface TripReservation {
    id: string;
    /**
     *  상세 뷰에서 사용합니다.
     */
    name: string;
    /**
     *  리스트 뷰에서 사용합니다.
     */
    shortName: string;
    type?: TripTypeDescription.TripType;
    status?: TripReservation.TripReservationStatus;
    rideStatus?: TripDTO.TripRideStatus;
    pickUpAt?: Timestamp;
    vehicle?: TripVehicle;
    origin?: TripAddressedLocation;
    waypoints: TripAddressedLocation[];
    destination?: TripAddressedLocation;
    driverName?: StringValue;
    driverInformation: TripReservation.LineItem[];
    reviewRating?: Int32Value;
    riderInformation: TripReservation.LineItem[];
    reservationInformation: TripReservation.LineItem[];
    comment?: StringValue;
    designatedDriverComment?: StringValue;
    bizReason?: StringValue;
    payment?: TripReservation.Payment;
    receipt?: TripReceipt;
    additionalPayment?: TripReservation.Payment;
    additionalReceipt?: TripReceipt;
    refundPayment?: TripReservation.Payment;
    refundReceipt?: TripReceipt;
    tipPayment?: TripReservation.Payment;
    tipReceipt?: TripReceipt;
    previousPayment?: TripReservation.Payment;
    previousReceipt?: TripReceipt;
    km: number;
    feePerKm: number;
    minute?: Int32Value;
    feePerHour?: Int32Value;
    additionalFeeDescription: string;
    hasAirPickUpNudge: boolean;
    needReview: boolean;
    editable: boolean;
    isB2b: boolean;
}
export declare namespace TripReservation {
    function fromObject(obj: any): TripReservation;
    type TripReservationStatus = 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
    function TripReservationStatus_fromString(str: string): TripReservationStatus | undefined;
    interface LineItem {
        name: string;
        value: string;
    }
    namespace LineItem {
        function fromObject(obj: any): LineItem;
    }
    interface Payment {
        method?: PaymentMethodDTO;
        profile?: PaymentProfileDTO;
    }
    namespace Payment {
        function fromObject(obj: any): Payment;
    }
}
export interface TripProduct {
    image?: Image;
    vehicle?: TripVehicle;
    hourUnit?: Int32Value;
    waypointCount: number;
    minCost: number;
    originalMinCost?: Int32Value;
    productNotices: TripProduct.LineItem[];
    reservationNotices: string[];
    feeNotices: string[];
    additionalFeeDescription: string;
    luggageDescription?: TripProduct.LuggageDescription;
    rideFluxDescription?: TripProduct.RideFluxDescription;
}
export declare namespace TripProduct {
    function fromObject(obj: any): TripProduct;
    interface RideFluxDescription {
        header: string;
        locationSubheading: string;
        locationDescriptions: string[];
        stopsSubheading: string;
        stopsDescriptions: string[];
        feeSubheading: string;
        feeDiscountReason: string;
        schedulesSubheading: string;
        schedulesDescriptions: string[];
        schedules: TripProduct.RideFluxDescription.Schedule[];
        faqSubheading: string;
        faqs: TripProduct.RideFluxDescription.Faq[];
        schedulesNotice: string;
    }
    namespace RideFluxDescription {
        function fromObject(obj: any): RideFluxDescription;
        interface Schedule {
            subheading: string;
            times: string[];
        }
        namespace Schedule {
            function fromObject(obj: any): Schedule;
        }
        interface Faq {
            title: string;
            body: string;
        }
        namespace Faq {
            function fromObject(obj: any): Faq;
        }
    }
    interface LineItem {
        key: string;
        value: string;
    }
    namespace LineItem {
        function fromObject(obj: any): LineItem;
    }
    interface LuggageDescription {
        small: string;
        medium: string;
        large: string;
    }
    namespace LuggageDescription {
        function fromObject(obj: any): LuggageDescription;
    }
}
