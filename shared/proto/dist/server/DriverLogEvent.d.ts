export interface DriverLogEventParams {
    eventKey?: DriverLogEventParams.EventKey;
    payload: string;
    clientTimeMs: string;
}
export declare namespace DriverLogEventParams {
    function fromObject(obj: any): DriverLogEventParams;
    type EventKey = 'CLICK_VIEW' | 'OPEN_NAVIGATION';
    function EventKey_fromString(str: string): EventKey | undefined;
}
export interface DriverLogEventResult {
}
export declare namespace DriverLogEventResult {
    function fromObject(obj: any): DriverLogEventResult;
}
