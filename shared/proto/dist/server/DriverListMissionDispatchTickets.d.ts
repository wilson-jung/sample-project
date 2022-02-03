import { DriverMissionDTO, MissionDispatchTicketDTO } from '../mission';
import { Int32Value, StringValue } from '../wrappers';
export interface DriverListMissionDispatchTicketsParams {
    /**
     *  미션 타입 리스트. 빈 리스트인 경우에는 아무 1:1 배정권도 안내려간다.
     */
    types: DriverMissionDTO.MissionType[];
    limit?: Int32Value;
    /**
     *  다음 페이지를 볼 때 올려준다.
     */
    nextToken?: StringValue;
}
export declare namespace DriverListMissionDispatchTicketsParams {
    function fromObject(obj: any): DriverListMissionDispatchTicketsParams;
}
export interface DriverListMissionDispatchTicketsResult {
    tickets: MissionDispatchTicketDTO[];
    /**
     *  다음 페이지가 있을 때 내려간다.
     */
    nextToken?: StringValue;
}
export declare namespace DriverListMissionDispatchTicketsResult {
    function fromObject(obj: any): DriverListMissionDispatchTicketsResult;
}
