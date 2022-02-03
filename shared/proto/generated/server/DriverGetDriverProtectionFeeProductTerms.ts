/* eslint-disable */


export interface DriverGetDriverProtectionFeeProductTermsParams {
}

export namespace DriverGetDriverProtectionFeeProductTermsParams {
  export function fromObject(obj: any): DriverGetDriverProtectionFeeProductTermsParams {
    return {
      ...obj,
    }
  }
}

export interface DriverGetDriverProtectionFeeProductTermsResult {
  title: string;
  sections: DriverGetDriverProtectionFeeProductTermsResult.Section[];
}

export namespace DriverGetDriverProtectionFeeProductTermsResult {
  export function fromObject(obj: any): DriverGetDriverProtectionFeeProductTermsResult {
    return {
      ...obj,
      sections: obj.sections.map((v: any) => DriverGetDriverProtectionFeeProductTermsResult.Section.fromObject(v)),
    }
  }

  export interface Section {
    title: string;
    description: string;
  }

  export namespace Section {
    export function fromObject(obj: any): Section {
      return {
        ...obj,
      }
    }
  }
}
