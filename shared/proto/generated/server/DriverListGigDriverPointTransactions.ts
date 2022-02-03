/* eslint-disable */
import { StringValue } from '../wrappers';
import { Timestamp } from '../timestamp';


export interface DriverListGigDriverPointTransactionsParams {
  nextToken?: StringValue;
}

export namespace DriverListGigDriverPointTransactionsParams {
  export function fromObject(obj: any): DriverListGigDriverPointTransactionsParams {
    return {
      ...obj,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }
}

export interface GigDriverPointTransactionDetails {
  title: string;
  description?: StringValue;
  properties: GigDriverPointTransactionDetails.Property[];
  lineItems: GigDriverPointTransactionDetails.Property[];
  total?: GigDriverPointTransactionDetails.Property;
}

export namespace GigDriverPointTransactionDetails {
  export function fromObject(obj: any): GigDriverPointTransactionDetails {
    return {
      ...obj,
      description: obj.description != null ? StringValue.fromObject(obj.description) : undefined,
      properties: obj.properties.map((v: any) => GigDriverPointTransactionDetails.Property.fromObject(v)),
      lineItems: obj.lineItems.map((v: any) => GigDriverPointTransactionDetails.Property.fromObject(v)),
      total: obj.total != null ? GigDriverPointTransactionDetails.Property.fromObject(obj.total) : undefined,
    }
  }

  export interface Property {
    name: string;
    value: string;
    /**
     *  name 밑에 보이는 작은 글씨
     */
    description?: StringValue;
    descriptionStyle?: GigDriverPointTransactionDetails.Property.Style;
  }

  export namespace Property {
    export function fromObject(obj: any): Property {
      return {
        ...obj,
        description: obj.description != null ? StringValue.fromObject(obj.description) : undefined,
        descriptionStyle: GigDriverPointTransactionDetails.Property.Style_fromString(obj.descriptionStyle),
      }
    }

    export type Style = 'NORMAL' | 'FAILED';

    export function Style_fromString(str: string): Style | undefined {
      switch (str) {
        case "NORMAL":
        case "FAILED":
        return str
        default: return undefined
      }
    }
  }
}

export interface DriverListGigDriverPointTransactionsResult {
  entries: DriverListGigDriverPointTransactionsResult.Entry[];
  nextToken?: StringValue;
}

export namespace DriverListGigDriverPointTransactionsResult {
  export function fromObject(obj: any): DriverListGigDriverPointTransactionsResult {
    return {
      ...obj,
      entries: obj.entries.map((v: any) => DriverListGigDriverPointTransactionsResult.Entry.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }

  export interface Entry {
    id: string;
    timestamp?: Timestamp;
    description: string;
    amount: string;
    amountDescription?: StringValue;
    type?: DriverListGigDriverPointTransactionsResult.Entry.Type;
    details?: GigDriverPointTransactionDetails;
  }

  export namespace Entry {
    export function fromObject(obj: any): Entry {
      return {
        ...obj,
        timestamp: obj.timestamp != null ? Timestamp.fromObject(obj.timestamp) : undefined,
        amountDescription: obj.amountDescription != null ? StringValue.fromObject(obj.amountDescription) : undefined,
        type: DriverListGigDriverPointTransactionsResult.Entry.Type_fromString(obj.type),
        details: obj.details != null ? GigDriverPointTransactionDetails.fromObject(obj.details) : undefined,
      }
    }

    export type Type = 'DEPOSIT_NORMAL' | 'DEPOSIT_REWARD' | 'DEPOSIT_EVENT' | 'DEPOSIT_FAILED_WITHDRAWAL' | 'WITHDRAWAL';

    export function Type_fromString(str: string): Type | undefined {
      switch (str) {
        case "DEPOSIT_NORMAL":
        case "DEPOSIT_REWARD":
        case "DEPOSIT_EVENT":
        case "DEPOSIT_FAILED_WITHDRAWAL":
        case "WITHDRAWAL":
        return str
        default: return undefined
      }
    }
  }
}
