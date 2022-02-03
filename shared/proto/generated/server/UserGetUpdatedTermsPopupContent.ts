/* eslint-disable */
import { TermsEntry } from '../common';
import { StringValue } from '../wrappers';


/**
 *  비어있음.
 */
export interface UserGetUpdatedTermsPopupContentParams {
}

export namespace UserGetUpdatedTermsPopupContentParams {
  export function fromObject(obj: any): UserGetUpdatedTermsPopupContentParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetUpdatedTermsPopupContentResult {
  title: string;
  description: string;
  termsEntries: TermsEntry[];
  acceptToken: string;
  imageUrl?: StringValue;
  isSkipAvailable: boolean;
  type?: UserGetUpdatedTermsPopupContentResult.Type;
}

export namespace UserGetUpdatedTermsPopupContentResult {
  export function fromObject(obj: any): UserGetUpdatedTermsPopupContentResult {
    return {
      ...obj,
      termsEntries: obj.termsEntries.map((v: any) => TermsEntry.fromObject(v)),
      imageUrl: obj.imageUrl != null ? StringValue.fromObject(obj.imageUrl) : undefined,
      type: UserGetUpdatedTermsPopupContentResult.Type_fromString(obj.type),
    }
  }

  export type Type = 'HEAVY' | 'LIGHT';

  export function Type_fromString(str: string): Type | undefined {
    switch (str) {
      case "HEAVY":
      case "LIGHT":
      return str
      default: return undefined
    }
  }
}
