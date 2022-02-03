/* eslint-disable */
import { StringValue, DoubleValue, UInt32Value, BoolValue, Int32Value } from './wrappers';
import { Timestamp } from './timestamp';


export type DriverActivityStatus = 'OFF' | 'IDLE' | 'DISPATCHING' | 'RIDING' | 'TRIP_RIDING';

export function DriverActivityStatus_fromString(str: string): DriverActivityStatus | undefined {
  switch (str) {
    case "OFF":
    case "IDLE":
    case "DISPATCHING":
    case "RIDING":
    case "TRIP_RIDING":
    return str
    default: return undefined
  }
}

export type DriverLevel = 'BASIC' | 'GOOD' | 'BEST' | 'PERFECT';

export function DriverLevel_fromString(str: string): DriverLevel | undefined {
  switch (str) {
    case "BASIC":
    case "GOOD":
    case "BEST":
    case "PERFECT":
    return str
    default: return undefined
  }
}

export type SmartKeyCommand = 'OPEN' | 'CLOSE' | 'LIGHT' | 'KLAXON';

export function SmartKeyCommand_fromString(str: string): SmartKeyCommand | undefined {
  switch (str) {
    case "OPEN":
    case "CLOSE":
    case "LIGHT":
    case "KLAXON":
    return str
    default: return undefined
  }
}

export type ShareChannel = 'COPY' | 'KAKAO_TALK' | 'LINE' | 'FB_MSG' | 'BETWEEN' | 'SMS' | 'WHATS_APP' | 'EMAIL' | 'ETC';

export function ShareChannel_fromString(str: string): ShareChannel | undefined {
  switch (str) {
    case "COPY":
    case "KAKAO_TALK":
    case "LINE":
    case "FB_MSG":
    case "BETWEEN":
    case "SMS":
    case "WHATS_APP":
    case "EMAIL":
    case "ETC":
    return str
    default: return undefined
  }
}

/**
 *  어시스트 등록 타입
 *
 * SENIOR : 
   *  65세 이상인 경우
 * DISABLED_PERSON : 
   *  장애인 회원인 경우
 */
export type AssistRegistrationType = 'SENIOR' | 'DISABLED_PERSON';

export function AssistRegistrationType_fromString(str: string): AssistRegistrationType | undefined {
  switch (str) {
    case "SENIOR":
    case "DISABLED_PERSON":
    return str
    default: return undefined
  }
}

export type AirportCode = 'ICN_1' | 'ICN_2' | 'GMP_INTERNATIONAL' | 'GMP_DOMESTIC' | 'CJU_INTERNATIONAL' | 'CJU_DOMESTIC' | 'PUS_INTERNATIONAL' | 'PUS_DOMESTIC';

export function AirportCode_fromString(str: string): AirportCode | undefined {
  switch (str) {
    case "ICN_1":
    case "ICN_2":
    case "GMP_INTERNATIONAL":
    case "GMP_DOMESTIC":
    case "CJU_INTERNATIONAL":
    case "CJU_DOMESTIC":
    case "PUS_INTERNATIONAL":
    case "PUS_DOMESTIC":
    return str
    default: return undefined
  }
}

export type DaeriTransportationMedium = 'WALK' | 'KICKBOARD' | 'CAR';

export function DaeriTransportationMedium_fromString(str: string): DaeriTransportationMedium | undefined {
  switch (str) {
    case "WALK":
    case "KICKBOARD":
    case "CAR":
    return str
    default: return undefined
  }
}

export interface Location {
  lng: number;
  lat: number;
}

export namespace Location {
  export function fromObject(obj: any): Location {
    return {
      ...obj,
    }
  }
}

export interface AddressedLocation {
  lng: number;
  lat: number;
  name: string;
  address: string;
  addressDetail?: AddressDetail;
}

export namespace AddressedLocation {
  export function fromObject(obj: any): AddressedLocation {
    return {
      ...obj,
      addressDetail: obj.addressDetail != null ? AddressDetail.fromObject(obj.addressDetail) : undefined,
    }
  }
}

export interface AddressDetail {
  siDo?: StringValue;
  siGunGu?: StringValue;
  eupMyeonDong?: StringValue;
  ri?: StringValue;
  beonji?: StringValue;
  zipCode?: StringValue;
  poiName?: StringValue;
}

export namespace AddressDetail {
  export function fromObject(obj: any): AddressDetail {
    return {
      ...obj,
      siDo: obj.siDo != null ? StringValue.fromObject(obj.siDo) : undefined,
      siGunGu: obj.siGunGu != null ? StringValue.fromObject(obj.siGunGu) : undefined,
      eupMyeonDong: obj.eupMyeonDong != null ? StringValue.fromObject(obj.eupMyeonDong) : undefined,
      ri: obj.ri != null ? StringValue.fromObject(obj.ri) : undefined,
      beonji: obj.beonji != null ? StringValue.fromObject(obj.beonji) : undefined,
      zipCode: obj.zipCode != null ? StringValue.fromObject(obj.zipCode) : undefined,
      poiName: obj.poiName != null ? StringValue.fromObject(obj.poiName) : undefined,
    }
  }
}

export interface VehicleLocation {
  lng: number;
  lat: number;
  bearing: number;
  speedMeterPerSecond: number;
}

export namespace VehicleLocation {
  export function fromObject(obj: any): VehicleLocation {
    return {
      ...obj,
    }
  }
}

export interface VehicleDTO {
  id: string;
  model: string;
  licensePlate: string;
  iconColor?: VehicleDTO.IconColor;
  /**
   *  XX:XX:XX:XX:XX:XX 형태
   */
  emptyLightMacAddress?: StringValue;
}

export namespace VehicleDTO {
  export function fromObject(obj: any): VehicleDTO {
    return {
      ...obj,
      iconColor: VehicleDTO.IconColor_fromString(obj.iconColor),
      emptyLightMacAddress: obj.emptyLightMacAddress != null ? StringValue.fromObject(obj.emptyLightMacAddress) : undefined,
    }
  }

  export type IconColor = 'LIGHT' | 'DARK';

  export function IconColor_fromString(str: string): IconColor | undefined {
    switch (str) {
      case "LIGHT":
      case "DARK":
      return str
      default: return undefined
    }
  }
}

export interface VehicleZoneDTO {
  id: string;
  name: string;
  location?: AddressedLocation;
}

export namespace VehicleZoneDTO {
  export function fromObject(obj: any): VehicleZoneDTO {
    return {
      ...obj,
      location: obj.location != null ? AddressedLocation.fromObject(obj.location) : undefined,
    }
  }
}

export interface UserDTO {
  id: string;
  email: string;
  name: string;
  phoneNumber: string;
  createdAt: string;
}

export namespace UserDTO {
  export function fromObject(obj: any): UserDTO {
    return {
      ...obj,
      createdAt: obj.createdAt.toString(),
    }
  }
}

export interface UserStatusDTO {
  /**
   *  유저에게 유효한 전화번호가 있는지 확인할 수 있다.
   *  만약 유효한 전화번호가 없다면 배차 호출을 할 수 없으며 전화번호 인증을 받아야 한다.
   */
  isPhoneNumberVerified: boolean;
  /**
   *  유저에게 거래 수단이 있는지 확인할 수 있다.
   *  만약 거래수단이 없다면 배차 호출을 할 수 없으며 결제 수단을 등록해야한다.
   */
  hasPaymentMethod: boolean;
  /**
   *  유저에게 미수금이 있는지 확인할 수 있다.
   *  미수금이 있다면 미수금을 해결해야 배차 호출을 할 수 있다.
   */
  hasFailedPayment: boolean;
  /**
   *  유저에게 새로 수락해야하는 약관이 있는지 여부를 내려준다.
   *  수락해야할 약관이 있다면 GetUpdatedTermsPopupContent를 호출해 약관 동의 팝업을 띄워야 한다.
   */
  hasUpdatedTerms: boolean;
}

export namespace UserStatusDTO {
  export function fromObject(obj: any): UserStatusDTO {
    return {
      ...obj,
    }
  }
}

export interface DriverDTO {
  id: string;
  email: string;
  name: string;
  phoneNumber: string;
  profileUrl: string;
  createdAt: string;
  agency?: DriverAgencyDTO;
  rating?: DoubleValue;
}

