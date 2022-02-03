import { StringValue, Int32Value } from '../wrappers';
import { DriverProtectionFeeProductPurchaseDTO } from '../common';
export interface DriverListDriverProtectionFeeProductPurchasesParams {
    nextToken?: StringValue;
    limit?: Int32Value;
}
export declare namespace DriverListDriverProtectionFeeProductPurchasesParams {
    function fromObject(obj: any): DriverListDriverProtectionFeeProductPurchasesParams;
}
export interface DriverListDriverProtectionFeeProductPurchasesResult {
    driverProtectionFeeProductPurchases: DriverProtectionFeeProductPurchaseDTO[];
    nextToken?: StringValue;
}
export declare namespace DriverListDriverProtectionFeeProductPurchasesResult {
    function fromObject(obj: any): DriverListDriverProtectionFeeProductPurchasesResult;
}
