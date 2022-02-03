import { DriverInsuranceInformationDTO } from '../common';
export interface DriverListDriverInsurancesViewParams {
}
export declare namespace DriverListDriverInsurancesViewParams {
    function fromObject(obj: any): DriverListDriverInsurancesViewParams;
}
/**
 *  내보험 목록 응답
 */
export interface DriverListDriverInsurancesViewResult {
    /**
     *  적용 예정 보험
     */
    scheduledInsuranceInformation?: DriverInsuranceInformationDTO;
    /**
     *  현재 적용된 보험
     */
    currentInsuranceInformation?: DriverInsuranceInformationDTO;
    /**
     *  지난 보험 목록
     */
    previousInsuranceInformations: DriverInsuranceInformationDTO[];
    daeriTermUrl: string;
}
export declare namespace DriverListDriverInsurancesViewResult {
    function fromObject(obj: any): DriverListDriverInsurancesViewResult;
}
