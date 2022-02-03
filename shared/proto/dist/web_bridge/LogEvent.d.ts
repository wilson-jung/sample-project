/**
 *  [웹 -> 앱 전달용]
 *  Client log 에 남기도록 하는 Bridge Call
 */
export interface LogEventParams {
    eventName: string;
    params: {
        [key: string]: string;
    };
}
export declare namespace LogEventParams {
    function fromObject(obj: any): LogEventParams;
}
export interface LogEventResult {
}
export declare namespace LogEventResult {
    function fromObject(obj: any): LogEventResult;
}
