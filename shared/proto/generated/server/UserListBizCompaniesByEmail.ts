/* eslint-disable */
import { StringValue } from '../wrappers';


export interface UserListBizCompaniesByEmailParams {
  email: string;
}

export namespace UserListBizCompaniesByEmailParams {
  export function fromObject(obj: any): UserListBizCompaniesByEmailParams {
    return {
      ...obj,
    }
  }
}

export interface UserListBizCompaniesByEmailResult {
  bizCompanies: UserListBizCompaniesByEmailResult.BizCompany[];
}

export namespace UserListBizCompaniesByEmailResult {
  export function fromObject(obj: any): UserListBizCompaniesByEmailResult {
    return {
      ...obj,
      bizCompanies: obj.bizCompanies.map((v: any) => UserListBizCompaniesByEmailResult.BizCompany.fromObject(v)),
    }
  }

  export interface BizCompany {
    id: string;
    name: string;
    /**
     *  없으면 입력 받아야 함
     */
    employeeName?: StringValue;
  }

  export namespace BizCompany {
    export function fromObject(obj: any): BizCompany {
      return {
        ...obj,
        employeeName: obj.employeeName != null ? StringValue.fromObject(obj.employeeName) : undefined,
      }
    }
  }
}
