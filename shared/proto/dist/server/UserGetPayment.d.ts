import { PaymentDTO } from '../common';
import { StringValue } from '../wrappers';
export interface UserGetPaymentParams {
    paymentId: string;
}
export declare namespace UserGetPaymentParams {
    function fromObject(obj: any): UserGetPaymentParams;
}
export interface UserGetPaymentResult {
    payment?: PaymentDTO;
    /**
     *  PaymentDTO의 Status가 FAILED일 때 PG Error message를 받은 경우에 내려간다.
     *  pg Error를 받을 수 없거나, 알 수 없는 경우 "알수없음"이 내려가고, 클라에서는 이를 그대로 보여주면 된다.
     */
    pgErrorMessage?: StringValue;
}
export declare namespace UserGetPaymentResult {
    function fromObject(obj: any): UserGetPaymentResult;
}
