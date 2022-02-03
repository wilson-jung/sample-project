import { StringValue } from '../wrappers';
import { MissionRewardRecordDepositEntry } from '../mission';
export interface DriverListMissionRewardRecordDepositEntriesParams {
    nextToken?: StringValue;
}
export declare namespace DriverListMissionRewardRecordDepositEntriesParams {
    function fromObject(obj: any): DriverListMissionRewardRecordDepositEntriesParams;
}
export interface DriverListMissionRewardRecordDepositEntriesResult {
    entries: MissionRewardRecordDepositEntry[];
    nextToken?: StringValue;
}
export declare namespace DriverListMissionRewardRecordDepositEntriesResult {
    function fromObject(obj: any): DriverListMissionRewardRecordDepositEntriesResult;
}
