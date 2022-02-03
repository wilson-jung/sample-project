/* eslint-disable */
import { DriverMissionDTO } from '../mission';
import { BoolValue } from '../wrappers';


export interface DriverListMissionNoticeEntriesParams {
  missionType?: DriverMissionDTO.MissionType;
  /**
   *  콜 수신이 켜져있는지 여부
   */
  isReceivingMission?: BoolValue;
}

export namespace DriverListMissionNoticeEntriesParams {
  export function fromObject(obj: any): DriverListMissionNoticeEntriesParams {
    return {
      ...obj,
      missionType: DriverMissionDTO.MissionType_fromString(obj.missionType),
      isReceivingMission: obj.isReceivingMission != null ? BoolValue.fromObject(obj.isReceivingMission) : undefined,
    }
  }
}

export interface DriverListMissionNoticeEntriesResult {
  entries: DriverListMissionNoticeEntriesResult.Entry[];
}

export namespace DriverListMissionNoticeEntriesResult {
  export function fromObject(obj: any): DriverListMissionNoticeEntriesResult {
    return {
      ...obj,
      entries: obj.entries.map((v: any) => DriverListMissionNoticeEntriesResult.Entry.fromObject(v)),
    }
  }

  export interface Entry {
    title: string;
    link: string;
  }

  export namespace Entry {
    export function fromObject(obj: any): Entry {
      return {
        ...obj,
      }
    }
  }
}
