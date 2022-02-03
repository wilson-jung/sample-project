/* eslint-disable */
import { UserSubscriptionDTO } from '../user_subscription';


export interface UserGetUserSubscriptionParams {
  subscriptionId: string;
}

export namespace UserGetUserSubscriptionParams {
  export function fromObject(obj: any): UserGetUserSubscriptionParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetUserSubscriptionResult {
  subscription?: UserSubscriptionDTO;
}

export namespace UserGetUserSubscriptionResult {
  export function fromObject(obj: any): UserGetUserSubscriptionResult {
    return {
      ...obj,
      subscription: obj.subscription != null ? UserSubscriptionDTO.fromObject(obj.subscription) : undefined,
    }
  }
}