export namespace DriverDTO {
  export function fromObject(obj: any): DriverDTO {
    return {
      ...obj,
      createdAt: obj.createdAt.toString(),
      agency: obj.agency != null ? DriverAgencyDTO.fromObject(obj.agency) : undefined,
      rating: obj.rating != null ? DoubleValue.fromObject(obj.rating) : undefined,
    }
  }
}

export interface DriverAgencyDTO {
  id: string;
  name: string;
}

export namespace DriverAgencyDTO {
  export function fromObject(obj: any): DriverAgencyDTO {
    return {
      ...obj,
    }
  }
}

export interface DriverLevelDescription {
  /**
   *  드라이버 레벨
   *  BASIC, GOOD, BEST, PERFECT 등의 값이 올 수 있다.
   */
  value?: DriverLevel;
  /**
   *  실제 화면에 보여줄 문자열 사람이 알아볼 수 있는 값들
   *  베이직, 굿, 베스트, 퍼펙트 등의 값이 올 수 있다.
   */
  name: string;
}

export namespace DriverLevelDescription {
  export function fromObject(obj: any): DriverLevelDescription {
    return {
      ...obj,
      value: DriverLevel_fromString(obj.value),
    }
  }
}

export interface DriverStatusDTO {
  activityStatus?: DriverActivityStatus;
  /**
   *  드라이버 레벨 정보
   */
  level?: DriverLevelDescription;
  /**
   *  드라이버의 평균 평점. 주기적으로 업데이트 된다.
   *  기본적으로 0.0 부터 10.0 사이의 숫자가 들어오게 된다.
   *  드라이버가 운행을 한 번도 안했거나 아직 리뷰가 안 쌓였으면 null로 내려가므로 이런 경우 클라이언트가 적당히 처리해야한다.
   */
  rating?: DoubleValue;
  /**
   *  드라이버의 평균 예약 평점. 주기적으로 업데이트 된다.
   *  기본적으로 0.0 부터 10.0 사이의 숫자가 들어오게 된다.
   *  드라이버가 운행을 한 번도 안했거나 아직 리뷰가 안 쌓였으면 null로 내려가므로 이런 경우 클라이언트가 적당히 처리해야한다.
   */
  tripRating?: DoubleValue;
  /**
   *  할당된 대기 지역
   *  assignedArea.address는 empty string이 내려간다.
   *  assignedArea.name은 empty string일 수 있다.
   */
  assignedArea?: AddressedLocation;
  assignedAreaViewInfo?: DriverStatusDTO.AssignedAreaViewInfo;
  /**
   *  드라이버의 타입을 내려준다.
   *  VIPVAN: VIPVAN(택시) 드라이버 (기존 isPrivate으로 내려주고 있었음)
   *  ASSIST: 어시스트 상품 드라이버
   */
  type?: DriverStatusDTO.DriverType;
  /**
   *  차고지
   */
  vehicleZone?: VehicleZoneDTO;
  /**
   *  Trip 차고지로 돌아가기 기능 활성화되는지 알려준다.
   */
  hasTripReturning: boolean;
  /**
   *  예약 예정되었던 Trip 수
   */
  scheduledTripCount?: UInt32Value;
  /**
   *  개인사업자 여부
   */
  isIndividualBusiness: boolean;
  /**
   *  본인인증 완료 여부
   */
  isIdentityCertificated: boolean;
  /**
   *  예약 수행만 가능한 드라이버인지 여부.
   */
  isTripOnly?: BoolValue;
  /**
   *  변경된 약관이 있는지 여부.
   *  true로 내려가면 출근하기 전에 DriverGetUpdatedTerms API로 내려가는 약관에 대해 동의를 받아야 한다.
   */
  hasUpdatedTerms?: BoolValue;
  /**
   *  변경된 요금 정산 방식이 있는지 여부.
   *  true로 내려가면 출근하기 전에 DriverGetUpdatedFeeTerms API로 내려가는 요금 정산 방식에 대해 동의를 받아야 한다.
   */
  hasUpdatedFeeTerms?: BoolValue;
  /**
   *  포워드 디스패치 수신중 여부
   */
  isForwardDispatchEnabled?: BoolValue;
}

export namespace DriverStatusDTO {
  export function fromObject(obj: any): DriverStatusDTO {
    return {
      ...obj,
      activityStatus: DriverActivityStatus_fromString(obj.activityStatus),
      level: obj.level != null ? DriverLevelDescription.fromObject(obj.level) : undefined,
      rating: obj.rating != null ? DoubleValue.fromObject(obj.rating) : undefined,
      tripRating: obj.tripRating != null ? DoubleValue.fromObject(obj.tripRating) : undefined,
      assignedArea: obj.assignedArea != null ? AddressedLocation.fromObject(obj.assignedArea) : undefined,
      assignedAreaViewInfo: obj.assignedAreaViewInfo != null ? DriverStatusDTO.AssignedAreaViewInfo.fromObject(obj.assignedAreaViewInfo) : undefined,
      type: DriverStatusDTO.DriverType_fromString(obj.type),
      vehicleZone: obj.vehicleZone != null ? VehicleZoneDTO.fromObject(obj.vehicleZone) : undefined,
      scheduledTripCount: obj.scheduledTripCount != null ? UInt32Value.fromObject(obj.scheduledTripCount) : undefined,
      isTripOnly: obj.isTripOnly != null ? BoolValue.fromObject(obj.isTripOnly) : undefined,
      hasUpdatedTerms: obj.hasUpdatedTerms != null ? BoolValue.fromObject(obj.hasUpdatedTerms) : undefined,
      hasUpdatedFeeTerms: obj.hasUpdatedFeeTerms != null ? BoolValue.fromObject(obj.hasUpdatedFeeTerms) : undefined,
      isForwardDispatchEnabled: obj.isForwardDispatchEnabled != null ? BoolValue.fromObject(obj.isForwardDispatchEnabled) : undefined,
    }
  }

  export type DriverType = 'BASIC' | 'ASSIST' | 'VIPVAN' | 'PREMIUM' | 'GIG' | 'LITE' | 'NXT';

  export function DriverType_fromString(str: string): DriverType | undefined {
    switch (str) {
      case "BASIC":
      case "ASSIST":
      case "VIPVAN":
      case "PREMIUM":
      case "GIG":
      case "LITE":
      case "NXT":
      return str
      default: return undefined
    }
  }

  export interface AssignedAreaViewInfo {
    foldedViewSuggestionReason: string;
    expandedViewSuggestionReason: string;
    navigateButtonText: string;
    surgeInfo?: DriverStatusDTO.AssignedAreaViewInfo.SurgeInfo;
  }

  export namespace AssignedAreaViewInfo {
    export function fromObject(obj: any): AssignedAreaViewInfo {
      return {
        ...obj,
        surgeInfo: obj.surgeInfo != null ? DriverStatusDTO.AssignedAreaViewInfo.SurgeInfo.fromObject(obj.surgeInfo) : undefined,
      }
    }

    export interface SurgeInfo {
      suggestionSurgeRateText: string;
      suggestionSurgeValidBeforeText: string;
    }

    export namespace SurgeInfo {
      export function fromObject(obj: any): SurgeInfo {
        return {
          ...obj,
        }
      }
    }
  }
}

export interface DriverSocarStatusDTO {
  /**
   *  결제수단
   */
  paymentMethod?: DriverPaymentMethodDTO;
  /**
   *  운전면허
   */
  driverLicense?: DriverLicenseDTO;
  /**
   *  드라이버 PF 구매 여부
   *  이 필드는 드라이버가 PF 구매를 해야하는 상태인지 아닌지 나타낸다.
   *  이미 필요한 금액을 결제한 경우, true로 내려간다.
   */
  isDriverProtectionFeeProductPurchased: boolean;
  /**
   *  드라이버 PF 강제 구매 여부
   *  만약 설정되어 있지 않다면 PF 관련 화면을 띄우지 않습니다.
   */
  isDriverProtectionFeeProductPurchaseRequired?: BoolValue;
  /**
   *  드라이버 PF 약관 동의 여부
   */
  isDriverProtectionFeeProductTermsAgreed: boolean;
  /**
   *  현재 구매한 PF 상품
   *  이미 필요한 금액을 결제한 경우, 해당일 마지막 PF 결제건이 내려간다.
   */
  driverProtectionFeeProductPurchase?: DriverProtectionFeeProductPurchaseDTO;
}

