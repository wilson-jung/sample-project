import { TermsEntry } from '../common';
import { StringValue } from '../wrappers';
/**
 *  λΉμ΄μμ.
 */
export interface UserGetUpdatedTermsPopupContentParams {
}
export declare namespace UserGetUpdatedTermsPopupContentParams {
    function fromObject(obj: any): UserGetUpdatedTermsPopupContentParams;
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
export declare namespace UserGetUpdatedTermsPopupContentResult {
    function fromObject(obj: any): UserGetUpdatedTermsPopupContentResult;
    type Type = 'HEAVY' | 'LIGHT';
    function Type_fromString(str: string): Type | undefined;
}
