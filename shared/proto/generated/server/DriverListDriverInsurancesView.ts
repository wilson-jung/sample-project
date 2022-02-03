/* eslint-disable */
import { DriverInsuranceInformationDTO } from '../common';


export interface DriverListDriverInsurancesViewParams {
}

export namespace DriverListDriverInsurancesViewParams {
  export function fromObject(obj: any): DriverListDriverInsurancesViewParams {
    return {
      ...obj,
    }
  }
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

export namespace DriverListDriverInsurancesViewResult {
  export function fromObject(obj: any): DriverListDriverInsurancesViewResult {
    return {
      ...obj,
      scheduledInsuranceInformation: obj.scheduledInsuranceInformation != null ? DriverInsuranceInformationDTO.fromObject(obj.scheduledInsuranceInformation) : undefined,
      currentInsuranceInformation: obj.currentInsuranceInformation != null ? DriverInsuranceInformationDTO.fromObject(obj.currentInsuranceInformation) : undefined,
      previousInsuranceInformations: obj.previousInsuranceInformations.map((v: any) => DriverInsuranceInformationDTO.fromObject(v)),
    }
  }
}
