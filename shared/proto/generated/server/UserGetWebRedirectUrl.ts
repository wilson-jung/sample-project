/* eslint-disable */


export interface UserGetWebRedirectUrlParams {
  deeplink: string;
}

export namespace UserGetWebRedirectUrlParams {
  export function fromObject(obj: any): UserGetWebRedirectUrlParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetWebRedirectUrlResult {
  redirectUrl: string;
  closeAlert?: UserGetWebRedirectUrlResult.CloseAlert;
  /**
   *  앱에서 해당 쿠키들을 넣어줘야 한다.
   */
  cookies: UserGetWebRedirectUrlResult.Cookie[];
}

export namespace UserGetWebRedirectUrlResult {
  export function fromObject(obj: any): UserGetWebRedirectUrlResult {
    return {
      ...obj,
      closeAlert: obj.closeAlert != null ? UserGetWebRedirectUrlResult.CloseAlert.fromObject(obj.closeAlert) : undefined,
      cookies: obj.cookies.map((v: any) => UserGetWebRedirectUrlResult.Cookie.fromObject(v)),
    }
  }

  export interface CloseAlert {
    content: string;
    confirmButton: string;
    cancelButton: string;
  }

  export namespace CloseAlert {
    export function fromObject(obj: any): CloseAlert {
      return {
        ...obj,
      }
    }
  }

  export interface Cookie {
    domain: string;
    name: string;
    value: string;
  }

  export namespace Cookie {
    export function fromObject(obj: any): Cookie {
      return {
        ...obj,
      }
    }
  }
}
