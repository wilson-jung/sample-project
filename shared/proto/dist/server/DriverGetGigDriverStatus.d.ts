import { DriverDTO, GigDriverStatusDTO } from '../common';
import { DriverMissionDTO, MissionDispatchTicketDTO } from '../mission';
export interface DriverGetGigDriverStatusParams {
}
export declare namespace DriverGetGigDriverStatusParams {
    function fromObject(obj: any): DriverGetGigDriverStatusParams;
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
export declare namespace DriverGetGigDriverStatusResult {
    function fromObject(obj: any): DriverGetGigDriverStatusResult;
}
