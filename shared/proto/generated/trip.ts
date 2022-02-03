/* eslint-disable */
import { Int32Value, StringValue } from './wrappers';
import { AddressedLocation, UserDTO, DriverDTO, PaymentMethodDTO, PaymentProfileDTO, Image } from './common';
import { Timestamp } from './timestamp';


export type TripAirType = 'SENDING' | 'PICK_UP';

export function TripAirType_fromString(str: string): TripAirType | undefined {
  switch (str) {
    case "SENDING":
    case "PICK_UP":
    return str
    default: return undefined
  }
}

export type TripAvailableDatetimeType = 'DAYS_IN_MONTH' | 'HOURS_IN_DAY' | 'TEN_MINUTES_IN_HOUR' | 'ALL_DAYS' | 'RIDE_FLUX_TO_JUNGMUN' | 'RIDE_FLUX_TO_CJU_AIRPORT';

export function TripAvailableDatetimeType_fromString(str: string): TripAvailableDatetimeType | undefined {
  switch (str) {
    case "DAYS_IN_MONTH":
    case "HOURS_IN_DAY":
    case "TEN_MINUTES_IN_HOUR":
    case "ALL_DAYS":
    case "RIDE_FLUX_TO_JUNGMUN":
    case "RIDE_FLUX_TO_CJU_AIRPORT":
    return str
    default: return undefined
  }
}

export interface TripCancellationCause {
  value?: TripCancellationCause.Value;
}

export namespace TripCancellationCause {
  export function fromObject(obj: any): TripCancellationCause {
    return {
      ...obj,
      value: TripCancellationCause.Value_fromString(obj.value),
    }
  }

  export type Value = 'UNSPECIFIED' | 'DRIVER_CANCELLED' | 'RIDER_CANCELLED';

  export function Value_fromString(str: string): Value | undefined {
    switch (str) {
      case "UNSPECIFIED":
      case "DRIVER_CANCELLED":
      case "RIDER_CANCELLED":
      return str
      default: return undefined
    }
  }
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

export namespace TripTypeDescription {
  export function fromObject(obj: any): TripTypeDescription {
    return {
      ...obj,
      value: TripTypeDescription.TripType_fromString(obj.value),
    }
  }

  export type TripType = 'UNSPECIFIED' | 'AIR' | 'CHARTER' | 'VAN';

  export function TripType_fromString(str: string): TripType | undefined {
    switch (str) {
      case "UNSPECIFIED":
      case "AIR":
      case "CHARTER":
      case "VAN":
      return str
      default: return undefined
    }
  }
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

export namespace TripReceipt {
  export function fromObject(obj: any): TripReceipt {
    return {
      ...obj,
      lineItems: obj.lineItems.map((v: any) => TripReceipt.LineItem.fromObject(v)),
      totalPriceKRW: obj.totalPriceKRW != null ? Int32Value.fromObject(obj.totalPriceKRW) : undefined,
      driverProfitKRW: obj.driverProfitKRW != null ? Int32Value.fromObject(obj.driverProfitKRW) : undefined,
      cancellationFeeDescription: obj.cancellationFeeDescription != null ? StringValue.fromObject(obj.cancellationFeeDescription) : undefined,
    }
  }

  export interface LineItem {
    name: string;
    amountKRW: number;
  }

  export namespace LineItem {
    export function fromObject(obj: any): LineItem {
      return {
        ...obj,
      }
    }
  }
}

export interface TripReceiptPrefilledEntry {
  type?: TripReceiptPrefilledEntry.Type;
  amountKRW: number;
}

export namespace TripReceiptPrefilledEntry {
  export function fromObject(obj: any): TripReceiptPrefilledEntry {
    return {
      ...obj,
      type: TripReceiptPrefilledEntry.Type_fromString(obj.type),
    }
  }

  export type Type = 'UNSPECIFIED' | 'PARKING' | 'TOLL';

