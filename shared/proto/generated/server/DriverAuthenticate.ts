/* eslint-disable */

export interface DriverAuthenticateParams {
  id: string;
  password: string;
  /**
   *  로그인 실수 방지용. 하위 호환을 위해 아예 없으면 검증하지 않고 로그인 시켜준다.
   */
  phoneNumber: string;
}

export namespace DriverAuthenticateParams {
  export function fromObject(obj: any): DriverAuthenticateParams {
    return {
      ...obj,
    }
  }
}

/**
 *  발급된 AccessToken은 응답의 X-GRYPHON-SET-ACCESS-TOKEN 헤더에 넣어줍니다.
 *  클라이언트는 이 헤더를 조회하여 클라이언트 앱에 저장하여 사용해야합니다.
 *  일단 로그인이 되면 다른 앱에서는 자동으로 로그인이 풀립니다.
 */
export interface DriverAuthenticateResult {
}

export namespace DriverAuthenticateResult {
  export function fromObject(obj: any): DriverAuthenticateResult {
    return {
      ...obj,
    }
  }
}
