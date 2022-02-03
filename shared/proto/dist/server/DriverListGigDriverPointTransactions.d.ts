import { StringValue } from '../wrappers';
import { Timestamp } from '../timestamp';
export interface DriverListGigDriverPointTransactionsParams {
    nextToken?: StringValue;
}
export declare namespace DriverListGigDriverPointTransactionsParams {
    function fromObject(obj: any): DriverListGigDriverPointTransactionsParams;
}
export interface GigDriverPointTransactionDetails {
    title: string;
    description?: StringValue;
    properties: GigDriverPointTransactionDetails.Property[];
    lineItems: GigDriverPointTransactionDetails.Property[];
    total?: GigDriverPointTransactionDetails.Property;
}
export declare namespace GigDriverPointTransactionDetails {
    function fromObject(obj: any): GigDriverPointTransactionDetails;
    interface Property {
        name: string;
        value: string;
        /**
         *  name 밑에 보이는 작은 글씨
         */
        description?: StringValue;
        descriptionStyle?: GigDriverPointTransactionDetails.Property.Style;
    }
    namespace Property {
        function fromObject(obj: any): Property;
        type Style = 'NORMAL' | 'FAILED';
        function Style_fromString(str: string): Style | undefined;
    }
}
export interface DriverListGigDriverPointTransactionsResult {
    entries: DriverListGigDriverPointTransactionsResult.Entry[];
    nextToken?: StringValue;
}
export declare namespace DriverListGigDriverPointTransactionsResult {
    function fromObject(obj: any): DriverListGigDriverPointTransactionsResult;
    interface Entry {
        id: string;
        timestamp?: Timestamp;
        description: string;
        amount: string;
        amountDescription?: StringValue;
        type?: DriverListGigDriverPointTransactionsResult.Entry.Type;
        details?: GigDriverPointTransactionDetails;
    }
    namespace Entry {
        function fromObject(obj: any): Entry;
        type Type = 'DEPOSIT_NORMAL' | 'DEPOSIT_REWARD' | 'DEPOSIT_EVENT' | 'DEPOSIT_FAILED_WITHDRAWAL' | 'WITHDRAWAL';
        function Type_fromString(str: string): Type | undefined;
    }
}