export namespace DriverSocarStatusDTO {
  export function fromObject(obj: any): DriverSocarStatusDTO {
    return {
      ...obj,
      paymentMethod: obj.paymentMethod != null ? DriverPaymentMethodDTO.fromObject(obj.paymentMethod) : undefined,
      driverLicense: obj.driverLicense != null ? DriverLicenseDTO.fromObject(obj.driverLicense) : undefined,
      isDriverProtectionFeeProductPurchaseRequired: obj.isDriverProtectionFeeProductPurchaseRequired != null ? BoolValue.fromObject(obj.isDriverProtectionFeeProductPurchaseRequired) : undefined,
      driverProtectionFeeProductPurchase: obj.driverProtectionFeeProductPurchase != null ? DriverProtectionFeeProductPurchaseDTO.fromObject(obj.driverProtectionFeeProductPurchase) : undefined,
    }
  }
}

export interface DriverInsuranceInformationDTO {
  /**
   *  보험사
   */
  insuranceCompanyName: string;
  /**
   *  증권번호
   */
  policyNumber: string;
  /**
   *  시작날짜 (YYYY-MM-DD)
   */
  startDate: string;
  /**
   *  종료날짜 (YYYY-MM-DD)
   */
  endDate: string;
  /**
   *  건당 보험료
   */
  premiumAmount: number;
}

export namespace DriverInsuranceInformationDTO {
  export function fromObject(obj: any): DriverInsuranceInformationDTO {
    return {
      ...obj,
    }
  }
}

export interface DriverLicenseDTO {
  status?: DriverLicenseDTO.Status;
  /**
   *  면허 번호
   */
  licenseNumber: string;
  /**
   *  면허 만료일 (ISO8601 Local Date ex. yyyy-MM-dd)
   */
  expirationDate: string;
}

export namespace DriverLicenseDTO {
  export function fromObject(obj: any): DriverLicenseDTO {
    return {
      ...obj,
      status: DriverLicenseDTO.Status_fromString(obj.status),
    }
  }

  /**
   *  면허 상태
   *
   */
  export type Status = 'ACTIVE' | 'PENDING' | 'EXPIRED' | 'DISABLED';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "ACTIVE":
      case "PENDING":
      case "EXPIRED":
      case "DISABLED":
      return str
      default: return undefined
    }
  }
}

export interface DriverPaymentMethodDTO {
  id: string;
  status?: DriverPaymentMethodDTO.Status;
  createdAt: string;
  card?: PaymentMethodDTO.Card;
}

export namespace DriverPaymentMethodDTO {
  export function fromObject(obj: any): DriverPaymentMethodDTO {
    return {
      ...obj,
      status: DriverPaymentMethodDTO.Status_fromString(obj.status),
      createdAt: obj.createdAt.toString(),
      card: obj.card != null ? PaymentMethodDTO.Card.fromObject(obj.card) : undefined,
    }
  }

  /**
   *  카드 상태
   *
   */
  export type Status = 'ACTIVE' | 'DISABLED';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "ACTIVE":
      case "DISABLED":
      return str
      default: return undefined
    }
  }
}

export interface DriverProtectionFeeProductPurchaseDTO {
  id: string;
  status?: DriverProtectionFeeProductPurchaseDTO.Status;
  purchasedAt: string;
  product?: DriverProtectionFeeProductDTO;
}

export namespace DriverProtectionFeeProductPurchaseDTO {
  export function fromObject(obj: any): DriverProtectionFeeProductPurchaseDTO {
    return {
      ...obj,
      status: DriverProtectionFeeProductPurchaseDTO.Status_fromString(obj.status),
      purchasedAt: obj.purchasedAt.toString(),
      product: obj.product != null ? DriverProtectionFeeProductDTO.fromObject(obj.product) : undefined,
    }
  }

  export type Status = 'ACTIVE' | 'CANCELLED' | 'UNAVAILABLE';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "ACTIVE":
      case "CANCELLED":
      case "UNAVAILABLE":
      return str
      default: return undefined
    }
  }
}

export interface DriverProtectionFeeProductDTO {
  id: string;
  priceKRW: number;
}

export namespace DriverProtectionFeeProductDTO {
  export function fromObject(obj: any): DriverProtectionFeeProductDTO {
    return {
      ...obj,
    }
  }
}

export interface DriverScheduleDTO {
  startAt: string;
  endAt: string;
  vehicleZone?: VehicleZoneDTO;
  /**
   *  배차 받을 예정인 차량.
   *  이미 드라이버가 운행 중인 차량과는 의미적으로 구분되어진다.
   *  배차 받을 예정인 차량이 없으면 null로 내려간다.
   */
  vehicle?: VehicleDTO;
}

export namespace DriverScheduleDTO {
  export function fromObject(obj: any): DriverScheduleDTO {
    return {
      ...obj,
      startAt: obj.startAt.toString(),
      endAt: obj.endAt.toString(),
      vehicleZone: obj.vehicleZone != null ? VehicleZoneDTO.fromObject(obj.vehicleZone) : undefined,
      vehicle: obj.vehicle != null ? VehicleDTO.fromObject(obj.vehicle) : undefined,
    }
  }
}

export interface PaymentMethodDTO {
  id: string;
  status?: PaymentMethodDTO.Status;
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

export namespace PaymentMethodDTO {
  export function fromObject(obj: any): PaymentMethodDTO {
    return {
      ...obj,
      status: PaymentMethodDTO.Status_fromString(obj.status),
      type: PaymentMethodDTO.Type_fromString(obj.type),
      createdAt: obj.createdAt.toString(),
      card: obj.card != null ? PaymentMethodDTO.Card.fromObject(obj.card) : undefined,
      bizCard: obj.bizCard != null ? PaymentMethodDTO.BizCard.fromObject(obj.bizCard) : undefined,
      bizCredit: obj.bizCredit != null ? PaymentMethodDTO.BizCredit.fromObject(obj.bizCredit) : undefined,
      tossAppPay: obj.tossAppPay != null ? PaymentMethodDTO.TossAppPay.fromObject(obj.tossAppPay) : undefined,
    }
  }

  export type Status = 'ACTIVE' | 'EXPIRED' | 'PAYMENT_FAILED' | 'DISABLED';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "ACTIVE":
      case "EXPIRED":
      case "PAYMENT_FAILED":
      case "DISABLED":
      return str
      default: return undefined
    }
  }

  export type Type = 'CARD' | 'BIZ_CARD' | 'BIZ_CREDIT' | 'TOSS_APP';

  export function Type_fromString(str: string): Type | undefined {
    switch (str) {
      case "CARD":
      case "BIZ_CARD":
      case "BIZ_CREDIT":
      case "TOSS_APP":
      return str
      default: return undefined
    }
  }

  export type CardType = 'CORPORATION' | 'PERSONAL' | 'UNSPECIFIED';

  export function CardType_fromString(str: string): CardType | undefined {
    switch (str) {
      case "CORPORATION":
      case "PERSONAL":
      case "UNSPECIFIED":
      return str
      default: return undefined
    }
  }

  export type CardPartialNumberType = 'SUFFIX' | 'PREFIX';

  export function CardPartialNumberType_fromString(str: string): CardPartialNumberType | undefined {
    switch (str) {
      case "SUFFIX":
      case "PREFIX":
      return str
      default: return undefined
    }
  }

  export interface CardExpiry {
    /**
     *  2자리 연도
     */
    year: number;
    month: number;
  }

  export namespace CardExpiry {
    export function fromObject(obj: any): CardExpiry {
      return {
        ...obj,
      }
    }
  }

  export interface Card {
    type?: PaymentMethodDTO.CardType;
    publisher: string;
    /**
     *  카드의 앞자리 혹은 뒷자리
     */
    partialNumber: string;
    partialNumberType?: PaymentMethodDTO.CardPartialNumberType;
  }

  export namespace Card {
    export function fromObject(obj: any): Card {
      return {
        ...obj,
        type: PaymentMethodDTO.CardType_fromString(obj.type),
        partialNumberType: PaymentMethodDTO.CardPartialNumberType_fromString(obj.partialNumberType),
      }
    }
  }

  export interface BizCard {
  }

  export namespace BizCard {
    export function fromObject(obj: any): BizCard {
      return {
        ...obj,
      }
    }
  }

  export interface BizCredit {
    insufficientCredit: boolean;
  }

  export namespace BizCredit {
    export function fromObject(obj: any): BizCredit {
      return {
        ...obj,
      }
    }
  }

  export interface Bank {
    name: string;
  }

  export namespace Bank {
    export function fromObject(obj: any): Bank {
      return {
        ...obj,
      }
    }
  }

  export interface TossAppPay {
    /**
     * OneOf-method
     */
    bank?: PaymentMethodDTO.Bank;
    /**
     * OneOf-method
     */
    card?: PaymentMethodDTO.Card;
  }

  export namespace TossAppPay {
    export function fromObject(obj: any): TossAppPay {
      return {
        ...obj,
        bank: obj.bank != null ? PaymentMethodDTO.Bank.fromObject(obj.bank) : undefined,
        card: obj.card != null ? PaymentMethodDTO.Card.fromObject(obj.card) : undefined,
      }
    }
  }
}

