import { Timestamp } from '../timestamp';
import { AccidentReportDTO } from '../common';
/**
 *  [서버 -> 웹 전달용]
 *  사고 접수 폼에서 미리 채워줄 정보 전달
 */
export interface AccidentReportInitialData {
    rideId: string;
    /**
     *  라이드가 이미 종료된 경우 종료 시각
     *  아직 라이드 중이면 null
     */
    rideFinishedAt?: Timestamp;
}
export declare namespace AccidentReportInitialData {
    function fromObject(obj: any): AccidentReportInitialData;
}
/**
 *  [웹 -> 클라이언트 전달용]
 *  사고 접수되었을 때
 */
export interface ReturnAccidentReportParams {
    accidentReport?: AccidentReportDTO;
}
export declare namespace ReturnAccidentReportParams {
    function fromObject(obj: any): ReturnAccidentReportParams;
}
export interface ReturnAccidentReportResult {
}
export declare namespace ReturnAccidentReportResult {
    function fromObject(obj: any): ReturnAccidentReportResult;
}
