/* eslint-disable */

export interface UserGetCreatingPaymentMethodWithTossAppDeeplinkParams {
  callbackDeeplink: string;
}

export namespace UserGetCreatingPaymentMethodWithTossAppDeeplinkParams {
  export function fromObject(obj: any): UserGetCreatingPaymentMethodWithTossAppDeeplinkParams {
    return {
      ...obj,
    }
  }
}

export interface UserGetCreatingPaymentMethodWithTossAppDeeplinkResult {
  deeplinkAndroid: string;
  deeplinkIos: string;
  url: string;
}

export namespace UserGetCreatingPaymentMethodWithTossAppDeeplinkResult {
  export function fromObject(obj: any): UserGetCreatingPaymentMethodWithTossAppDeeplinkResult {
    return {
      ...obj,
    }
  }
}
