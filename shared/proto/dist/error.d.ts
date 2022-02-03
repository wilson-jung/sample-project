import { StringValue } from './wrappers';
/**
 * BAD_REQUEST :
   *  일반적인 에러. 다양한 경우에 이 에러가 발생한다.
   *  클리이언트에서 따로 처리할 필요 없이 적당히 처리해주면 된다.
 * ACCOUNT_DOES_NOT_EXIST :
   *  로그인을 하려 했으나, 계정이 존재하지 않는 경우.
 * GEOCODING_FAILURE :
   *  지오코딩하다가 에러가 난 경우
 * UNAVAILABLE_ORIGIN :
   *  요청 불가능한 출발지인 경우.
 * UNAVAILABLE_DESTINATION :
   *  요청 불가능한 도착지인 경우.
 * UNAVAILABLE_RIDE_TYPE :
   *  요청 불가능한 라이드 타입인 경우.
 * UPGRADE_NEEDED :
   *  현재 클라이언트 버전이 더 이상 유효하지 않은 경우
 * UNAVAILABLE_TIME :
   *  요청 불가능한 시간인 경우.
 * ASSIST_REGISTRATION_REQUIRED :
   *  어시스트 등록 필요
 * PAYMENT_METHOD_NOT_REGISTERED_FOR_ASSIST :
   *  어시스트 등록된 결제수단이 아님
 * INVALID_PAYMENT_PROFILE_STATUS :
   *  결제 프로필이 호출 불가 상태
 * INACTIVE_USER :
   *  휴면 유저가 로그인했을 경우
 * UNAVAILABLE_WAYPOINTS :
   *  경유지 설정이 불가한 경우 (최대개수 초과, 미지원 지역 등)
 * RIDE_ALREADY_REVIEWED :
   *  이미 라이드의 리뷰를 남긴 경우
 * RIDE_REVIEW_DOES_NOT_EXIST :
   *  라이드에 리뷰가 없는 경우
 * TRIP_ALREADY_REVIEWED :
   *  이미 예약상품의 리뷰를 남긴 경우
 * RIDE_RESERVATION_ALREADY_ACCEPTED :
   *  호출예약이 이미 수락된 경우
 * PAYMENT_METHOD_EXPIRED :
   *  결제 수단의 유효 기간이 만료된 경우
 * HAS_FAILED_PAYMENT :
   *  결제 수단에 미수금이 있는 경우
 * HAS_UPDATED_TERMS :
   *  미수락한 약관이 있는 경우
 * HAS_UPDATED_FEE_TERMS :
   *  미수락한 요금 위임 약관이 있는 경우
 * INSUFFICIENT_BIZ_CREDIT :
   *  비즈니스 선불 크래딧이 다 떨어진 경우
 * TIP_WITH_BIZ_CREDIT :
   *  비즈니스 선불 크래딧으로 팁을 결제하려는 경우
 * PAYMENT_METHOD_REGISTER_FAILED :
   *  결제 수단 등록에 실패한 경우
 * AUTHORIZATION_REQUIRED :
   *  Authorization 헤더에 값이 없는 경우.
 * INVALID_ACCESS_TOKEN :
   *  AccessToken이 유효하지 않은 경우.
 * INVALID_PASSWORD :
   *  로그인 시 유효하지 않은 비밀번호인 경우.
 * INVALID_ESTIMATION_TOKEN :
   *  EstimationToken이 유효하지 않은 경우.
 * REESTIMATION_NEEDED :
   *  교통상황의 변화, 토큰 만료 등으로 Estimation을 다시 해야하는 경우.
 * INVALID_PHONE_NUMBER :
   *  로그인 시 전화번호가 비어있는 경우
 * TOO_FAR_PICKUP_POINT :
   *  픽업포인트까지 위치가 너무 먼 경우
 * TOO_FAR_BETWEEN_ORIGIN_AND_PICKUP_POINT :
   *  출발지와 픽업포인트 위치가 너무 먼 경우
 * VEHICLE_CONTROL_FAILURE :
   *  자동차 제어에 실패한 경우
 * CONFIRM_REQUIRED :
   *  해당 액션을 수행하려면 재확인이 필요한 경우
 * BAN_CONFIRM_REQUIRED :
   *  해당 액션을 수행하려면 이미지가 들어간 팝업의 재확인이 필요한 경우
 * IMPORTANT_CONFIRM_REQUIRED :
   *  해당 액션을 수행하려면 중요한 재확인이 필요한 경우
 * INVALID_VERIFICATION_CODE :
   *  휴대폰 인증번호가 맞지 않는 경우.
 * VERIFICATION_TOKEN_EXPIRED :
   *  휴대폰 인증을 위한 토큰이 만료된 경우
 * INVALID_VERIFICATION_TOKEN :
   *  휴대폰 인증을 위한 토큰이 유효하지 않은 경우
 * VERIFIED_TOKEN_EXPIRED :
   *  휴대폰 인증을 위한 토큰이 만료된 경우
 * INVALID_VERIFIED_TOKEN :
   *  휴대폰 인증을 위한 토큰이 유효하지 않은 경우
 * INVALID_RESET_PASSWORD_TOKEN :
   *  비밀번호 재설정을 위한 토큰이 유효하지 않은 경우
 * RESET_PASSWORD_TOKEN_EXPIRED :
   *  비밀번호 재설정을 위한 토큰이 만료된 경우
 * RIDE_COUPON_REGISTER_FAILURE :
   *  쿠폰 등록에 실패한 경우
 * RIDE_COUPON_NOT_FOUND :
   *  쿠폰이 존재하지 않는 경우
 * ACCEPT_TOKEN_EXPIRED :
   *  약관 ACCEPT_TOKEN이 유효하지 않은 경우
 * INVALID_ACCEPT_TOKEN :
   *  약관 ACCEPT_TOKEN이 유효하지 않은 경우
 * INVALID_ACCEPTING_TERMS_COMBINATION :
   *  약관 수락 조합이 유효하지 않은 경우 (필수 항목이 빠졌거나 등등)
 * RIDE_COUPON_UNAVAILABLE :
   *  라이드에 대해 쿠폰을 사용할 수 없는 경우
 * INVALID_IDENTITY_CERTIFICATION_TOKEN :
   *  본인 인증 토큰이 유효하지 않은 경우
 * IDENTITY_CERTIFICATION_TOKEN_EXPIRED :
   *  본인 인증 토큰이 만료된 경우
 * IDENTITY_CERTIFICATION_REQUIRED :
   *  본인 인증이 필요한 경우
 * DRIVER_LICENSE_REGISTER_REQUIRED :
   *  운전면허 등록이 필요한 경우
 * DRIVER_PROTECTION_FEE_PRODUCT_PURCHASE_FAILED :
   *  PF 구매에 실패한 경우
 * PAYMENT_METHOD_REGISTER_REQUIRED :
   *  결제수단 등록이 필요한 경우
 * DRIVER_PROTECTION_FEE_PRODUCT_PURCHASE_REQUIRED :
   *  PF 구매가 필요한 경우
 * DRIVER_LICENSE_REGISTER_FAILED :
   *  운전면허 등록에 실패한 경우
 * INVALID_DRIVER_LICENSE_FORMAT :
   *  운전면허의 각종 포맷이 유효하지 않은 경우
 * INVALID_DRIVER_PROTECTION_FEE_PRODUCT :
   *  불가능한 PF 상품을 구매 시도한 경우
 * DRIVER_LICENSE_VERIFY_FAILED :
   *  운전면허 검증에 실패한 경우
 * DAERI_MISSION_PREFERENCES_REQUIRED :
   *  (핸들모아 대리) 선호조건이 설정되지 않은 경우
 * INVALID_GIG_DRIVER_LICENSE_STATUS :
   *  핸들모아 가입신청 상태가 잘못된 경우
 * INVALID_DRIVER_MISSION_STATUS :
   *  미션이 수락할 수 없는 상태인 경우
 * DRIVER_DELETE_FAILED_PENDING_PAYMENT_EXIST :
   *  핸들모아 드라이버 삭제 시 미납된 돈이 있는 경우
 * DRIVER_DELETE_FAILED_REMAIN_POINT_EXIST :
   *  핸들모아 드라이버 삭제 시 출금하지 않은 돈이 있는 경우
 * ACCIDENT_ALREADY_REPORTED :
   *  사고접수가 이미 된 경우 (강제 접수 불가능)
 * TERMS_ALREADY_ACCEPTED :
   *  이미 수락한 약관에 대해 다시 수락하려고 하는 경우
 * INVALID_EMAIL_FORMAT :
   *  Email이 유효하지 않은 경우
 * EMAIL_ALREADY_EXISTS :
   *  이미 가입된 Email인 경우
 * INVALID_PASSWORD_FORMAT :
   *  비밀번호 형태가 올바르지 않은 경우.
 * INVALID_NICKNAME_FORMAT :
   *  닉네임 형태가 올바르지 않은 경우.
 * PHONE_NUMBER_ALREADY_EXISTS :
   *  이미 가입된 전화번호인 경우
 * INVALID_CARD_INFO :
   *  입력된 카드 정보가 잘못된 경우
 * CARD_REGISTRATION_FAILURE :
   *  카드를 PG사에 등록하다 실패한 경우
 * PAYMENT_METHOD_COUNT_LIMIT_EXCEEDED :
   *  등록 가능한 결제 수단 개수를 초과한 경우
 * PAYMENT_METHOD_DOES_NOT_EXIST :
   *  해당하는 결제 수단이 존재하지 않는 경우
 * PAYMENT_METHOD_DELETE_FAILURE :
   *  결제수단 삭제에 실패한 경우
 * UNVERIFIED_PHONE_NUMBER :
   *  휴대폰 번호가 인증되어 있지 않은 경우
 * INVALID_LICENSE_PLATE_FORMAT :
   *  차량번호가 유효하지 않은 경우
 * SMS_SEND_FAILURE :
   *  SMS가 보내지지 않은 경우
 * EMAIL_SEND_FAILURE :
   *  이메일이 보내지지 않은 경우
 * REQUEST_FAILURE :
   *  외부 요청이 실패한 경우 (e.g. Firebase로의 요청)
 * ASSIST_REGISTRATION_FAILURE :
   *  어시스트 등록에 실패한 경우
 * ASSIST_CANCEL_FAILURE :
   *  어시스트 취소에 실패한 경우
 * BUSINESS_PAYMENT_PROFILE_CREATE_FAILURE :
   *  비즈니스 프로필 등록 실패
 * PAYMENT_PROFILE_DELETE_FAILURE :
   *  결제 프로필 삭제 실패
 * PAYMENT_PROFILE_CHANGED :
   *  클라이언트가 올려준 결제 프로필의 결제 수단 정보가 최신이 아닐 때
 * BUSINESS_PAYMENT_PROFILE_ACTIVATION_UNAVAILBLE :
   *  클라이언트가 올려준 비즈니스 결제 프로필 등록 정보로 등록할 수 없을 때
 * BUSINESS_PAYMENT_PROFILE_VERIFICATION_NEEDED :
   *  비즈니스 계정 재인증이 필요한 경우
 * PAYMENT_PROFILE_DOES_NOT_EXIST :
   *  해당하는 결제 계정이 존재하지 않는 경우
 * INVALID_PAYMENT_METHOD_STATUS :
   *  결제 수단이 호출 불가 상태
 * INVALID_RIDE_FEE :
   *  운행요금이 기본요금보다 적게 입력되었거나, 통행료만 입력된 경우
 * RIDE_RESERVATION_EXCEED_LIMIT :
   *  호출 예약에서 유저 1인당 최대 예약 가능한 예약 수를 넘은 경우
 * RIDE_RESERVATION_EXPECTED_PICK_UP_AT_NOT_IN_AVAILABLE_TIME :
   *  호출 예약에서 예약하려는 시간이 최소 예약 가능 시간 ~ 최대 예약 가능 시간의 범위를 벗어난 경우
 * RIDE_RESERVATION_ALREADY_EXISTS_IN_EXPECTED_PICK_UP_AT_LIST :
   *  호출 예약에서 이미 리스트에 추가한 예약 시간과 겹치는 예약 시간이 있는 경우
 * RIDE_RESERVATION_ALREADY_RESERVED :
   *  호출 예약에서 이미 예약한 호출 예약 건과 겹치는 시간의 예약을 추가하려는 경우
 */
