/* eslint-disable */
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

export namespace DriverMissionDTO {
  export function fromObject(obj: any): DriverMissionDTO {
    return {
      ...obj,
      type: DriverMissionDTO.MissionType_fromString(obj.type),
      status: DriverMissionDTO.Status_fromString(obj.status),
      version: obj.version.toString(),
      ride: obj.ride != null ? RideDTO.fromObject(obj.ride) : undefined,
      promotion: obj.promotion != null ? DriverMissionPromotionDTO.fromObject(obj.promotion) : undefined,
      banner: obj.banner != null ? DriverMissionBannerDTO.fromObject(obj.banner) : undefined,
    }
  }

  export type MissionType = 'TRIP_BUNDLE' | 'DAERI';

  export function MissionType_fromString(str: string): MissionType | undefined {
    switch (str) {
      case "TRIP_BUNDLE":
      case "DAERI":
      return str
      default: return undefined
    }
  }

  export type Status = 'PENDING' | 'ACCEPTED' | 'STARTED' | 'COMPLETED' | 'CANCELLED';

  export function Status_fromString(str: string): Status | undefined {
    switch (str) {
      case "PENDING":
      case "ACCEPTED":
      case "STARTED":
      case "COMPLETED":
      case "CANCELLED":
      return str
      default: return undefined
    }
  }
}

export interface DriverMissionBannerDTO {
  bannerEmoji: string;
  bannerText: string;
}

export namespace DriverMissionBannerDTO {
  export function fromObject(obj: any): DriverMissionBannerDTO {
    return {
      ...obj,
    }
  }
}

export interface DriverMissionPromotionDTO {
  /**
   *  프로모션 타입 (예. BARO_DAERI)
   */
  type: string;
}

export namespace DriverMissionPromotionDTO {
  export function fromObject(obj: any): DriverMissionPromotionDTO {
    return {
      ...obj,
    }
  }
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

export namespace MissionDispatchTicketDTO {
  export function fromObject(obj: any): MissionDispatchTicketDTO {
    return {
      ...obj,
      expiresAt: obj.expiresAt != null ? Timestamp.fromObject(obj.expiresAt) : undefined,
      activeUntil: obj.activeUntil != null ? Timestamp.fromObject(obj.activeUntil) : undefined,
    }
  }
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

export namespace MissionDispatchTicketCampaignDTO {
  export function fromObject(obj: any): MissionDispatchTicketCampaignDTO {
    return {
      ...obj,
    }
  }
}

export interface MissionRewardRecordDepositEntry {
  title: string;
  type?: MissionRewardRecordDepositEntry.Type;
  timestamp?: Timestamp;
  amount: number;
}

export namespace MissionRewardRecordDepositEntry {
  export function fromObject(obj: any): MissionRewardRecordDepositEntry {
    return {
      ...obj,
      type: MissionRewardRecordDepositEntry.Type_fromString(obj.type),
      timestamp: obj.timestamp != null ? Timestamp.fromObject(obj.timestamp) : undefined,
    }
  }

  export type Type = 'MISSION_REWARD_RECORD' | 'ADDITIONAL_POINT' | 'EVENT';

  export function Type_fromString(str: string): Type | undefined {
    switch (str) {
      case "MISSION_REWARD_RECORD":
      case "ADDITIONAL_POINT":
      case "EVENT":
      return str
      default: return undefined
    }
  }
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

export namespace DriverMissionStatisticsDTO {
  export function fromObject(obj: any): DriverMissionStatisticsDTO {
    return {
      ...obj,
      periodType: DriverMissionStatisticsDTO.PeriodType_fromString(obj.periodType),
      counts: obj.counts.map((v: any) => DriverMissionStatisticsDTO.MissionCountDTO.fromObject(v)),
    }
  }

  export type PeriodType = 'ALL' | 'MONTHLY' | 'DAILY';

  export function PeriodType_fromString(str: string): PeriodType | undefined {
    switch (str) {
      case "ALL":
      case "MONTHLY":
      case "DAILY":
      return str
      default: return undefined
    }
  }

  export interface MissionCountDTO {
    type?: DriverMissionDTO.MissionType;
    count: number;
  }

  export namespace MissionCountDTO {
    export function fromObject(obj: any): MissionCountDTO {
      return {
        ...obj,
        type: DriverMissionDTO.MissionType_fromString(obj.type),
      }
    }
  }
}

export interface DriverCompactMissionDTO {
  id: string;
  type?: DriverMissionDTO.MissionType;
  status?: DriverMissionDTO.Status;
  totalFee: number;
  ride?: DriverCompactRideDTO;
}

export namespace DriverCompactMissionDTO {
  export function fromObject(obj: any): DriverCompactMissionDTO {
    return {
      ...obj,
      type: DriverMissionDTO.MissionType_fromString(obj.type),
      status: DriverMissionDTO.Status_fromString(obj.status),
      ride: obj.ride != null ? DriverCompactRideDTO.fromObject(obj.ride) : undefined,
    }
  }
}
