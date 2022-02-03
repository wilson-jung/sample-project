import { StringValue, Int32Value } from '../wrappers';
import { Timestamp } from '../timestamp';
export interface UserListUserCreditTransactionsParams {
    nextToken?: StringValue;
    limit?: Int32Value;
}
export declare namespace UserListUserCreditTransactionsParams {
    function fromObject(obj: any): UserListUserCreditTransactionsParams;
}
export interface UserListUserCreditTransactionsResult {
    userCreditTransactions: UserListUserCreditTransactionsResult.CreditTransactionDTO[];
    nextToken?: StringValue;
}
export declare namespace UserListUserCreditTransactionsResult {
    function fromObject(obj: any): UserListUserCreditTransactionsResult;
    interface CreditTransactionDTO {
        description: string;
        createdAt?: Timestamp;
        /**
         *  만료일의 경우 크레딧이 적립될 때만 내려갑니다.
         */
        expiresAt?: Timestamp;
        creditAmount: number;
    }
    namespace CreditTransactionDTO {
        function fromObject(obj: any): CreditTransactionDTO;
    }
}
