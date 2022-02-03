/* eslint-disable */


export interface Datetime {
  year: number;
  month: number;
  dayOfMonth: number;
  hour: number;
  minute: number;
  dayOfWeek?: Datetime.DayOfWeek;
}

export namespace Datetime {
  export function fromObject(obj: any): Datetime {
    return {
      ...obj,
      dayOfWeek: Datetime.DayOfWeek_fromString(obj.dayOfWeek),
    }
  }

  export type DayOfWeek = 'SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';

  export function DayOfWeek_fromString(str: string): DayOfWeek | undefined {
    switch (str) {
      case "SUNDAY":
      case "MONDAY":
      case "TUESDAY":
      case "WEDNESDAY":
      case "THURSDAY":
      case "FRIDAY":
      case "SATURDAY":
      return str
      default: return undefined
    }
  }
}
