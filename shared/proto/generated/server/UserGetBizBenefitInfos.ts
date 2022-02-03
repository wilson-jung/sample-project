/* eslint-disable */


export interface UserGetBizBenefitInfosParams {
}

export namespace UserGetBizBenefitInfosParams {
  export function fromObject(obj: any): UserGetBizBenefitInfosParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetBizBenefitInfosResult {
  infos: UserGetBizBenefitInfosResult.BizBenefitInfo[];
}

export namespace UserGetBizBenefitInfosResult {
  export function fromObject(obj: any): UserGetBizBenefitInfosResult {
    return {
      ...obj,
      infos: obj.infos.map((v: any) => UserGetBizBenefitInfosResult.BizBenefitInfo.fromObject(v)),
    }
  }

  export interface BizBenefitInfo {
    companyName: string;
    email: string;
  }

  export namespace BizBenefitInfo {
    export function fromObject(obj: any): BizBenefitInfo {
      return {
        ...obj,
      }
    }
  }
}
