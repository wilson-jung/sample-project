/* eslint-disable */


export interface DriverListDriverLicenseIssueAreasParams {
}

export namespace DriverListDriverLicenseIssueAreasParams {
  export function fromObject(obj: any): DriverListDriverLicenseIssueAreasParams {
    return {
      ...obj,
    }
  }
}

export interface DriverListDriverLicenseIssueAreasResult {
  issueAreas: DriverListDriverLicenseIssueAreasResult.IssueArea[];
}

export namespace DriverListDriverLicenseIssueAreasResult {
  export function fromObject(obj: any): DriverListDriverLicenseIssueAreasResult {
    return {
      ...obj,
      issueAreas: obj.issueAreas.map((v: any) => DriverListDriverLicenseIssueAreasResult.IssueArea.fromObject(v)),
    }
  }

  export interface IssueArea {
    name: string;
    code: string;
  }

  export namespace IssueArea {
    export function fromObject(obj: any): IssueArea {
      return {
        ...obj,
      }
    }
  }
}
