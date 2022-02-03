export interface UserLogEventParams {
    eventKey?: UserLogEventParams.EventKey;
    payload: string;
    clientTimeMs: string;
}
export declare namespace UserLogEventParams {
    function fromObject(obj: any): UserLogEventParams;
    type EventKey = 'CLICK_VIEW' | 'RIDE_AVAILABILITY_ISSUE';
    function EventKey_fromString(str: string): EventKey | undefined;
}
export interface UserLogEventResult {
}
export declare namespace UserLogEventResult {
    function fromObject(obj: any): UserLogEventResult;
}
