import { StringValue } from '../wrappers';
import { UserListCouponsParams } from '../server/UserListCoupons';
export interface OpenCouponSelectorParams {
    /**
     *  이미 선택 된 쿠폰의 id, null이면 선택 안한 상태
     */
    id?: StringValue;
    /**
     *  쿠폰 선택 뷰에서 선택 가능한 쿠폰을 보여줄 때 사용
     */
    params?: UserListCouponsParams;
}
export declare namespace OpenCouponSelectorParams {
    function fromObject(obj: any): OpenCouponSelectorParams;
}
export interface OpenCouponSelectorResult {
    /**
     *  선택된 쿠폰의 정보
     */
    couponId?: StringValue;
}
export declare namespace OpenCouponSelectorResult {
    function fromObject(obj: any): OpenCouponSelectorResult;
}
