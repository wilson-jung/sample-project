/* eslint-disable */
import { DriverLicenseDTO } from '../common';


export interface DriverRegisterDriverLicenseParams {
  /**
   *  운전면허 등록지역 코드
   */
  licenseIssueAreaCode: string;
  /**
   *  면허 번호 XX-XXXXXX-XX
   */
  licenseNumber: string;
  /**
   *  생년월일 (XXXXXX)
   */
  registrationNumberFront: string;
  /**
   *  주민등록번호 뒷자리 첫번째 숫자
   */
  registrationNumberBack: string;
  /**
   *  면허 만료일 (ISO8601 Local Date ex. yyyy-MM-dd)
   */
  expirationDate: string;
  /**
   *  주소
   */
  address: string;
}

export namespace DriverRegisterDriverLicenseParams {
  export function fromObject(obj: any): DriverRegisterDriverLicenseParams {
    return {
      ...obj,
    }
  }
}

export interface DriverRegisterDriverLicenseResult {
  driverLicense?: DriverLicenseDTO;
}

export namespace DriverRegisterDriverLicenseResult {
  export function fromObject(obj: any): DriverRegisterDriverLicenseResult {
    return {
      ...obj,
      driverLicense: obj.driverLicense != null ? DriverLicenseDTO.fromObject(obj.driverLicense) : undefined,
    }
  }
}
