import { StringValue } from '../wrappers';
import { CouponDTO } from '../coupon';
export interface UserRegisterCouponParams {
    code: string;
}
export declare namespace UserRegisterCouponParams {
    function fromObject(obj: any): UserRegisterCouponParams;
}
export interface UserRegisterCouponResult {
    popupBody?: StringValue;
    coupons: CouponDTO[];
}
export declare namespace UserRegisterCouponResult {
    function fromObject(obj: any): UserRegisterCouponResult;
}
