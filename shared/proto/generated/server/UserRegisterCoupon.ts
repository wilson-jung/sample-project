/* eslint-disable */
import { StringValue } from '../wrappers';
import { CouponDTO } from '../coupon';


export interface UserRegisterCouponParams {
  code: string;
}

export namespace UserRegisterCouponParams {
  export function fromObject(obj: any): UserRegisterCouponParams {
    return {
      ...obj,
    }
  }
}

export interface UserRegisterCouponResult {
  popupBody?: StringValue;
  coupons: CouponDTO[];
}

export namespace UserRegisterCouponResult {
  export function fromObject(obj: any): UserRegisterCouponResult {
    return {
      ...obj,
      popupBody: obj.popupBody != null ? StringValue.fromObject(obj.popupBody) : undefined,
      coupons: obj.coupons.map((v: any) => CouponDTO.fromObject(v)),
    }
  }
}
