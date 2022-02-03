import { StringValue } from '../wrappers';
export interface UserSubmitNpsRecordParams {
    score: number;
    reason?: StringValue;
}
export declare namespace UserSubmitNpsRecordParams {
    function fromObject(obj: any): UserSubmitNpsRecordParams;
}
export interface UserSubmitNpsRecordResult {
}
export declare namespace UserSubmitNpsRecordResult {
    function fromObject(obj: any): UserSubmitNpsRecordResult;
}