export interface PaymentDTO {
  id: string;
  amount: number;
  status?: PaymentDTO.Status;
  createdAt: string;
  /**
   *  무엇을 위한 Payment인지 설명하는 문자열 (예: '베이직 탑승')
   *  현재는 /u/ListFailedPayments의 맥락에서만 달아줍니다.
   */
  description: string;
  /**
   *  최종적으로 결제 시도한 결제수단
   *  현재는 /u/ListFailedPayments의 맥락에서만 달아줍니다.
   */
  paymentMethod?: PaymentMethodDTO;
  /**
   *  최종적으로 결제 시도한 결제프로필
   *  현재는 /u/ListFailedPayments의 맥락에서만 달아줍니다.
   *  주의: 결제 프로필 안에 있는 PaymentMethod는 사용하지 마세요! Payment의 PaymentMethod와 다를 수 있음.
   */
  paymentProfile?: PaymentProfileDTO;
}

export namespace PaymentDTO {
  export function fromObject(obj: any): PaymentDTO {
    return {
      ...obj,
      status: PaymentDTO.Status_fromString(obj.status),
      createdAt: obj.createdAt.toString(),
      paymentMethod: obj.paymentMethod != null ? PaymentMethodDTO.fromObject(obj.paymentMethod) : undefined,
      paymentProfile: obj.paymentProfile != null ? PaymentProfileDTO.fromObject(obj.paymentProfile) : undefined,
    }
  }

  export type Status = 'PENDING' | 'COMPLETED' | 'FAILED' | 'RETRYING' | 'REFUND_FAILED';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "PENDING":
      case "COMPLETED":
      case "FAILED":
      case "RETRYING":
      case "REFUND_FAILED":
      return str
      default: return undefined
    }
  }
}

export interface DriverActivityStatisticsEntryDTO {
  /**
   *  MONTLY인 경우 YYYY-MM으로 내려온다.
   *  DAILY인 경우 YYYY-MM-DD로 내려온다.
   */
  period: string;
  periodType?: DriverActivityStatisticsEntryDTO.PeriodType;
  timeRange?: DriverActivityStatisticsEntryDTO.TimeRange;
  statistics?: DriverActivityStatisticsEntryDTO.RideStatistics;
  /**
   *  프리미엄 드라이버의 경우에만 내려간다.
   *  운행 시간을 보여줄 시 dispatchingDuration과 (trip)ridingDuration을 이용하면 되고, 나머지는 0으로 내려간다.
   */
  activityStatistics?: DriverActivityStatusStatisticsEntryDTO.DriverActivityStatusStatistics;
  /**
   *  프리미엄 개인 드라이버의 경우에만 내려간다.
   */
  tripStatistics?: DriverActivityStatisticsEntryDTO.TripStatistics;
}

export namespace DriverActivityStatisticsEntryDTO {
  export function fromObject(obj: any): DriverActivityStatisticsEntryDTO {
    return {
      ...obj,
      periodType: DriverActivityStatisticsEntryDTO.PeriodType_fromString(obj.periodType),
      timeRange: obj.timeRange != null ? DriverActivityStatisticsEntryDTO.TimeRange.fromObject(obj.timeRange) : undefined,
      statistics: obj.statistics != null ? DriverActivityStatisticsEntryDTO.RideStatistics.fromObject(obj.statistics) : undefined,
      activityStatistics: obj.activityStatistics != null ? DriverActivityStatusStatisticsEntryDTO.DriverActivityStatusStatistics.fromObject(obj.activityStatistics) : undefined,
      tripStatistics: obj.tripStatistics != null ? DriverActivityStatisticsEntryDTO.TripStatistics.fromObject(obj.tripStatistics) : undefined,
    }
  }

  export type PeriodType = 'DAILY' | 'MONTHLY';

  export function PeriodType_fromString(str: string): PeriodType | undefined {
    switch (str) {
      case "DAILY":
      case "MONTHLY":
      return str
      default: return undefined
    }
  }

  export interface TimeRange {
    startMs: string;
    endMs: string;
  }

  export namespace TimeRange {
    export function fromObject(obj: any): TimeRange {
      return {
        ...obj,
        startMs: obj.startMs.toString(),
        endMs: obj.endMs.toString(),
      }
    }
  }

  export interface RideStatistics {
    /**
     *  총 라이드 갯수
     */
    totalCount: number;
    /**
     *  총 운행 시간
     *    이 필드에 저장되는 값은 대부분의 경우(95% ~ ) 총 운행시간이 맞습니다.
     *
     *    다만 특이한 경우가 프리미엄 개인사업자 드라이버가 "드라이버앱 > 운행이력" 화면에서 보이는 "총 운행시간" 값인데
     *
     *    cell_premium_booking_revenue 에 정의된 값에 따라 보여줘야 했고
     *      https://docs.google.com/presentation/d/1sHwH_Jmg6cB5gwVKztX18MUkJAvGowT3L9FhH9-EjDk/edit#slide=id.g73d6559caf_0_127
     *    tada-android 프로젝트에서 이 필드를 쓰지 않습니다.
     *
     *    DriverActivityStatusStatistics stuct 의 아래 값들을 더해서 화면에 보여줍니다.
     *       totalDispatchingDurationSeconds
     *       totalRidingDurationSeconds
     *       totalTripRidingDurationSeconds
     *       (이 값은 trip_return 상태는 이제 없습니다)
     *
     *    (총 라이드 갯수, 총 운행거리, 총 매출, 총 운행시간 모두 tada-android 에서 프리미엄일 때만 약간 다르게 처리합니다, PremiumHeaderHoler class 에서.)
     */
    totalDurationSeconds: string;
    /**
     *  총 운행 거리
     */
    totalDistanceMeters: string;
    /**
     *  총 매출
     */
    totalCost: string;
    /**
     *  드라이버가 라이드를 취소한 횟수
     *    드라이버 때문에 라이드가 취소된 전체 횟수는 아닙니다.
     *    아래 값이 저장됩니다.
     *      rideStatisticsEntry.driverCancelledCount - rideStatisticsEntry.allowedDriverCancelledCount
     */
    totalDriverCancelledCount: number;
    /**
     *  라이더가 라이드를 취소한 횟수
     */
    totalRiderCancelledCount: number;
    /**
     *  드라이버의 유효 배차 횟수 (배차 수락, 거절, 타임아웃 횟수의 합)
     */
    totalDispatchCount: number;
    /**
     *  드라이버의 배차 수락 횟수
     */
    totalDispatchAcceptCount: number;
    /**
     *  드라이버의 배차 거절 횟수
     */
    totalDispatchRejectCount: number;
    /**
     *  드라이버의 배차 타임아웃 횟수
     */
    totalDispatchTimeoutCount: number;
    /**
     *  드라이버의 이용료 합계액
     */
    totalCallFee: number;
  }

  export namespace RideStatistics {
    export function fromObject(obj: any): RideStatistics {
      return {
        ...obj,
        totalDurationSeconds: obj.totalDurationSeconds.toString(),
        totalDistanceMeters: obj.totalDistanceMeters.toString(),
        totalCost: obj.totalCost.toString(),
      }
    }
  }

  export interface TripStatistics {
    /**
     *  총 예약 갯수
     */
    totalCount: number;
    /**
     *  총 운행 시간
     */
    totalDurationSeconds: string;
    /**
     *  총 운행 거리
     */
    totalDistanceMeters: string;
    /**
     *  총 매출
     */
    totalCost: string;
  }