  export function Type_fromString(str: string): Type | undefined {
    switch (str) {
      case "UNSPECIFIED":
      case "PARKING":
      case "TOLL":
      return str
      default: return undefined
    }
  }
}

/**
 *  현재 Trip이 완료된 후, 주행에 대한 정보를 담고 있는 객체.
 */
export interface TripRoute {
  durationSeconds: number;
  distanceMeters: number;
}

export namespace TripRoute {
  export function fromObject(obj: any): TripRoute {
    return {
      ...obj,
    }
  }
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

export namespace TripDTO {
  export function fromObject(obj: any): TripDTO {
    return {
      ...obj,
      typeDescription: obj.typeDescription != null ? TripTypeDescription.fromObject(obj.typeDescription) : undefined,
      tripRideStatus: TripDTO.TripRideStatus_fromString(obj.tripRideStatus),
      version: obj.version.toString(),
      sequenceNumber: obj.sequenceNumber.toString(),
      detailItems: obj.detailItems.map((v: any) => TripDTO.DetailItem.fromObject(v)),
      comment: obj.comment != null ? StringValue.fromObject(obj.comment) : undefined,
      waypoint: obj.waypoint != null ? StringValue.fromObject(obj.waypoint) : undefined,
      origin: obj.origin != null ? AddressedLocation.fromObject(obj.origin) : undefined,
      originDetails: obj.originDetails != null ? StringValue.fromObject(obj.originDetails) : undefined,
      pickup: obj.pickup != null ? AddressedLocation.fromObject(obj.pickup) : undefined,
      destination: obj.destination != null ? AddressedLocation.fromObject(obj.destination) : undefined,
      destinationDetails: obj.destinationDetails != null ? StringValue.fromObject(obj.destinationDetails) : undefined,
      dropoff: obj.dropoff != null ? AddressedLocation.fromObject(obj.dropoff) : undefined,
      cancellationCause: obj.cancellationCause != null ? TripCancellationCause.fromObject(obj.cancellationCause) : undefined,
      rider: obj.rider != null ? UserDTO.fromObject(obj.rider) : undefined,
      driver: obj.driver != null ? DriverDTO.fromObject(obj.driver) : undefined,
      riderRealPhoneNumber: obj.riderRealPhoneNumber != null ? StringValue.fromObject(obj.riderRealPhoneNumber) : undefined,
      acceptedAt: obj.acceptedAt != null ? Timestamp.fromObject(obj.acceptedAt) : undefined,
      arrivedAt: obj.arrivedAt != null ? Timestamp.fromObject(obj.arrivedAt) : undefined,
      pickUpScheduledAt: obj.pickUpScheduledAt != null ? Timestamp.fromObject(obj.pickUpScheduledAt) : undefined,
      pickedUpAt: obj.pickedUpAt != null ? Timestamp.fromObject(obj.pickedUpAt) : undefined,
      droppedOffAt: obj.droppedOffAt != null ? Timestamp.fromObject(obj.droppedOffAt) : undefined,
      approachingDestinationSince: obj.approachingDestinationSince != null ? Timestamp.fromObject(obj.approachingDestinationSince) : undefined,
      leavingOriginSince: obj.leavingOriginSince != null ? Timestamp.fromObject(obj.leavingOriginSince) : undefined,
      route: obj.route != null ? TripRoute.fromObject(obj.route) : undefined,
      receipt: obj.receipt != null ? TripReceipt.fromObject(obj.receipt) : undefined,
      receiptPrefilledEntries: obj.receiptPrefilledEntries.map((v: any) => TripReceiptPrefilledEntry.fromObject(v)),
      paymentMethod: obj.paymentMethod != null ? PaymentMethodDTO.fromObject(obj.paymentMethod) : undefined,
      paymentProfile: obj.paymentProfile != null ? PaymentProfileDTO.fromObject(obj.paymentProfile) : undefined,
      km: obj.km != null ? Int32Value.fromObject(obj.km) : undefined,
      cancelDescription: obj.cancelDescription != null ? StringValue.fromObject(obj.cancelDescription) : undefined,
    }
  }

  export type TripRideStatus = 'UNSPECIFIED' | 'PENDING' | 'ACCEPTED' | 'ARRIVED' | 'PICKED_UP' | 'DROPPED_OFF' | 'CANCELED';

  export function TripRideStatus_fromString(str: string): TripRideStatus | undefined {
    switch (str) {
      case "UNSPECIFIED":
      case "PENDING":
      case "ACCEPTED":
      case "ARRIVED":
      case "PICKED_UP":
      case "DROPPED_OFF":
      case "CANCELED":
      return str
      default: return undefined
    }
  }

  export interface DetailItem {
    key: string;
    value: string;
  }

  export namespace DetailItem {
    export function fromObject(obj: any): DetailItem {
      return {
        ...obj,
      }
    }
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

export namespace TripVehicle {
  export function fromObject(obj: any): TripVehicle {
    return {
      ...obj,
      type: TripVehicle.TripVehicleType_fromString(obj.type),
      image: obj.image != null ? Image.fromObject(obj.image) : undefined,
      slideImages: obj.slideImages.map((v: any) => Image.fromObject(v)),
    }
  }

