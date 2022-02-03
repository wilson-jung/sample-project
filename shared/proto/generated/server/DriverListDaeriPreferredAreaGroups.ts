/* eslint-disable */
import { DaeriMissionPreferences } from '../common';


export interface DriverListDaeriPreferredAreaGroupsParams {
}

export namespace DriverListDaeriPreferredAreaGroupsParams {
  export function fromObject(obj: any): DriverListDaeriPreferredAreaGroupsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverListDaeriPreferredAreaGroupsResult {
  areaGroups: DriverListDaeriPreferredAreaGroupsResult.DaeriPreferredAreaGroup[];
}

export namespace DriverListDaeriPreferredAreaGroupsResult {
  export function fromObject(obj: any): DriverListDaeriPreferredAreaGroupsResult {
    return {
      ...obj,
      areaGroups: obj.areaGroups.map((v: any) => DriverListDaeriPreferredAreaGroupsResult.DaeriPreferredAreaGroup.fromObject(v)),
    }
  }

  export interface DaeriPreferredAreaGroup {
    siDo: string;
    areas: DaeriMissionPreferences.PreferredArea[];
  }

  export namespace DaeriPreferredAreaGroup {
    export function fromObject(obj: any): DaeriPreferredAreaGroup {
      return {
        ...obj,
        areas: obj.areas.map((v: any) => DaeriMissionPreferences.PreferredArea.fromObject(v)),
      }
    }
  }
}
