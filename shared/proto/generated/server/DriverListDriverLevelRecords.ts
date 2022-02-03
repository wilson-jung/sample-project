/* eslint-disable */
import { DriverLevelDescription } from '../common';


export interface DriverListDriverLevelRecordsParams {
}

export namespace DriverListDriverLevelRecordsParams {
  export function fromObject(obj: any): DriverListDriverLevelRecordsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverListDriverLevelRecordsResult {
  levelRecords: DriverListDriverLevelRecordsResult.DriverLevelRecord[];
}

export namespace DriverListDriverLevelRecordsResult {
  export function fromObject(obj: any): DriverListDriverLevelRecordsResult {
    return {
      ...obj,
      levelRecords: obj.levelRecords.map((v: any) => DriverListDriverLevelRecordsResult.DriverLevelRecord.fromObject(v)),
    }
  }

  export interface DriverLevelRecord {
    /**
     *  연도와 월
     */
    year: number;
    month: number;
    /**
     *  해당 월의 드라이버 레벨
     */
    level?: DriverLevelDescription;
  }

  export namespace DriverLevelRecord {
    export function fromObject(obj: any): DriverLevelRecord {
      return {
        ...obj,
        level: obj.level != null ? DriverLevelDescription.fromObject(obj.level) : undefined,
      }
    }
  }
}