  export type TripVehicleType = 'CARNIVAL' | 'SPRINTER' | 'SOLATI' | 'SEDAN';

  export function TripVehicleType_fromString(str: string): TripVehicleType | undefined {
    switch (str) {
      case "CARNIVAL":
      case "SPRINTER":
      case "SOLATI":
      case "SEDAN":
      return str
      default: return undefined
    }
  }
}

export interface TripAddressedLocation {
  location?: AddressedLocation;
  details?: StringValue;
}

export namespace TripAddressedLocation {
  export function fromObject(obj: any): TripAddressedLocation {
    return {
      ...obj,
      location: obj.location != null ? AddressedLocation.fromObject(obj.location) : undefined,
      details: obj.details != null ? StringValue.fromObject(obj.details) : undefined,
    }
  }
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

export namespace TripLuggage {
  export function fromObject(obj: any): TripLuggage {
    return {
      ...obj,
    }
  }
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

export namespace TripEstimation {
  export function fromObject(obj: any): TripEstimation {
    return {
      ...obj,
      basicFeeDiscountType: TripEstimation.TripBasicFeeDiscountType_fromString(obj.basicFeeDiscountType),
      bizDiscountPercentage: obj.bizDiscountPercentage != null ? StringValue.fromObject(obj.bizDiscountPercentage) : undefined,
    }
  }

  export type TripBasicFeeDiscountType = 'UNSPECIFIED' | 'DATE_TIME' | 'EMPLOYEE' | 'AIR_DEAL' | 'EARLY_BIRD' | 'MEMBERSHIP';

  export function TripBasicFeeDiscountType_fromString(str: string): TripBasicFeeDiscountType | undefined {
    switch (str) {
      case "UNSPECIFIED":
      case "DATE_TIME":
      case "EMPLOYEE":
      case "AIR_DEAL":
      case "EARLY_BIRD":
      case "MEMBERSHIP":
      return str
      default: return undefined
    }
  }
}

export interface TripRider {
  name: string;
  phoneNumber: string;
}

export namespace TripRider {
  export function fromObject(obj: any): TripRider {
    return {
      ...obj,
    }
  }
}

export interface TripAvailableDatetime {
  isAvailable: boolean;
  datetime?: Timestamp;
  priceRate: number;
  dropOffAt?: Timestamp;
}

export namespace TripAvailableDatetime {
  export function fromObject(obj: any): TripAvailableDatetime {
    return {
      ...obj,
      datetime: obj.datetime != null ? Timestamp.fromObject(obj.datetime) : undefined,
      dropOffAt: obj.dropOffAt != null ? Timestamp.fromObject(obj.dropOffAt) : undefined,
    }
  }
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

export namespace TripReservation {
  export function fromObject(obj: any): TripReservation {
    return {
      ...obj,
      type: TripTypeDescription.TripType_fromString(obj.type),
      status: TripReservation.TripReservationStatus_fromString(obj.status),
      rideStatus: TripDTO.TripRideStatus_fromString(obj.rideStatus),
      pickUpAt: obj.pickUpAt != null ? Timestamp.fromObject(obj.pickUpAt) : undefined,
      vehicle: obj.vehicle != null ? TripVehicle.fromObject(obj.vehicle) : undefined,
      origin: obj.origin != null ? TripAddressedLocation.fromObject(obj.origin) : undefined,
      waypoints: obj.waypoints.map((v: any) => TripAddressedLocation.fromObject(v)),
      destination: obj.destination != null ? TripAddressedLocation.fromObject(obj.destination) : undefined,
      driverName: obj.driverName != null ? StringValue.fromObject(obj.driverName) : undefined,
      driverInformation: obj.driverInformation.map((v: any) => TripReservation.LineItem.fromObject(v)),
      reviewRating: obj.reviewRating != null ? Int32Value.fromObject(obj.reviewRating) : undefined,
      riderInformation: obj.riderInformation.map((v: any) => TripReservation.LineItem.fromObject(v)),
      reservationInformation: obj.reservationInformation.map((v: any) => TripReservation.LineItem.fromObject(v)),
      comment: obj.comment != null ? StringValue.fromObject(obj.comment) : undefined,
      designatedDriverComment: obj.designatedDriverComment != null ? StringValue.fromObject(obj.designatedDriverComment) : undefined,
      bizReason: obj.bizReason != null ? StringValue.fromObject(obj.bizReason) : undefined,
      payment: obj.payment != null ? TripReservation.Payment.fromObject(obj.payment) : undefined,
      receipt: obj.receipt != null ? TripReceipt.fromObject(obj.receipt) : undefined,
      additionalPayment: obj.additionalPayment != null ? TripReservation.Payment.fromObject(obj.additionalPayment) : undefined,
      additionalReceipt: obj.additionalReceipt != null ? TripReceipt.fromObject(obj.additionalReceipt) : undefined,
      refundPayment: obj.refundPayment != null ? TripReservation.Payment.fromObject(obj.refundPayment) : undefined,
      refundReceipt: obj.refundReceipt != null ? TripReceipt.fromObject(obj.refundReceipt) : undefined,
      tipPayment: obj.tipPayment != null ? TripReservation.Payment.fromObject(obj.tipPayment) : undefined,
      tipReceipt: obj.tipReceipt != null ? TripReceipt.fromObject(obj.tipReceipt) : undefined,
      previousPayment: obj.previousPayment != null ? TripReservation.Payment.fromObject(obj.previousPayment) : undefined,
      previousReceipt: obj.previousReceipt != null ? TripReceipt.fromObject(obj.previousReceipt) : undefined,
      minute: obj.minute != null ? Int32Value.fromObject(obj.minute) : undefined,
      feePerHour: obj.feePerHour != null ? Int32Value.fromObject(obj.feePerHour) : undefined,
    }
  }

