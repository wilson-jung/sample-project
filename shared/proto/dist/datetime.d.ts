export interface Datetime {
    year: number;
    month: number;
    dayOfMonth: number;
    hour: number;
    minute: number;
    dayOfWeek?: Datetime.DayOfWeek;
}
export declare namespace Datetime {
    function fromObject(obj: any): Datetime;
    type DayOfWeek = 'SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';
    function DayOfWeek_fromString(str: string): DayOfWeek | undefined;
}
