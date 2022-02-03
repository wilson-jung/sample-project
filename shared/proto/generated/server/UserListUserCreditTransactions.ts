/* eslint-disable */
import { StringValue, Int32Value } from '../wrappers';
import { Timestamp } from '../timestamp';


export interface UserListUserCreditTransactionsParams {
  nextToken?: StringValue;
  limit?: Int32Value;
}

export namespace UserListUserCreditTransactionsParams {
  export function fromObject(obj: any): UserListUserCreditTransactionsParams {
    return {
      ...obj,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
      limit: obj.limit != null ? Int32Value.fromObject(obj.limit) : undefined,
    }
  }
}

export interface UserListUserCreditTransactionsResult {
  userCreditTransactions: UserListUserCreditTransactionsResult.CreditTransactionDTO[];
  nextToken?: StringValue;
}

export namespace UserListUserCreditTransactionsResult {
  export function fromObject(obj: any): UserListUserCreditTransactionsResult {
    return {
      ...obj,
      userCreditTransactions: obj.userCreditTransactions.map((v: any) => UserListUserCreditTransactionsResult.CreditTransactionDTO.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
    }
  }

  export interface CreditTransactionDTO {
    description: string;
    createdAt?: Timestamp;
    /**
     *  만료일의 경우 크레딧이 적립될 때만 내려갑니다.
     */
    expiresAt?: Timestamp;
    creditAmount: number;
  }

  export namespace CreditTransactionDTO {
    export function fromObject(obj: any): CreditTransactionDTO {
      return {
        ...obj,
        createdAt: obj.createdAt != null ? Timestamp.fromObject(obj.createdAt) : undefined,
        expiresAt: obj.expiresAt != null ? Timestamp.fromObject(obj.expiresAt) : undefined,
      }
    }
  }
}