  export type TripReservationStatus = 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';

  export function TripReservationStatus_fromString(str: string): TripReservationStatus | undefined {
    switch (str) {
      case "PENDING":
      case "CONFIRMED":
      case "COMPLETED":
      case "CANCELLED":
      return str
      default: return undefined
    }
  }

  export interface LineItem {
    name: string;
    value: string;
  }

  export namespace LineItem {
    export function fromObject(obj: any): LineItem {
      return {
        ...obj,
      }
    }
  }

  export interface Payment {
    method?: PaymentMethodDTO;
    profile?: PaymentProfileDTO;
  }

  export namespace Payment {
    export function fromObject(obj: any): Payment {
      return {
        ...obj,
        method: obj.method != null ? PaymentMethodDTO.fromObject(obj.method) : undefined,
        profile: obj.profile != null ? PaymentProfileDTO.fromObject(obj.profile) : undefined,
      }
    }
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

export namespace TripProduct {
  export function fromObject(obj: any): TripProduct {
    return {
      ...obj,
      image: obj.image != null ? Image.fromObject(obj.image) : undefined,
      vehicle: obj.vehicle != null ? TripVehicle.fromObject(obj.vehicle) : undefined,
      hourUnit: obj.hourUnit != null ? Int32Value.fromObject(obj.hourUnit) : undefined,
      originalMinCost: obj.originalMinCost != null ? Int32Value.fromObject(obj.originalMinCost) : undefined,
      productNotices: obj.productNotices.map((v: any) => TripProduct.LineItem.fromObject(v)),
      luggageDescription: obj.luggageDescription != null ? TripProduct.LuggageDescription.fromObject(obj.luggageDescription) : undefined,
      rideFluxDescription: obj.rideFluxDescription != null ? TripProduct.RideFluxDescription.fromObject(obj.rideFluxDescription) : undefined,
    }
  }

  export interface RideFluxDescription {
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

  export namespace RideFluxDescription {
    export function fromObject(obj: any): RideFluxDescription {
      return {
        ...obj,
        schedules: obj.schedules.map((v: any) => TripProduct.RideFluxDescription.Schedule.fromObject(v)),
        faqs: obj.faqs.map((v: any) => TripProduct.RideFluxDescription.Faq.fromObject(v)),
      }
    }

    export interface Schedule {
      subheading: string;
      times: string[];
    }

    export namespace Schedule {
      export function fromObject(obj: any): Schedule {
        return {
          ...obj,
        }
      }
    }

    export interface Faq {
      title: string;
      body: string;
    }

    export namespace Faq {
      export function fromObject(obj: any): Faq {
        return {
          ...obj,
        }
      }
    }
  }

  export interface LineItem {
    key: string;
    value: string;
  }

  export namespace LineItem {
    export function fromObject(obj: any): LineItem {
      return {
        ...obj,
      }
    }
  }

  export interface LuggageDescription {
    small: string;
    medium: string;
    large: string;
  }

  export namespace LuggageDescription {
    export function fromObject(obj: any): LuggageDescription {
      return {
        ...obj,
      }
    }
  }
}