  export namespace TripStatistics {
    export function fromObject(obj: any): TripStatistics {
      return {
        ...obj,
        totalDurationSeconds: obj.totalDurationSeconds.toString(),
        totalDistanceMeters: obj.totalDistanceMeters.toString(),
        totalCost: obj.totalCost.toString(),
      }
    }
  }
}

export interface ReviewStatisticsEntryDTO {
  /**
   *  YYYY-MM으로 내려온다.
   *  월별 별점 셀 이후 year와 month로 내려주기로 합의
   *  드라이버 특정 버전까지만 내려감(추후에 업데이트 예정)
   */
  year: number;
  month: number;
  statistics?: ReviewStatisticsEntryDTO.ReviewStatistics;
}

export namespace ReviewStatisticsEntryDTO {
  export function fromObject(obj: any): ReviewStatisticsEntryDTO {
    return {
      ...obj,
      statistics: obj.statistics != null ? ReviewStatisticsEntryDTO.ReviewStatistics.fromObject(obj.statistics) : undefined,
    }
  }

  export interface ReviewReasonStatisticsEntryDTO {
    reason: string;
    count: number;
  }

  export namespace ReviewReasonStatisticsEntryDTO {
    export function fromObject(obj: any): ReviewReasonStatisticsEntryDTO {
      return {
        ...obj,
      }
    }
  }

  export interface ReviewStatistics {
    /**
     *  평균 평점
     */
    rating: number;
    /**
     *  총 리뷰 갯수
     */
    totalCount: number;
    /**
     *  총 5점 리뷰 갯수
     */
    totalSatisfiedCount: number;
    /**
     *  개선사항에 대한 통계 정보. 클라이언트는 내려주는 순서대로 보여주면 된다.
     */
    reasonStatisticsEntries: ReviewStatisticsEntryDTO.ReviewReasonStatisticsEntryDTO[];
  }

  export namespace ReviewStatistics {
    export function fromObject(obj: any): ReviewStatistics {
      return {
        ...obj,
        reasonStatisticsEntries: obj.reasonStatisticsEntries.map((v: any) => ReviewStatisticsEntryDTO.ReviewReasonStatisticsEntryDTO.fromObject(v)),
      }
    }
  }
}

export interface DriverReviewStatistics202107DTO {
  year: number;
  month: number;
  statistics?: DriverReviewStatistics202107DTO.ReviewStatistics;
}

export namespace DriverReviewStatistics202107DTO {
  export function fromObject(obj: any): DriverReviewStatistics202107DTO {
    return {
      ...obj,
      statistics: obj.statistics != null ? DriverReviewStatistics202107DTO.ReviewStatistics.fromObject(obj.statistics) : undefined,
    }
  }

  export interface RatingEntry {
    rating: number;
    ratingTopPercentile?: Int32Value;
    tier?: DriverReviewStatistics202107DTO.RatingEntry.RatingTier;
  }

  export namespace RatingEntry {
    export function fromObject(obj: any): RatingEntry {
      return {
        ...obj,
        ratingTopPercentile: obj.ratingTopPercentile != null ? Int32Value.fromObject(obj.ratingTopPercentile) : undefined,
        tier: DriverReviewStatistics202107DTO.RatingEntry.RatingTier_fromString(obj.tier),
      }
    }

    export type RatingTier = 'NONE' | 'VERY_LOW' | 'LOW' | 'SOSO' | 'HIGH';

    export function RatingTier_fromString(str: string): RatingTier | undefined {
      switch (str) {
        case "NONE":
        case "VERY_LOW":
        case "LOW":
        case "SOSO":
        case "HIGH":
        return str
        default: return undefined
      }
    }
  }

  export interface TagEntry {
    tagName: string;
    count: number;
    countTopPercentile?: Int32Value;
    tier?: DriverReviewStatistics202107DTO.TagEntry.TagTier;
  }

  export namespace TagEntry {
    export function fromObject(obj: any): TagEntry {
      return {
        ...obj,
        countTopPercentile: obj.countTopPercentile != null ? Int32Value.fromObject(obj.countTopPercentile) : undefined,
        tier: DriverReviewStatistics202107DTO.TagEntry.TagTier_fromString(obj.tier),
      }
    }

    export type TagTier = 'NONE' | 'UNSATISFIED' | 'LITTLE_UNSATISFIED' | 'SOSO' | 'SATISFIED';

    export function TagTier_fromString(str: string): TagTier | undefined {
      switch (str) {
        case "NONE":
        case "UNSATISFIED":
        case "LITTLE_UNSATISFIED":
        case "SOSO":
        case "SATISFIED":
        return str
        default: return undefined
      }
    }
  }

  export interface ReviewStatistics {
    totalCount: number;
    totalSatisfiedCount: number;
    ratingEntry?: DriverReviewStatistics202107DTO.RatingEntry;
    tagEntries: DriverReviewStatistics202107DTO.TagEntry[];
  }

  export namespace ReviewStatistics {
    export function fromObject(obj: any): ReviewStatistics {
      return {
        ...obj,
        ratingEntry: obj.ratingEntry != null ? DriverReviewStatistics202107DTO.RatingEntry.fromObject(obj.ratingEntry) : undefined,
        tagEntries: obj.tagEntries.map((v: any) => DriverReviewStatistics202107DTO.TagEntry.fromObject(v)),
      }
    }
  }
}

export interface DriverActivityStatusStatisticsEntryDTO {
  date: string;
  statistics?: DriverActivityStatusStatisticsEntryDTO.DriverActivityStatusStatistics;
}

export namespace DriverActivityStatusStatisticsEntryDTO {
  export function fromObject(obj: any): DriverActivityStatusStatisticsEntryDTO {
    return {
      ...obj,
      statistics: obj.statistics != null ? DriverActivityStatusStatisticsEntryDTO.DriverActivityStatusStatistics.fromObject(obj.statistics) : undefined,
    }
  }

  export interface DriverActivityStatusStatistics {
    totalOffDurationSeconds: string;
    totalIdleDurationSeconds: string;
    totalDispatchingDurationSeconds: string;
    totalRidingDurationSeconds: string;
    totalTripRidingDurationSeconds: string;
  }

  export namespace DriverActivityStatusStatistics {
    export function fromObject(obj: any): DriverActivityStatusStatistics {
      return {
        ...obj,
        totalOffDurationSeconds: obj.totalOffDurationSeconds.toString(),
        totalIdleDurationSeconds: obj.totalIdleDurationSeconds.toString(),
        totalDispatchingDurationSeconds: obj.totalDispatchingDurationSeconds.toString(),
        totalRidingDurationSeconds: obj.totalRidingDurationSeconds.toString(),
        totalTripRidingDurationSeconds: obj.totalTripRidingDurationSeconds.toString(),
      }
    }
  }
}

export interface UserPreferencesDTO {
  isMarketingNotificationEnabled: boolean;
  isMarketingEmailEnabled: boolean;
  isMarketingSmsEnabled: boolean;
  isInformativeNotificationEnabled: boolean;
  isInformativeEmailEnabled: boolean;
  isInformativeSmsEnabled: boolean;
}

export namespace UserPreferencesDTO {
  export function fromObject(obj: any): UserPreferencesDTO {
    return {
      ...obj,
    }
  }
}

/**
 *  id 값이 null 로 변경된 경우, 빈 문자열 ("") 로 올려주세요.
 */
export interface TrackingIdentifiers {
  appsflyerId?: StringValue;
  gaid?: StringValue;
  idfa?: StringValue;
  idfv?: StringValue;
}

export namespace TrackingIdentifiers {
  export function fromObject(obj: any): TrackingIdentifiers {
    return {
      ...obj,
      appsflyerId: obj.appsflyerId != null ? StringValue.fromObject(obj.appsflyerId) : undefined,
      gaid: obj.gaid != null ? StringValue.fromObject(obj.gaid) : undefined,
      idfa: obj.idfa != null ? StringValue.fromObject(obj.idfa) : undefined,
      idfv: obj.idfv != null ? StringValue.fromObject(obj.idfv) : undefined,
    }
  }
}

export interface RideAvailabilityIssue {
  type?: RideAvailabilityIssue.Type;
  /**
   *  Issue가 있는데도 불구하고 호출하려 하는 경우 클라에서 팝업을 띄워줍니다.
   *  클라에서 팝업 내용으로 아래 내용을 그대로 노출시켜주면 됩니다.
   */
  message: string;
  title: string;
  image?: Image;
  button?: RideAvailabilityIssue.Button;
  logKey: string;
}

