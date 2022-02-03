export interface DriverListDriverLicenseIssueAreasParams {
}
export declare namespace DriverListDriverLicenseIssueAreasParams {
    function fromObject(obj: any): DriverListDriverLicenseIssueAreasParams;
}
export interface DriverListDriverLicenseIssueAreasResult {
    issueAreas: DriverListDriverLicenseIssueAreasResult.IssueArea[];
}
export declare namespace DriverListDriverLicenseIssueAreasResult {
    function fromObject(obj: any): DriverListDriverLicenseIssueAreasResult;
    interface IssueArea {
        name: string;
        code: string;
    }
    namespace IssueArea {
        function fromObject(obj: any): IssueArea;
    }
}
