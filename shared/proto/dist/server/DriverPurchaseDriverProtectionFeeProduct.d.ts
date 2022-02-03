import { DriverProtectionFeeProductPurchaseDTO } from '../common';
export interface DriverPurchaseDriverProtectionFeeProductParams {
    productId: string;
}
export declare namespace DriverPurchaseDriverProtectionFeeProductParams {
    function fromObject(obj: any): DriverPurchaseDriverProtectionFeeProductParams;
}
export interface DriverPurchaseDriverProtectionFeeProductResult {
    driverProtectionFeeProductPurchase?: DriverProtectionFeeProductPurchaseDTO;
}
export declare namespace DriverPurchaseDriverProtectionFeeProductResult {
    function fromObject(obj: any): DriverPurchaseDriverProtectionFeeProductResult;
}
