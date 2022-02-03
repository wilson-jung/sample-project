import { StringValue } from '../wrappers';
export interface UserListBizCompaniesByEmailParams {
    email: string;
}
export declare namespace UserListBizCompaniesByEmailParams {
    function fromObject(obj: any): UserListBizCompaniesByEmailParams;
}
export interface UserListBizCompaniesByEmailResult {
    bizCompanies: UserListBizCompaniesByEmailResult.BizCompany[];
}
export declare namespace UserListBizCompaniesByEmailResult {
    function fromObject(obj: any): UserListBizCompaniesByEmailResult;
    interface BizCompany {
        id: string;
        name: string;
        /**
         *  없으면 입력 받아야 함
         */
        employeeName?: StringValue;
    }
    namespace BizCompany {
        function fromObject(obj: any): BizCompany;
    }
}
