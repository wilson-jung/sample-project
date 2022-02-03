/* eslint-disable */
import { DriverStatusDTO } from '../common';
import { BoolValue } from '../wrappers';


export interface DriverGetNoticeVersionParams {
  /**
   *  클라이언트가 마지막으로 조회했을때 받은 뱃지 버전을 올려준다.
   *  만약 조회한적이 없으면 0을 넣어서 올려준다.
   */
  latestVersion: string;
  type?: DriverStatusDTO.DriverType;
}

export namespace DriverGetNoticeVersionParams {
  export function fromObject(obj: any): DriverGetNoticeVersionParams {
    return {
      ...obj,
      latestVersion: obj.latestVersion.toString(),
      type: DriverStatusDTO.DriverType_fromString(obj.type),
    }
  }
}

export interface DriverGetNoticeVersionResult {
  /**
   *  이 값은 클라에서 따로 저장하고 있어야 한다.
   *  이 결과를 받은 즉시 업데이트 해야한다.
   */
  version: string;
  /**
   *  이 값에 따라 클라는 뉴뱃지를 보여주거나 없애거나 값을 유지해야한다.
   *  - 이 값이 true면 뉴뱃지를 보여줘야한다.
   *  - 이 값이 false이면 뉴뱃지를 보여주지 말아야한다.
   *  - 이 값이 null이면 클라의 설정을 그대로 유지해야한다.
   */
  badge?: BoolValue;
}

export namespace DriverGetNoticeVersionResult {
  export function fromObject(obj: any): DriverGetNoticeVersionResult {
    return {
      ...obj,
      version: obj.version.toString(),
      badge: obj.badge != null ? BoolValue.fromObject(obj.badge) : undefined,
    }
  }
}
