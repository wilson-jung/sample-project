import { DriverStatusDTO } from '../common';
export interface DriverUpdateIdentityCertificationParams {
    identityCertificationToken: string;
}
export declare namespace DriverUpdateIdentityCertificationParams {
    function fromObject(obj: any): DriverUpdateIdentityCertificationParams;
}
export interface DriverUpdateIdentityCertificationResult {
    driverStatus?: DriverStatusDTO;
}
export declare namespace DriverUpdateIdentityCertificationResult {
    function fromObject(obj: any): DriverUpdateIdentityCertificationResult;
}
