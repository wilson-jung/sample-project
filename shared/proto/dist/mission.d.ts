import { RideDTO, DriverCompactRideDTO } from './ride';
import { Timestamp } from './timestamp';
export interface DriverMissionDTO {
    id: string;
    type?: DriverMissionDTO.MissionType;
    status?: DriverMissionDTO.Status;
    estimatedFee: number;
    totalFee: number;
    version: string;
    ride?: RideDTO;
    promotion?: DriverMissionPromotionDTO;
    banner?: DriverMissionBannerDTO;
}
export declare namespace DriverMissionDTO {
    function fromObject(obj: any): DriverMissionDTO;
    type MissionType = 'TRIP_BUNDLE' | 'DAERI';
    function MissionType_fromString(str: string): MissionType | undefined;
    type Status = 'PENDING' | 'ACCEPTED' | 'STARTED' | 'COMPLETED' | 'CANCELLED';
    function Status_fromString(str: string): Status | undefined;
}
export interface DriverMissionBannerDTO {
    bannerEmoji: string;
    bannerText: string;
}
export declare namespace DriverMissionBannerDTO {
    function fromObject(obj: any): DriverMissionBannerDTO;
}
export interface DriverMissionPromotionDTO {
    /**
     *  프로모션 타입 (예. BARO_DAERI)
     */
    type: string;
}
export declare namespace DriverMissionPromotionDTO {
    function fromObject(obj: any): DriverMissionPromotionDTO;
}
export interface MissionDispatchTicketDTO {
    id: string;
    /**
     *  이름
     */
    name: string;
    /**
     *  사용가능 만료 기간
     */
    expiresAt?: Timestamp;
    /**
     *  사용중 여부
     */
    isActive: boolean;
    /**
     *  사용중인 경우 활성화 종료 시점
     */
    activeUntil?: Timestamp;
    /**
     *  해당 1:1 배정권으로 배정된 콜을 수락하지 않은(넘기기 + 타임아웃) 횟수
     */
    currentIgnoreCount: number;
    /**
     *  1:1 배정권이 expire 되는 미수락(넘기기 + 타임아웃) 횟수
     */
    allowedIgnoreCount: number;
}
export declare namespace MissionDispatchTicketDTO {
    function fromObject(obj: any): MissionDispatchTicketDTO;
}
export interface MissionDispatchTicketCampaignDTO {
    id: string;
    /**
     *  이름
     */
    name: string;
    /**
     *  획득여부
     */
    isProvided: boolean;
    /**
     *  1:1 배정권 획득 이벤트 달성 상태 설명 ("2콜 수행 / 총 3콜", "획득 완료" 등)
     */
    progressDescription: string;
}
export declare namespace MissionDispatchTicketCampaignDTO {
    function fromObject(obj: any): MissionDispatchTicketCampaignDTO;
}
export interface MissionRewardRecordDepositEntry {
    title: string;
    type?: MissionRewardRecordDepositEntry.Type;
    timestamp?: Timestamp;
    amount: number;
}
export declare namespace MissionRewardRecordDepositEntry {
    function fromObject(obj: any): MissionRewardRecordDepositEntry;
    type Type = 'MISSION_REWARD_RECORD' | 'ADDITIONAL_POINT' | 'EVENT';
    function Type_fromString(str: string): Type | undefined;
}
export interface DriverMissionStatisticsDTO {
    periodType?: DriverMissionStatisticsDTO.PeriodType;
    /**
     *  PeriodType에 해당하는 기간을 포멧에 맞게 내려간다.
     *  ALL: 빈 값
     *  MONTHLY: YYYY-MM
     *  DAILY: YYYY-MM-DD (KST, 해당 날짜 업무 시작시간 기준. 1월 1일 04시 이라면 1월 1일로 내려간다.)
     */
    period: string;
    totalRevenueKrw: number;
    totalCount: number;
    counts: DriverMissionStatisticsDTO.MissionCountDTO[];
}
export declare namespace DriverMissionStatisticsDTO {
    function fromObject(obj: any): DriverMissionStatisticsDTO;
    type PeriodType = 'ALL' | 'MONTHLY' | 'DAILY';
    function PeriodType_fromString(str: string): PeriodType | undefined;
    interface MissionCountDTO {
        type?: DriverMissionDTO.MissionType;
        count: number;
    }
    namespace MissionCountDTO {
        function fromObject(obj: any): MissionCountDTO;
    }
}
export interface DriverCompactMissionDTO {
    id: string;
    type?: DriverMissionDTO.MissionType;
    status?: DriverMissionDTO.Status;
    totalFee: number;
    ride?: DriverCompactRideDTO;
}
export declare namespace DriverCompactMissionDTO {
    function fromObject(obj: any): DriverCompactMissionDTO;
}
