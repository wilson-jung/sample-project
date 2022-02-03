/* eslint-disable */
import { BoolValue } from '../wrappers';
import { UserSubscriptionBillingDTO } from '../user_subscription';


export interface UserListUserSubscriptionBillingsParams {
  unexpiredOnly?: BoolValue;
}

export namespace UserListUserSubscriptionBillingsParams {
  export function fromObject(obj: any): UserListUserSubscriptionBillingsParams {
    return {
      ...obj,
      unexpiredOnly: obj.unexpiredOnly != null ? BoolValue.fromObject(obj.unexpiredOnly) : undefined,
    }
  }
}

export interface UserListUserSubscriptionBillingsResult {
  billings: UserSubscriptionBillingDTO[];
}

export namespace UserListUserSubscriptionBillingsResult {
  export function fromObject(obj: any): UserListUserSubscriptionBillingsResult {
    return {
      ...obj,
      billings: obj.billings.map((v: any) => UserSubscriptionBillingDTO.fromObject(v)),
    }
  }
}
