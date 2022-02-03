/* eslint-disable */
import { UserMembershipDTO } from '../membership';


export interface UserPurchaseUserMembershipProductParams {
  productId: string;
  paymentMethodId: string;
}

export namespace UserPurchaseUserMembershipProductParams {
  export function fromObject(obj: any): UserPurchaseUserMembershipProductParams {
    return {
      ...obj,
    }
  }
}

export interface UserPurchaseUserMembershipProductResult {
  membership?: UserMembershipDTO;
}

export namespace UserPurchaseUserMembershipProductResult {
  export function fromObject(obj: any): UserPurchaseUserMembershipProductResult {
    return {
      ...obj,
      membership: obj.membership != null ? UserMembershipDTO.fromObject(obj.membership) : undefined,
    }
  }
}