export namespace RideAvailabilityIssue {
  export function fromObject(obj: any): RideAvailabilityIssue {
    return {
      ...obj,
      type: RideAvailabilityIssue.Type_fromString(obj.type),
      image: obj.image != null ? Image.fromObject(obj.image) : undefined,
      button: obj.button != null ? RideAvailabilityIssue.Button.fromObject(obj.button) : undefined,
    }
  }

  /**
   * UNAVAILABLE_ORIGIN : 
     *  서비스 가능한 출발지가 이니라서 호출이 불가능한 경우
     *  ex) 현재 부산을 출발지로 호출 할 수 없음
   * UNAVAILABLE_DESTINATION : 
     *  서비스 가능한 도착지가 아니라서 호출이 불가능한 경우
     *  ex) 현재 부산을 도착지로 호출 할 수 없음
     *  출발지와 도착지가 너무 가까운 경우
     *  ex) 2019.02.01 기준 100미터
   * UNAVAILABLE_TIME : 
     *  호출은 가능하지만, 운행 시간이 아니라서 요청을 호출 할 수 없는 경우
     *  ex) 알파 버전은 저녁 7시부터 새벽 4시까지만 차량이 배차될 수 있음
   * UNMANAGED_ORIGIN : 
     *  호출은 가능하지만, 출발지가 서비스 지역이 아니라서 품질을 보장할 수 없는 경우
     *  ex) 알파 버전은 강남3구, 성수동 외 지역은 설정은 가능하지만 품질 관련 이슈가 있음
   * HAS_UPDATED_TERMS : 
     *  수락해야할 약관이 있어서 차량 호출을 할 수 없는 경우
   * INVALID_PAYMENT_METHOD : 
     *  카드가 유효하지 않은 경우
   * BUSINESS_PAYMENT_PROFILE_VERIFICATION_NEEDED : 
     *  비즈니스 계정 재인증이 필요한 경우
   * UNAVAILABLE_WAYPOINTS : 
     *  경유지 설정이 불가한 경우 (최대개수 초과, 미지원 지역 등)
   * LITE_INACTIVE : 
     *  타다 라이트가 호출뷰에 노출은 되지만 아직 서비스 시작은 안 한 경우
   * UNAVAILABLE_NEARBY_VEHICLES : 
     *  주변차 없음
   * UPCOMING_RIDE_RESERVATION_TO_WARN : 
     *  다가오는 호출예약이 있지만 호출은 가능한 경우
   * UPCOMING_RIDE_RESERVATION_TO_CANCEL : 
     *  다가오는 호출예약이 있어 취소 후에 호출이 가능한 경우
   */
  export type Type = 'UNSPECIFIED' | 'UNAVAILABLE_ORIGIN' | 'UNAVAILABLE_DESTINATION' | 'UNAVAILABLE_TIME' | 'UNMANAGED_ORIGIN' | 'HAS_UPDATED_TERMS' | 'INVALID_PAYMENT_METHOD' | 'BUSINESS_PAYMENT_PROFILE_VERIFICATION_NEEDED' | 'UNAVAILABLE_WAYPOINTS' | 'LITE_INACTIVE' | 'UNAVAILABLE_NEARBY_VEHICLES' | 'UPCOMING_RIDE_RESERVATION_TO_WARN' | 'UPCOMING_RIDE_RESERVATION_TO_CANCEL';

  export function Type_fromString(str: string): Type | undefined {
    switch (str) {
      case "UNSPECIFIED":
      case "UNAVAILABLE_ORIGIN":
      case "UNAVAILABLE_DESTINATION":
      case "UNAVAILABLE_TIME":
      case "UNMANAGED_ORIGIN":
      case "HAS_UPDATED_TERMS":
      case "INVALID_PAYMENT_METHOD":
      case "BUSINESS_PAYMENT_PROFILE_VERIFICATION_NEEDED":
      case "UNAVAILABLE_WAYPOINTS":
      case "LITE_INACTIVE":
      case "UNAVAILABLE_NEARBY_VEHICLES":
      case "UPCOMING_RIDE_RESERVATION_TO_WARN":
      case "UPCOMING_RIDE_RESERVATION_TO_CANCEL":
      return str
      default: return undefined
    }
  }

  export interface Button {
    name: string;
    /**
     *  null 이면 단순하게 닫습니다.
     */
    deepLink?: StringValue;
  }

  export namespace Button {
    export function fromObject(obj: any): Button {
      return {
        ...obj,
        deepLink: obj.deepLink != null ? StringValue.fromObject(obj.deepLink) : undefined,
      }
    }
  }
}

export interface Terms {
  id: string;
  name: string;
  url: string;
  required: boolean;
}

export namespace Terms {
  export function fromObject(obj: any): Terms {
    return {
      ...obj,
    }
  }
}

export interface TermsEntry {
  id: string;
  name: string;
  required: boolean;
  /**
   *  하위 terms를 가질 경우 url이 null이 됨
   */
  url?: StringValue;
  terms: TermsEntry[];
}

export namespace TermsEntry {
  export function fromObject(obj: any): TermsEntry {
    return {
      ...obj,
      url: obj.url != null ? StringValue.fromObject(obj.url) : undefined,
      terms: obj.terms.map((v: any) => TermsEntry.fromObject(v)),
    }
  }
}

export interface Image {
  url: string;
  width: number;
  height: number;
}

export namespace Image {
  export function fromObject(obj: any): Image {
    return {
      ...obj,
    }
  }
}

export interface BrazeEvent {
  eventName: string;
  properties: BrazeEvent.Property[];
}

export namespace BrazeEvent {
  export function fromObject(obj: any): BrazeEvent {
    return {
      ...obj,
      properties: obj.properties.map((v: any) => BrazeEvent.Property.fromObject(v)),
    }
  }

  export interface Property {
    key: string;
    value: string;
  }

  export namespace Property {
    export function fromObject(obj: any): Property {
      return {
        ...obj,
      }
    }
  }
}

export interface PaymentProfileDTO {
  id: string;
  name: string;
  email: string;
  type?: PaymentProfileDTO.Type;
  status?: PaymentProfileDTO.Status;
  /**
   *  없을 수도 있음
   */
  paymentMethod?: PaymentMethodDTO;
  /**
   *  결제수단 고정(변경 불가) 여부
   */
  isPaymentMethodFixed: boolean;
  /**
   *  재인증 필요 여부
   */
  needsVerification: boolean;
}

export namespace PaymentProfileDTO {
  export function fromObject(obj: any): PaymentProfileDTO {
    return {
      ...obj,
      type: PaymentProfileDTO.Type_fromString(obj.type),
      status: PaymentProfileDTO.Status_fromString(obj.status),
      paymentMethod: obj.paymentMethod != null ? PaymentMethodDTO.fromObject(obj.paymentMethod) : undefined,
    }
  }

  export type Type = 'PERSONAL' | 'BUSINESS';

  export function Type_fromString(str: string): Type | undefined {
    switch (str) {
      case "PERSONAL":
      case "BUSINESS":
      return str
      default: return undefined
    }
  }

  export type Status = 'ACTIVE' | 'DEACTIVATED' | 'DELETED';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "ACTIVE":
      case "DEACTIVATED":
      case "DELETED":
      return str
      default: return undefined
    }
  }
}

export interface FavoritePlaceDTO {
  id: string;
  type?: FavoritePlaceDTO.Type;
  name: string;
  location?: AddressedLocation;
  createdAt: string;
}

export namespace FavoritePlaceDTO {
  export function fromObject(obj: any): FavoritePlaceDTO {
    return {
      ...obj,
      type: FavoritePlaceDTO.Type_fromString(obj.type),
      location: obj.location != null ? AddressedLocation.fromObject(obj.location) : undefined,
      createdAt: obj.createdAt.toString(),
    }
  }

  export type Type = 'CUSTOM' | 'HOME' | 'WORKPLACE';

  export function Type_fromString(str: string): Type | undefined {
    switch (str) {
      case "CUSTOM":
      case "HOME":
      case "WORKPLACE":
      return str
      default: return undefined
    }
  }
}

export interface TipPolicy {
  enabled: boolean;
  amountEntries: TipPolicy.AmountEntry[];
}

