/* eslint-disable */

export interface UserSendBusinessPaymentProfileActivationEmailParams {
  email: string;
  bizCompanyId: string;
  employeeName: string;
}

export namespace UserSendBusinessPaymentProfileActivationEmailParams {
  export function fromObject(obj: any): UserSendBusinessPaymentProfileActivationEmailParams {
    return {
      ...obj,
    }
  }
}

export interface UserSendBusinessPaymentProfileActivationEmailResult {
  /**
   *  GetPaymentProfileWithActivationStatusToken을 호출하여 생성된 계정을 가져올 수 있다.
   */
  activationStatusToken: string;
}

export namespace UserSendBusinessPaymentProfileActivationEmailResult {
  export function fromObject(obj: any): UserSendBusinessPaymentProfileActivationEmailResult {
    return {
      ...obj,
    }
  }
}
