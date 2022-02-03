import { PaymentMethodDTO } from '../common';
export interface UserGetPaymentMethodWithIssueTokenRequestIdParams {
    issueTokenRequestId: string;
}
export declare namespace UserGetPaymentMethodWithIssueTokenRequestIdParams {
    function fromObject(obj: any): UserGetPaymentMethodWithIssueTokenRequestIdParams;
}
export interface UserGetPaymentMethodWithIssueTokenRequestIdResult {
    paymentMethod?: PaymentMethodDTO;
}
export declare namespace UserGetPaymentMethodWithIssueTokenRequestIdResult {
    function fromObject(obj: any): UserGetPaymentMethodWithIssueTokenRequestIdResult;
}
