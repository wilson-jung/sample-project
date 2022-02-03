/* eslint-disable */
import { StringValue, BoolValue } from '../wrappers';


export interface BrazeWebhookParams {
  userId: string;
  event?: BrazeWebhookParams.Event;
  campaignId?: StringValue;
  provideCouponOncePerUserId?: BoolValue;
  tag?: StringValue;
}

export namespace BrazeWebhookParams {
  export function fromObject(obj: any): BrazeWebhookParams {
    return {
      ...obj,
      event: BrazeWebhookParams.Event_fromString(obj.event),
      campaignId: obj.campaignId != null ? StringValue.fromObject(obj.campaignId) : undefined,
      provideCouponOncePerUserId: obj.provideCouponOncePerUserId != null ? BoolValue.fromObject(obj.provideCouponOncePerUserId) : undefined,
      tag: obj.tag != null ? StringValue.fromObject(obj.tag) : undefined,
    }
  }

  export type Event = 'MARKETING_AGREEMENT_BOOSTING_201909' | 'CAMPAIGN' | 'MARKETING_AGREEMENT_CAMPAIGN' | 'CUSTOM_LOG';

  export function Event_fromString(str: string): Event | undefined {
    switch (str) {
      case "MARKETING_AGREEMENT_BOOSTING_201909":
      case "CAMPAIGN":
      case "MARKETING_AGREEMENT_CAMPAIGN":
      case "CUSTOM_LOG":
      return str
      default: return undefined
    }
  }
}

export interface BrazeWebhookResult {
}

export namespace BrazeWebhookResult {
  export function fromObject(obj: any): BrazeWebhookResult {
    return {
      ...obj,
    }
  }
}
