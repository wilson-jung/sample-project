export interface DriverGetDriverProtectionFeeProductTermsParams {
}
export declare namespace DriverGetDriverProtectionFeeProductTermsParams {
    function fromObject(obj: any): DriverGetDriverProtectionFeeProductTermsParams;
}
export interface DriverGetDriverProtectionFeeProductTermsResult {
    title: string;
    sections: DriverGetDriverProtectionFeeProductTermsResult.Section[];
}
export declare namespace DriverGetDriverProtectionFeeProductTermsResult {
    function fromObject(obj: any): DriverGetDriverProtectionFeeProductTermsResult;
    interface Section {
        title: string;
        description: string;
    }
    namespace Section {
        function fromObject(obj: any): Section;
    }
}
