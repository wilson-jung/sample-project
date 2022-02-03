import { DriverMissionDTO } from '../mission';
import { BoolValue } from '../wrappers';
export interface DriverListMissionNoticeEntriesParams {
    missionType?: DriverMissionDTO.MissionType;
    /**
     *  콜 수신이 켜져있는지 여부
     */
    isReceivingMission?: BoolValue;
}
export declare namespace DriverListMissionNoticeEntriesParams {
    function fromObject(obj: any): DriverListMissionNoticeEntriesParams;
}
export interface DriverListMissionNoticeEntriesResult {
    entries: DriverListMissionNoticeEntriesResult.Entry[];
}
export declare namespace DriverListMissionNoticeEntriesResult {
    function fromObject(obj: any): DriverListMissionNoticeEntriesResult;
    interface Entry {
        title: string;
        link: string;
    }
    namespace Entry {
        function fromObject(obj: any): Entry;
    }
}
