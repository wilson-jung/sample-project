export interface UserGetWebRedirectUrlParams {
    deeplink: string;
}
export declare namespace UserGetWebRedirectUrlParams {
    function fromObject(obj: any): UserGetWebRedirectUrlParams;
}
export interface UserGetWebRedirectUrlResult {
    redirectUrl: string;
    closeAlert?: UserGetWebRedirectUrlResult.CloseAlert;
    /**
     *  앱에서 해당 쿠키들을 넣어줘야 한다.
     */
    cookies: UserGetWebRedirectUrlResult.Cookie[];
}
export declare namespace UserGetWebRedirectUrlResult {
    function fromObject(obj: any): UserGetWebRedirectUrlResult;
    interface CloseAlert {
        content: string;
        confirmButton: string;
        cancelButton: string;
    }
    namespace CloseAlert {
        function fromObject(obj: any): CloseAlert;
    }
    interface Cookie {
        domain: string;
        name: string;
        value: string;
    }
    namespace Cookie {
        function fromObject(obj: any): Cookie;
    }
}
