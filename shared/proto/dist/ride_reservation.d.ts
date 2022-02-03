import { RideTypeDescription, RidePaymentMethodDTO, RidePaymentProfileDTO, RideDTO, RideCancellationFeeType, RideCancellationFeePolicy } from './ride';
import { Timestamp } from './timestamp';
import { AddressedLocation, DriverDTO, VehicleDTO, PopUp, UserDTO } from './common';
import { StringValue, Int32Value } from './wrappers';
export interface RideReservationDTO {
    id: string;
    rideTypeDescription?: RideTypeDescription;
    rideType: string;
    status?: RideReservationDTO.Status;
    expectedPickUpAt?: Timestamp;
    origin?: AddressedLocation;
    destination?: AddressedLocation;
    paymentMethod?: RidePaymentMethodDTO;
    paymentProfile?: RidePaymentProfileDTO;
    receipt?: RideReservationReceiptDTO;
    estimatedRoute?: RideReservationDTO.RideReservationEstimatedRoute;
    groupId: string;
    acceptExpiry?: Timestamp;
    createdAt?: Timestamp;
    acceptedAt?: Timestamp;
    prestartedAt?: Timestamp;
    startedAt?: Timestamp;
    cancelledAt?: Timestamp;
    /**
     *  RideReservation 콜 상세정보 조회 시 주의사항:
     *
     *  RideReservation의 expected_pick_up_at과 prestart_enable_at, start_enable_at 에 따라 버튼을 다르게 내려주어야 합니다.
     *
     *  운행 상세 화면 버튼 처리 방식
     *
     *  1) 현재시각 < prestart_enable_at                   -> '탑승지로 안내' 버튼 딤처리 및 '탑승시각 x시간 전부터 가능' 문구 추가
     *  2) prestart_enable_at <= 현재시각 < start_enable_at -> '탑승지로 안내' 버튼 활성화
     *  3) start_enable_at <= 현재시각                      -> '고객에게 탑승 준비 요청' 활성화
     */
    prestartEnableAt?: Timestamp;
    startEnableAt?: Timestamp;
    /**
     *  적립 예정인 크레딧 및 문구를 내려줍니다.
     *  1) deposit_description -> ex) "플러스 탑승 (5% 적립 예정)
     *  2) expected_credit_deposit_amount -> 예상 크레딧 적립양
     *  100이 내려갈 경우 "+ 100 크레딧"으로 표시해줘야 합니다.
     *  3) 호출예약에서는 credit_deposit_amount, expected_benefit_text를 사용하지 않습니다.
     */
    passportMembershipBenefit?: RideDTO.PassportMembershipBenefit;
    /**
     *  호출예약이 드라이버에 의해 accepted 된 경우에만 값이 설정됩니다.
     *  즉, CANCELLED 상태일때도 호출예약이 Accepted된 적이 없다면 설정되어 있지 않을 수 있습니다.
     *  또한, driver와 vehicle은 expected_pick_up_at 20분 전부터만 내려갑니다.
     */
    driver?: DriverDTO;
    vehicle?: VehicleDTO;
    showCallDriverButton: boolean;
    /**
     *  PENDING일 때만 내려간다.
     */
    driverAcceptWarningPopUp?: PopUp;
    /**
     *  ACCEPT, PRESTARTED일 때만 내려간다.
     */
    driverCancelWarningPopUp?: PopUp;
    cancellationCause?: RideReservationDTO.CancellationCause;
    cancellationFeeType?: RideCancellationFeeType;
    cancellationFeePolicies: RideCancellationFeePolicy[];
    isDriverNoShow: boolean;
    bizReason?: StringValue;
}
export declare namespace RideReservationDTO {
    function fromObject(obj: any): RideReservationDTO;
    type Status = 'UNSPECIFIED' | 'PENDING' | 'ACCEPTED' | 'PRESTARTED' | 'STARTED' | 'CANCELED';
    function Status_fromString(str: string): Status | undefined;
    interface CancellationCause {
        value?: RideReservationDTO.CancellationCause.Value;
    }
    namespace CancellationCause {
        function fromObject(obj: any): CancellationCause;
        /**
         * DRIVER_CANCEL_AFTER_EXPIRY :
           *  드라이버가 accept_expiry를 넘겨서 취소한 경우
         * RIDER_REQUESTED_RIDE :
           *  임박한 호출예약 건이 있는데 실시간 라이드를 호출한 경우
         * RIDER_HAS_ACTIVE_RIDE :
           *  드라이버가 예약 수행을 시작할 수 있는 시각까지 라이더가 라이드를 탑승 중인 경우
         * ADMIN_CANCELLED :
           *  어드민에서 호출예약을 취소한 경우
         */
        type Value = 'UNSPECIFIED' | 'DISPATCH_TIMEOUT' | 'RIDER_CANCELLED' | 'DRIVER_CANCEL_AFTER_EXPIRY' | 'RIDER_REQUESTED_RIDE' | 'RIDER_HAS_ACTIVE_RIDE' | 'ADMIN_CANCELLED';
        function Value_fromString(str: string): Value | undefined;
    }
    interface RideReservationEstimatedRoute {
        durationSeconds: number;
        distanceMeters: number;
    }
    namespace RideReservationEstimatedRoute {
        function fromObject(obj: any): RideReservationEstimatedRoute;
    }
}
export interface RideReservationReceiptDTO {
    totalPriceKrw: number;
    lineItem: RideReservationReceiptDTO.LineItem[];
    driverProfitKrw: number;
}
export declare namespace RideReservationReceiptDTO {
    function fromObject(obj: any): RideReservationReceiptDTO;
    interface LineItem {
        /**
         *  화면에 표시되어야 하는 이름
         */
        name: string;
        /**
         *  금액. 할인이라도 항상 양수가 들어온다.
         */
        amountKrw: number;
    }
    namespace LineItem {
        function fromObject(obj: any): LineItem;
    }
}
export interface RideReservationEstimationDTO {
    distanceMeters?: Int32Value;
    durationSeconds?: Int32Value;
    /**
     *  won
     */
    cost: number;
    surgePercentage: number;
    surgePolicyId?: StringValue;
    estimatedAt?: Timestamp;
}
export declare namespace RideReservationEstimationDTO {
    function fromObject(obj: any): RideReservationEstimationDTO;
}
export interface UserCompactRideReservationDTO {
    id: string;
    rideTypeDescription?: RideTypeDescription;
    rideType: string;
    status?: UserCompactRideReservationDTO.Status;
    expectedPickUpAt?: Timestamp;
    /**
     *  라이더가 요청한 출발 지점
     */
    origin?: AddressedLocation;
    /**
     *  라이더가 요청한 도착 지점
     */
    destination?: AddressedLocation;
    /**
     *  예상 요금
     */
    expectedPriceKrw: number;
    /**
     *  제공받을 패스포트 멤버십 혜택 관련 문구
     *  ex) "500 크레딧 적립 예정"
     */
    expectedPassportMembershipBenefitDescription?: StringValue;
}
export declare namespace UserCompactRideReservationDTO {
    function fromObject(obj: any): UserCompactRideReservationDTO;
    /**
     * PENDING :
       *  예약 접수
     * ACCEPTED :
       *  예약 확정
     * STARTED :
       *  탑승 중
     */
    type Status = 'UNKNOWN' | 'PENDING' | 'ACCEPTED' | 'STARTED';
    function Status_fromString(str: string): Status | undefined;
}
export interface DriverCompactRideReservationDTO {
    id: string;
    reservationAcceptedAt?: Timestamp;
    expectedPickUpAt?: Timestamp;
    cancelledAt?: Timestamp;
    cancellationCause?: RideReservationDTO.CancellationCause;
    cancellationReason?: StringValue;
    rider?: UserDTO;
    origin?: AddressedLocation;
    cancellationFee?: Int32Value;
}
export declare namespace DriverCompactRideReservationDTO {
    function fromObject(obj: any): DriverCompactRideReservationDTO;
}
