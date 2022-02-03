/* eslint-disable */
import { BoolValue } from '../wrappers';
import { UserSubscriptionBillingDTO } from '../user_subscription';


export interface UserListUserMembershipBillingsParams {
  unexpiredOnly?: BoolValue;
}

export namespace UserListUserMembershipBillingsParams {
  export function fromObject(obj: any): UserListUserMembershipBillingsParams {
    return {
      ...obj,
      unexpiredOnly: obj.unexpiredOnly != null ? BoolValue.fromObject(obj.unexpiredOnly) : undefined,
    }
  }
}

export interface UserListUserMembershipBillingsResult {
  billings: UserSubscriptionBillingDTO[];
}

export namespace UserListUserMembershipBillingsResult {
  export function fromObject(obj: any): UserListUserMembershipBillingsResult {
    return {
      ...obj,
      billings: obj.billings.map((v: any) => UserSubscriptionBillingDTO.fromObject(v)),
    }
  }
}
