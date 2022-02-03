import { StringValue } from '../wrappers';
import { PaymentDTO } from '../common';
export interface UserResolveFailedPaymentParams {
    paymentId: string;
    /**
     *  결제 수단 ID
     *  결제 프로필이 있을 때 같이 올리면, 현재 결제 프로필에 붙은 결제 수단과 다른 경우 오류가 발생한다.
     */
    paymentMethodId: string;
    /**
     *  결제 프로필 ID
     */
    paymentProfileId?: StringValue;
}
export declare namespace UserResolveFailedPaymentParams {
    function fromObject(obj: any): UserResolveFailedPaymentParams;
}
export interface UserResolveFailedPaymentResult {
    payment?: PaymentDTO;
}
export declare namespace UserResolveFailedPaymentResult {
    function fromObject(obj: any): UserResolveFailedPaymentResult;
}
