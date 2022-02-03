import { StringValue, BoolValue } from '../wrappers';
export interface BrazeWebhookParams {
    userId: string;
    event?: BrazeWebhookParams.Event;
    campaignId?: StringValue;
    provideCouponOncePerUserId?: BoolValue;
    tag?: StringValue;
}
export declare namespace BrazeWebhookParams {
    function fromObject(obj: any): BrazeWebhookParams;
    type Event = 'MARKETING_AGREEMENT_BOOSTING_201909' | 'CAMPAIGN' | 'MARKETING_AGREEMENT_CAMPAIGN' | 'CUSTOM_LOG';
    function Event_fromString(str: string): Event | undefined;
}
export interface BrazeWebhookResult {
}
export declare namespace BrazeWebhookResult {
    function fromObject(obj: any): BrazeWebhookResult;
}