export namespace TipPolicy {
  export function fromObject(obj: any): TipPolicy {
    return {
      ...obj,
      amountEntries: obj.amountEntries.map((v: any) => TipPolicy.AmountEntry.fromObject(v)),
    }
  }

  /**
   *  추후 아이콘 등 추가 속성을 넣을 수 있도록 message로 정의.
   */
  export interface AmountEntry {
    /**
     *  0이 될 수 있다.
     */
    amount: number;
  }

  export namespace AmountEntry {
    export function fromObject(obj: any): AmountEntry {
      return {
        ...obj,
      }
    }
  }
}

/**
 *  실시간, 예약의 감사메시지를 담고 있는 객체.
 */
export interface DriverPraiseDTO {
  id: string;
  rating: number;
  reason: string;
  createdAt: string;
}

export namespace DriverPraiseDTO {
  export function fromObject(obj: any): DriverPraiseDTO {
    return {
      ...obj,
      createdAt: obj.createdAt.toString(),
    }
  }
}

export interface GigDriverLicenseDTO {
  id: string;
  status?: GigDriverLicenseDTO.Status;
  licenseTypeName: string;
  /**
   *  프로필 사진: 원본 주소
   */
  profilePhotoUrl?: StringValue;
  /**
   *  프로필 사진: 앱에 표시할 때 사용할 주소
   */
  profilePhotoPreviewUrl?: StringValue;
  /**
   *  프로필 사진: 승인 여부
   */
  profilePhotoApproved?: BoolValue;
  /**
   *  면허 인증 사진: 원본 주소
   */
  verificationPhotoUrl?: StringValue;
  /**
   *  면허 인증 사진: 앱에 표시할 때 사용할 주소
   */
  verificationPhotoPreviewUrl?: StringValue;
  /**
   *  면허 인증 사진: 승인 여부
   */
  verificationPhotoApproved?: BoolValue;
  /**
   *  운전 경력 증명서: 업로드 필요 여부
   */
  issueDateVerificationPhotoRequired: boolean;
  /**
   *  운전 경력 증명서: 원본 주소
   */
  issueDateVerificationPhotoUrl?: StringValue;
  /**
   *  운전 경력 증명서: 앱에 표시할 때 사용할 주소
   */
  issueDateVerificationPhotoPreviewUrl?: StringValue;
  /**
   *  운전 경력 증명서: 승인 여부
   */
  issueDateVerificationPhotoApproved?: BoolValue;
  /**
   *  반려된 경우 반려 사유
   */
  rejectedReason?: StringValue;
}

export namespace GigDriverLicenseDTO {
  export function fromObject(obj: any): GigDriverLicenseDTO {
    return {
      ...obj,
      status: GigDriverLicenseDTO.Status_fromString(obj.status),
      profilePhotoUrl: obj.profilePhotoUrl != null ? StringValue.fromObject(obj.profilePhotoUrl) : undefined,
      profilePhotoPreviewUrl: obj.profilePhotoPreviewUrl != null ? StringValue.fromObject(obj.profilePhotoPreviewUrl) : undefined,
      profilePhotoApproved: obj.profilePhotoApproved != null ? BoolValue.fromObject(obj.profilePhotoApproved) : undefined,
      verificationPhotoUrl: obj.verificationPhotoUrl != null ? StringValue.fromObject(obj.verificationPhotoUrl) : undefined,
      verificationPhotoPreviewUrl: obj.verificationPhotoPreviewUrl != null ? StringValue.fromObject(obj.verificationPhotoPreviewUrl) : undefined,
      verificationPhotoApproved: obj.verificationPhotoApproved != null ? BoolValue.fromObject(obj.verificationPhotoApproved) : undefined,
      issueDateVerificationPhotoUrl: obj.issueDateVerificationPhotoUrl != null ? StringValue.fromObject(obj.issueDateVerificationPhotoUrl) : undefined,
      issueDateVerificationPhotoPreviewUrl: obj.issueDateVerificationPhotoPreviewUrl != null ? StringValue.fromObject(obj.issueDateVerificationPhotoPreviewUrl) : undefined,
      issueDateVerificationPhotoApproved: obj.issueDateVerificationPhotoApproved != null ? BoolValue.fromObject(obj.issueDateVerificationPhotoApproved) : undefined,
      rejectedReason: obj.rejectedReason != null ? StringValue.fromObject(obj.rejectedReason) : undefined,
    }
  }

  export type Status = 'NONE' | 'PENDING' | 'APPROVAL_REQUESTED' | 'ACTIVE' | 'REJECTED' | 'INACTIVE';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "NONE":
      case "PENDING":
      case "APPROVAL_REQUESTED":
      case "ACTIVE":
      case "REJECTED":
      case "INACTIVE":
      return str
      default: return undefined
    }
  }
}

export interface GigDriverStatusDTO {
  licenseStatus?: GigDriverLicenseDTO.Status;
  shouldUpdateLocation: boolean;
  hasDelayedPayment: boolean;
  isReceivingDaeriMission: boolean;
  daeriMissionPreferences?: DaeriMissionPreferences;
  daeriQualificationStatus?: DriverQualificationDTO.Status;
  /**
   *  대리 밴 여부
   */
  isDaeriBanned: boolean;
  /**
   *  대리 이용이 불가한 경우 그 종료 시각.
   *  is_daeri_banned가 true인데 이 필드가 null이면 영구정지를 당한 것이다.
   */
  daeriBanEndAt?: Timestamp;
  /**
   *  대리 이용이 불가능할 경우 홈에서 대리 콜리스트로 진입할 때 띄워줄 메시지
   */
  daeriBannedAlertMessage?: StringValue;
  /**
   *  드라이버의 대리 운행 평균 평점. 주기적으로 업데이트 된다.
   *  기본적으로 0.00 부터 10.00 사이의 숫자가 들어오게 된다.
   *  아직 한 번도 업데이트 되지 않은 경우 null이 내려가므로 클라가 적절히 처리해줘야 한다.
   */
  daeriRating?: DoubleValue;
}

export namespace GigDriverStatusDTO {
  export function fromObject(obj: any): GigDriverStatusDTO {
    return {
      ...obj,
      licenseStatus: GigDriverLicenseDTO.Status_fromString(obj.licenseStatus),
      daeriMissionPreferences: obj.daeriMissionPreferences != null ? DaeriMissionPreferences.fromObject(obj.daeriMissionPreferences) : undefined,
      daeriQualificationStatus: DriverQualificationDTO.Status_fromString(obj.daeriQualificationStatus),
      daeriBanEndAt: obj.daeriBanEndAt != null ? Timestamp.fromObject(obj.daeriBanEndAt) : undefined,
      daeriBannedAlertMessage: obj.daeriBannedAlertMessage != null ? StringValue.fromObject(obj.daeriBannedAlertMessage) : undefined,
      daeriRating: obj.daeriRating != null ? DoubleValue.fromObject(obj.daeriRating) : undefined,
    }
  }
}

export interface DaeriMissionPreferences {
  searchRadiusMeters: number;
  preferredDestinationAreas: DaeriMissionPreferences.PreferredArea[];
  minDriverFee?: Int32Value;
  toOriginTransportationMedium?: DaeriTransportationMedium;
}

export namespace DaeriMissionPreferences {
  export function fromObject(obj: any): DaeriMissionPreferences {
    return {
      ...obj,
      preferredDestinationAreas: obj.preferredDestinationAreas.map((v: any) => DaeriMissionPreferences.PreferredArea.fromObject(v)),
      minDriverFee: obj.minDriverFee != null ? Int32Value.fromObject(obj.minDriverFee) : undefined,
      toOriginTransportationMedium: DaeriTransportationMedium_fromString(obj.toOriginTransportationMedium),
    }
  }

  export interface PreferredArea {
    siDo: string;
    siGunGu: string;
    code: string;
  }

  export namespace PreferredArea {
    export function fromObject(obj: any): PreferredArea {
      return {
        ...obj,
      }
    }
  }
}

export interface UserVehicleDTO {
  id: string;
  manufacturer: string;
  model: string;
  gearType?: UserVehicleDTO.GearType;
  licensePlate: string;
  seats: number;
  driverManualLink?: StringValue;
}

