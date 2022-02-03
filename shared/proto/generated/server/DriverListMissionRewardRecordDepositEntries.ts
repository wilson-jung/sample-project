/* eslint-disable */
import { StringValue } from '../wrappers';
import { MissionRewardRecordDepositEntry } from '../mission';


export interface DriverListMissionRewardRecordDepositEntriesParams {
  nextToken?: StringValue;
}

export namespace DriverListMissionRewardRecordDepositEntriesParams {
  export function fromObject(obj: any): DriverListMissionRewardRecordDepositEntriesParams {
    return {
      ...obj,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}

export interface DriverListMissionRewardRecordDepositEntriesResult {
  entries: MissionRewardRecordDepositEntry[];
  nextToken?: StringValue;
}

export namespace DriverListMissionRewardRecordDepositEntriesResult {
  export function fromObject(obj: any): DriverListMissionRewardRecordDepositEntriesResult {
    return {
      ...obj,
      entries: obj.entries.map((v: any) => MissionRewardRecordDepositEntry.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}
