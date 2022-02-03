/* eslint-disable */
import { DriverDTO, GigDriverStatusDTO } from '../common';
import { DriverMissionDTO, MissionDispatchTicketDTO } from '../mission';


export interface DriverGetGigDriverStatusParams {
}

export namespace DriverGetGigDriverStatusParams {
  export function fromObject(obj: any): DriverGetGigDriverStatusParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetGigDriverStatusResult {
  driver?: DriverDTO;
  gigDriverStatus?: GigDriverStatusDTO;
  /**
   *  수행 중이거나 1:1 배정된 미션이 있을 때만 존재
   */
  mission?: DriverMissionDTO;
  /**
   *  현재 활성화된 1:1 배정권. 존재할 경우에만 내려감
   */
  missionDispatchTicket?: MissionDispatchTicketDTO;
  /**
   *  보유 중인 1:1 배정권 갯수
   */
  remainingMissionDispatchTicketCount: number;
  daeriDispatchTicketNewBadge: boolean;
}

export namespace DriverGetGigDriverStatusResult {
  export function fromObject(obj: any): DriverGetGigDriverStatusResult {
    return {
      ...obj,
      driver: obj.driver != null ? DriverDTO.fromObject(obj.driver) : undefined,
      gigDriverStatus: obj.gigDriverStatus != null ? GigDriverStatusDTO.fromObject(obj.gigDriverStatus) : undefined,
      mission: obj.mission != null ? DriverMissionDTO.fromObject(obj.mission) : undefined,
      missionDispatchTicket: obj.missionDispatchTicket != null ? MissionDispatchTicketDTO.fromObject(obj.missionDispatchTicket) : undefined,
    }
  }
}
