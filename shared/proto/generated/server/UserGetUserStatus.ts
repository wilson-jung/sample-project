/* eslint-disable */
import { Location, UserDTO, UserStatusDTO, BrazeEvent, Image } from '../common';
import { RideDTO } from '../ride';
import { StringValue, BoolValue } from '../wrappers';
import { RideReservationDTO } from '../ride_reservation';


export interface UserGetUserStatusParams {
  location?: Location;
}

export namespace UserGetUserStatusParams {
  export function fromObject(obj: any): UserGetUserStatusParams {
    return {
      ...obj,
      location: obj.location != null ? Location.fromObject(obj.location) : undefined,
    }
  }
}

export interface UserGetUserStatusResult {
  user?: UserDTO;
  userStatus?: UserStatusDTO;
  ride?: RideDTO;
  /**
   *  이 필드가 있으면 클라이언트는 Braze SDK로 커스텀 이벤트를 발생시킨다.
   *  https://www.braze.com/docs/developer_guide/platform_integration_guides/android/analytics/tracking_custom_events/
   *  https://www.braze.com/docs/developer_guide/platform_integration_guides/ios/analytics/tracking_custom_events/
   */
  brazeEvents: BrazeEvent[];
  /**
   *  사이드 메뉴 상단에 표시되는 배너 리스트
   *  클라에서 이 이미지 리스트 주 랜덤하게 하나를 선택하여 보여준다.
   */
  sideMenuBanners: UserGetUserStatusResult.SideMenuBanner[];
  /**
   *  라이더 앱 3.0부터 홈 화면 상단에 보이는 배너 리스트
   */
  homeBanners: UserGetUserStatusResult.HomeBanner[];
  /**
   *  쿠폰 메뉴에 뉴뱃지를 띄워줄지 여부
   */
  couponNewBadge: boolean;
  /**
   *  라이더 앱 3.0부터 메인화면에 노출되는 인사말
   */
  greetingText?: StringValue;
  /**
   *  패스포트 멤버십에 가입된 유저인 경우 채워져서 내려간다.
   */
  passportMembershipId?: StringValue;
  /**
   *  패스포트 멤버십 갱신유예 여부
   */
  isPassportMembershipDeactivationDelaying?: BoolValue;
  /**
   *  크레딧 잔액 총합
   */
  totalCreditAmount: number;
  /**
   *  대리가 사용 가능한지 여부
   */
  isDaeriAvailable?: BoolValue;
  /**
   *  유저의 호출예약 입니다.
   *  2시간 이내로 수행될 예정인 임박한 호출 예약이 내려가며
   *  앱에서 이를 grpc subscribe 해야 합니다.
   */
  upcomingRideReservation?: RideReservationDTO;
  /**
   *  대리 커밍순 팝업 문구.
   */
  daeriComingSoonPopupBody?: StringValue;
  /**
   *  현재 위치, 현재 시각에 바로대리 호출이 가능한지 여부
   */
  isBaroDaeriAvailable?: BoolValue;
  /**
   *  친구 초대 메뉴
   */
  invitationMenu?: UserGetUserStatusResult.MenuItem;
  /**
   *  서랍 차량 관리 메뉴
   */
  userVehicleMenu?: UserGetUserStatusResult.MenuItem;
  /**
   *  비즈니스 혜택 메뉴
   */
  bizBenefitMenu?: UserGetUserStatusResult.MenuItem;
  /**
   *  패스포트 통합멤버십 메뉴
   */
  passportMembershipMenu?: UserGetUserStatusResult.MenuItem;
  /**
   *  차량 등록 화면 하단 배너
   */
  createVehicleLowerBanner?: Image;
  /**
   *  서랍 메뉴 > 프로필의 패스포트 결제내역 눌렀을 때 보낼 딥링크
   */
  passportBillingHistoryDeeplink?: StringValue;
}

export namespace UserGetUserStatusResult {
  export function fromObject(obj: any): UserGetUserStatusResult {
    return {
      ...obj,
      user: obj.user != null ? UserDTO.fromObject(obj.user) : undefined,
      userStatus: obj.userStatus != null ? UserStatusDTO.fromObject(obj.userStatus) : undefined,
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
      brazeEvents: obj.brazeEvents.map((v: any) => BrazeEvent.fromObject(v)),
      sideMenuBanners: obj.sideMenuBanners.map((v: any) => UserGetUserStatusResult.SideMenuBanner.fromObject(v)),
      homeBanners: obj.homeBanners.map((v: any) => UserGetUserStatusResult.HomeBanner.fromObject(v)),
      greetingText: obj.greetingText != null ? StringValue.fromObject(obj.greetingText) : undefined,
      passportMembershipId: obj.passportMembershipId != null ? StringValue.fromObject(obj.passportMembershipId) : undefined,
      isPassportMembershipDeactivationDelaying: obj.isPassportMembershipDeactivationDelaying != null ? BoolValue.fromObject(obj.isPassportMembershipDeactivationDelaying) : undefined,
      isDaeriAvailable: obj.isDaeriAvailable != null ? BoolValue.fromObject(obj.isDaeriAvailable) : undefined,
      upcomingRideReservation: obj.upcomingRideReservation != null ? RideReservationDTO.fromObject(obj.upcomingRideReservation) : undefined,
      daeriComingSoonPopupBody: obj.daeriComingSoonPopupBody != null ? StringValue.fromObject(obj.daeriComingSoonPopupBody) : undefined,
      isBaroDaeriAvailable: obj.isBaroDaeriAvailable != null ? BoolValue.fromObject(obj.isBaroDaeriAvailable) : undefined,
      invitationMenu: obj.invitationMenu != null ? UserGetUserStatusResult.MenuItem.fromObject(obj.invitationMenu) : undefined,
      userVehicleMenu: obj.userVehicleMenu != null ? UserGetUserStatusResult.MenuItem.fromObject(obj.userVehicleMenu) : undefined,
      bizBenefitMenu: obj.bizBenefitMenu != null ? UserGetUserStatusResult.MenuItem.fromObject(obj.bizBenefitMenu) : undefined,
      passportMembershipMenu: obj.passportMembershipMenu != null ? UserGetUserStatusResult.MenuItem.fromObject(obj.passportMembershipMenu) : undefined,
      createVehicleLowerBanner: obj.createVehicleLowerBanner != null ? Image.fromObject(obj.createVehicleLowerBanner) : undefined,
      passportBillingHistoryDeeplink: obj.passportBillingHistoryDeeplink != null ? StringValue.fromObject(obj.passportBillingHistoryDeeplink) : undefined,
    }
  }

  export interface MenuItem {
    url: string;
    description?: StringValue;
  }

  export namespace MenuItem {
    export function fromObject(obj: any): MenuItem {
      return {
        ...obj,
        description: obj.description != null ? StringValue.fromObject(obj.description) : undefined,
      }
    }
  }

  export interface SideMenuBanner {
    url: string;
    image?: Image;
    logKey?: StringValue;
  }

  export namespace SideMenuBanner {
    export function fromObject(obj: any): SideMenuBanner {
      return {
        ...obj,
        image: obj.image != null ? Image.fromObject(obj.image) : undefined,
        logKey: obj.logKey != null ? StringValue.fromObject(obj.logKey) : undefined,
      }
    }
  }

  export interface HomeBanner {
    url: string;
    title: string;
    logKey?: StringValue;
  }

  export namespace HomeBanner {
    export function fromObject(obj: any): HomeBanner {
      return {
        ...obj,
        logKey: obj.logKey != null ? StringValue.fromObject(obj.logKey) : undefined,
      }
    }
  }
}