export declare type ErrorCode = 'UNKNOWN' | 'BAD_REQUEST' | 'ACCOUNT_DOES_NOT_EXIST' | 'GEOCODING_FAILURE' | 'UNAVAILABLE_ORIGIN' | 'UNAVAILABLE_DESTINATION' | 'UNAVAILABLE_RIDE_TYPE' | 'UPGRADE_NEEDED' | 'UNAVAILABLE_TIME' | 'ASSIST_REGISTRATION_REQUIRED' | 'PAYMENT_METHOD_NOT_REGISTERED_FOR_ASSIST' | 'INVALID_PAYMENT_PROFILE_STATUS' | 'INACTIVE_USER' | 'UNAVAILABLE_WAYPOINTS' | 'RIDE_ALREADY_REVIEWED' | 'RIDE_REVIEW_DOES_NOT_EXIST' | 'TRIP_ALREADY_REVIEWED' | 'RIDE_RESERVATION_ALREADY_ACCEPTED' | 'PAYMENT_METHOD_EXPIRED' | 'HAS_FAILED_PAYMENT' | 'HAS_UPDATED_TERMS' | 'HAS_UPDATED_FEE_TERMS' | 'INSUFFICIENT_BIZ_CREDIT' | 'TIP_WITH_BIZ_CREDIT' | 'PAYMENT_METHOD_REGISTER_FAILED' | 'AUTHORIZATION_REQUIRED' | 'INVALID_ACCESS_TOKEN' | 'INVALID_PASSWORD' | 'INVALID_ESTIMATION_TOKEN' | 'REESTIMATION_NEEDED' | 'INVALID_PHONE_NUMBER' | 'TOO_FAR_PICKUP_POINT' | 'TOO_FAR_BETWEEN_ORIGIN_AND_PICKUP_POINT' | 'VEHICLE_CONTROL_FAILURE' | 'CONFIRM_REQUIRED' | 'BAN_CONFIRM_REQUIRED' | 'IMPORTANT_CONFIRM_REQUIRED' | 'INVALID_VERIFICATION_CODE' | 'VERIFICATION_TOKEN_EXPIRED' | 'INVALID_VERIFICATION_TOKEN' | 'VERIFIED_TOKEN_EXPIRED' | 'INVALID_VERIFIED_TOKEN' | 'INVALID_RESET_PASSWORD_TOKEN' | 'RESET_PASSWORD_TOKEN_EXPIRED' | 'RIDE_COUPON_REGISTER_FAILURE' | 'RIDE_COUPON_NOT_FOUND' | 'ACCEPT_TOKEN_EXPIRED' | 'INVALID_ACCEPT_TOKEN' | 'INVALID_ACCEPTING_TERMS_COMBINATION' | 'RIDE_COUPON_UNAVAILABLE' | 'INVALID_IDENTITY_CERTIFICATION_TOKEN' | 'IDENTITY_CERTIFICATION_TOKEN_EXPIRED' | 'IDENTITY_CERTIFICATION_REQUIRED' | 'DRIVER_LICENSE_REGISTER_REQUIRED' | 'DRIVER_PROTECTION_FEE_PRODUCT_PURCHASE_FAILED' | 'PAYMENT_METHOD_REGISTER_REQUIRED' | 'DRIVER_PROTECTION_FEE_PRODUCT_PURCHASE_REQUIRED' | 'DRIVER_LICENSE_REGISTER_FAILED' | 'INVALID_DRIVER_LICENSE_FORMAT' | 'INVALID_DRIVER_PROTECTION_FEE_PRODUCT' | 'DRIVER_LICENSE_VERIFY_FAILED' | 'DAERI_MISSION_PREFERENCES_REQUIRED' | 'INVALID_GIG_DRIVER_LICENSE_STATUS' | 'INVALID_DRIVER_MISSION_STATUS' | 'DRIVER_DELETE_FAILED_PENDING_PAYMENT_EXIST' | 'DRIVER_DELETE_FAILED_REMAIN_POINT_EXIST' | 'ACCIDENT_ALREADY_REPORTED' | 'TERMS_ALREADY_ACCEPTED' | 'INVALID_EMAIL_FORMAT' | 'EMAIL_ALREADY_EXISTS' | 'INVALID_PASSWORD_FORMAT' | 'INVALID_NICKNAME_FORMAT' | 'PHONE_NUMBER_ALREADY_EXISTS' | 'INVALID_CARD_INFO' | 'CARD_REGISTRATION_FAILURE' | 'PAYMENT_METHOD_COUNT_LIMIT_EXCEEDED' | 'PAYMENT_METHOD_DOES_NOT_EXIST' | 'PAYMENT_METHOD_DELETE_FAILURE' | 'UNVERIFIED_PHONE_NUMBER' | 'INVALID_LICENSE_PLATE_FORMAT' | 'SMS_SEND_FAILURE' | 'EMAIL_SEND_FAILURE' | 'REQUEST_FAILURE' | 'ASSIST_REGISTRATION_FAILURE' | 'ASSIST_CANCEL_FAILURE' | 'BUSINESS_PAYMENT_PROFILE_CREATE_FAILURE' | 'PAYMENT_PROFILE_DELETE_FAILURE' | 'PAYMENT_PROFILE_CHANGED' | 'BUSINESS_PAYMENT_PROFILE_ACTIVATION_UNAVAILBLE' | 'BUSINESS_PAYMENT_PROFILE_VERIFICATION_NEEDED' | 'PAYMENT_PROFILE_DOES_NOT_EXIST' | 'INVALID_PAYMENT_METHOD_STATUS' | 'INVALID_RIDE_FEE' | 'RIDE_RESERVATION_EXCEED_LIMIT' | 'RIDE_RESERVATION_EXPECTED_PICK_UP_AT_NOT_IN_AVAILABLE_TIME' | 'RIDE_RESERVATION_ALREADY_EXISTS_IN_EXPECTED_PICK_UP_AT_LIST' | 'RIDE_RESERVATION_ALREADY_RESERVED';
export declare function ErrorCode_fromString(str: string): ErrorCode | undefined;
/**
 *  ErrorDTO의 extra Map에 들어가는 key들의 모음
 *
 * PASSWORD_WEAKNESS_REASON :
   *  INVALID_PASSWORD_FORMAT과 함께 내려간다.
   *  비밀번호가 약한 이유의 분류에 대한 값을 가진다.
   *  참고: UserValidatePassword.proto
 */
export declare type ExtraKeys = 'UNSPECIFIED' | 'PASSWORD_WEAKNESS_REASON';
export declare function ExtraKeys_fromString(str: string): ExtraKeys | undefined;
export interface ErrorDTO {
    code?: ErrorCode;
    message: string;
    extra: {
        [key: string]: string;
    };
    title?: StringValue;
}
export declare namespace ErrorDTO {
    function fromObject(obj: any): ErrorDTO;
}