export namespace UserVehicleDTO {
  export function fromObject(obj: any): UserVehicleDTO {
    return {
      ...obj,
      gearType: UserVehicleDTO.GearType_fromString(obj.gearType),
      driverManualLink: obj.driverManualLink != null ? StringValue.fromObject(obj.driverManualLink) : undefined,
    }
  }

  /**
   *  ???
   *
   * AUTO : 
     *  자동
   * MANUAL : 
     *  수동
   */
  export type GearType = 'AUTO' | 'MANUAL';

  export function GearType_fromString(str: string): GearType | undefined {
    switch (str) {
      case "AUTO":
      case "MANUAL":
      return str
      default: return undefined
    }
  }
}

export interface DriverQualificationDTO {
  status?: DriverQualificationDTO.Status;
}

export namespace DriverQualificationDTO {
  export function fromObject(obj: any): DriverQualificationDTO {
    return {
      ...obj,
      status: DriverQualificationDTO.Status_fromString(obj.status),
    }
  }

  /**
   * NONE : 
     *  등록 신청을 한 적이 없다.
   * ACTIVE : 
     *  등록 완료
   */
  export type Status = 'NONE' | 'ACTIVE';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "NONE":
      case "ACTIVE":
      return str
      default: return undefined
    }
  }
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
}

export namespace BankAccount {
  export function fromObject(obj: any): BankAccount {
    return {
      ...obj,
    }
  }
}

export interface GigDriverPointWithdrawalDetails {
  amount: number;
  feeAmount: number;
  promoAmount: number;
  promoTaxAmount: number;
  /**
   *  3.3%
   */
  promoTaxRate: string;
  luckyAmount: number;
  luckyTaxAmount: number;
  /**
   *  22%
   */
  luckyTaxRate: string;
  luckyTaxFreeAmount: number;
  actualMoneyKrw: number;
}

export namespace GigDriverPointWithdrawalDetails {
  export function fromObject(obj: any): GigDriverPointWithdrawalDetails {
    return {
      ...obj,
    }
  }
}

export interface GigDriverPaymentDTO {
  id: string;
  /**
   *  종류 (자기부담금, 사고처리금 등)
   */
  type: string;
  /**
   *  금액
   */
  amount: number;
  /**
   *  납부계좌 은행명
   */
  depositAccountBankName: string;
  /**
   *  납부계좌 번호
   */
  depositAccountNumber: string;
  /**
   *  예금주명
   */
  depositAccountHolder: string;
  /**
   *  납부기한
   */
  tolerateUntil?: Timestamp;
  /**
   *  납부현황
   */
  status?: GigDriverPaymentDTO.Status;
  /**
   *  입금완료 시각 (status=COMPLETED 일때만)
   */
  completedAt?: Timestamp;
  /**
   *  상세정보 (운행번호, 운행일시, 출발지, 목적지 등)
   */
  properties: GigDriverPaymentDTO.Property[];
}

export namespace GigDriverPaymentDTO {
  export function fromObject(obj: any): GigDriverPaymentDTO {
    return {
      ...obj,
      tolerateUntil: obj.tolerateUntil != null ? Timestamp.fromObject(obj.tolerateUntil) : undefined,
      status: GigDriverPaymentDTO.Status_fromString(obj.status),
      completedAt: obj.completedAt != null ? Timestamp.fromObject(obj.completedAt) : undefined,
      properties: obj.properties.map((v: any) => GigDriverPaymentDTO.Property.fromObject(v)),
    }
  }

  export type Status = 'PENDING' | 'COMPLETED' | 'CANCELED';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "PENDING":
      case "COMPLETED":
      case "CANCELED":
      return str
      default: return undefined
    }
  }

  export interface Property {
    name: string;
    value: string;
    description?: StringValue;
  }

  export namespace Property {
    export function fromObject(obj: any): Property {
      return {
        ...obj,
        description: obj.description != null ? StringValue.fromObject(obj.description) : undefined,
      }
    }
  }
}

export interface DriverPreferencesDTO {
  isMarketingNotificationEnabled: boolean;
  isMarketingSmsEnabled: boolean;
  isNightMarketingEnabled: boolean;
}

export namespace DriverPreferencesDTO {
  export function fromObject(obj: any): DriverPreferencesDTO {
    return {
      ...obj,
    }
  }
}

export interface AccidentReportDTO {
  id: string;
  insuranceCompanyName: string;
  insuranceReportId: string;
}

export namespace AccidentReportDTO {
  export function fromObject(obj: any): AccidentReportDTO {
    return {
      ...obj,
    }
  }

  /**
   * OTHER : 
     *  기타
   * WITH_VEHICLE : 
     *  차대차
   * WITH_TWO_WHEEL_VEHICLE : 
     *  차대이륜차
   * WITH_HUMAN : 
     *  차대인
   */
  export type AccidentType = 'OTHER' | 'WITH_VEHICLE' | 'WITH_TWO_WHEEL_VEHICLE' | 'WITH_HUMAN';

  export function AccidentType_fromString(str: string): AccidentType | undefined {
    switch (str) {
      case "OTHER":
      case "WITH_VEHICLE":
      case "WITH_TWO_WHEEL_VEHICLE":
      case "WITH_HUMAN":
      return str
      default: return undefined
    }
  }
}

export interface PopUp {
  title?: StringValue;
  body?: StringValue;
  image?: Image;
  /**
   *  참고: positive_button과 negative_button 중 하나만 존재하면 팝업 하단을 꽉 채우는 전체 버튼이 된다.
   *  버튼 두 개를 띄울 때 오른쪽 버튼. 기본값은 하늘색이지만 Button.Style 로 색상을 지정할 수 있다.
   */
  positiveButton?: PopUp.Button;
  /**
   *  버튼 두 개를 띄울 때 왼쪽 버튼. 기본값은 회색이지만 Button.Style 로 색상을 지정할 수 있다.
   */
  negativeButton?: PopUp.Button;
  isImportant: boolean;
}

export namespace PopUp {
  export function fromObject(obj: any): PopUp {
    return {
      ...obj,
      title: obj.title != null ? StringValue.fromObject(obj.title) : undefined,
      body: obj.body != null ? StringValue.fromObject(obj.body) : undefined,
      image: obj.image != null ? Image.fromObject(obj.image) : undefined,
      positiveButton: obj.positiveButton != null ? PopUp.Button.fromObject(obj.positiveButton) : undefined,
      negativeButton: obj.negativeButton != null ? PopUp.Button.fromObject(obj.negativeButton) : undefined,
    }
  }

  export interface Button {
    text: string;
    /**
     *  null이 내려가면 링크로 이동하지 않고, 팝업을 닫습니다.
     */
    link?: StringValue;
    logKey: string;
    style?: PopUp.Button.Style;
  }

  export namespace Button {
    export function fromObject(obj: any): Button {
      return {
        ...obj,
        link: obj.link != null ? StringValue.fromObject(obj.link) : undefined,
        style: PopUp.Button.Style_fromString(obj.style),
      }
    }

    /**
     * OK : 
       *  하늘색
     * CANCEL : 
       *  회색
     * DESTRUCTIVE : 
       *  빨간색
     */
    export type Style = 'DEFAULT' | 'OK' | 'CANCEL' | 'DESTRUCTIVE';

    export function Style_fromString(str: string): Style | undefined {
      switch (str) {
        case "DEFAULT":
        case "OK":
        case "CANCEL":
        case "DESTRUCTIVE":
        return str
        default: return undefined
      }
    }
  }
}

export interface EventRecruitmentDTO {
  id: string;
  type?: EventRecruitmentDTO.Type;
  status?: EventRecruitmentDTO.Status;
}

export namespace EventRecruitmentDTO {
  export function fromObject(obj: any): EventRecruitmentDTO {
    return {
      ...obj,
      type: EventRecruitmentDTO.Type_fromString(obj.type),
      status: EventRecruitmentDTO.Status_fromString(obj.status),
    }
  }

  export type Type = 'TADA_NEXT_PRE_RECRUITMENT';

  export function Type_fromString(str: string): Type | undefined {
    switch (str) {
      case "TADA_NEXT_PRE_RECRUITMENT":
      return str
      default: return undefined
    }
  }

  export type Status = 'UNREQUESTED' | 'PENDING' | 'CONFIRMED' | 'DELETED';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "UNREQUESTED":
      case "PENDING":
      case "CONFIRMED":
      case "DELETED":
      return str
      default: return undefined
    }
  }
}
