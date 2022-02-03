export interface UserGetBizBenefitInfosParams {
}
export declare namespace UserGetBizBenefitInfosParams {
    function fromObject(obj: any): UserGetBizBenefitInfosParams;
}
export interface UserGetBizBenefitInfosResult {
    infos: UserGetBizBenefitInfosResult.BizBenefitInfo[];
}
export declare namespace UserGetBizBenefitInfosResult {
    function fromObject(obj: any): UserGetBizBenefitInfosResult;
    interface BizBenefitInfo {
        companyName: string;
        email: string;
    }
    namespace BizBenefitInfo {
        function fromObject(obj: any): BizBenefitInfo;
    }
}
