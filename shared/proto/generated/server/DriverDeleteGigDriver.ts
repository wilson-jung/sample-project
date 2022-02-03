/* eslint-disable */


export interface DriverDeleteGigDriverParams {
  type?: DriverDeleteGigDriverParams.DeletionReasonType;
  /**
   *  CUSTOM이 없는 경우 빈 문자열로 올려줍니다.
   */
  reason: string;
  /**
   *  본인인증
   */
  identityCertificationToken: string;
}

export namespace DriverDeleteGigDriverParams {
  export function fromObject(obj: any): DriverDeleteGigDriverParams {
    return {
      ...obj,
      type: DriverDeleteGigDriverParams.DeletionReasonType_fromString(obj.type),
    }
  }

  /**
   * QUIT : 
     *  대리운전업을 그만둠
   * OTHER_SERVICE : 
     *  다른 대리서비스 이용
   * FEW_CALLS : 
     *  콜 요청이 많지 않음
   * OPS_DISSATISFACTION : 
     *  운영방식 불만
   * CUSTOM : 
     *  기타 (직접 입력)
   */
  export type DeletionReasonType = 'QUIT' | 'OTHER_SERVICE' | 'FEW_CALLS' | 'OPS_DISSATISFACTION' | 'CUSTOM';

  export function DeletionReasonType_fromString(str: string): DeletionReasonType | undefined {
    switch (str) {
      case "QUIT":
      case "OTHER_SERVICE":
      case "FEW_CALLS":
      case "OPS_DISSATISFACTION":
      case "CUSTOM":
      return str
      default: return undefined
    }
  }
}

export interface DriverDeleteGigDriverResult {
}

export namespace DriverDeleteGigDriverResult {
  export function fromObject(obj: any): DriverDeleteGigDriverResult {
    return {
      ...obj,
    }
  }
}
