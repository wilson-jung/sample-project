/* eslint-disable */
import { StringValue, Int32Value } from '../wrappers';
import { UserCompactRideDTO } from '../ride';
import { Image } from '../common';


export interface UserListUserCompactRidesParams {
  nextToken?: StringValue;
  limit?: Int32Value;
}

export namespace UserListUserCompactRidesParams {
  export function fromObject(obj: any): UserListUserCompactRidesParams {
    return {
      ...obj,
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
      limit: obj.limit != null ? Int32Value.fromObject(obj.limit) : undefined,
    }
  }
}

export interface UserListUserCompactRidesResult {
  rides: UserCompactRideDTO[];
  nextToken?: StringValue;
  /**
   *  유저가 넛지 대상인 경우 + nextToken 이 없을 경우에만(맨 윗부분 데이터를 가져올 경우) 값이 내려갑니다.
   */
  passportMembershipNudge?: UserListUserCompactRidesResult.PassportMembershipNudgeBanner;
}

export namespace UserListUserCompactRidesResult {
  export function fromObject(obj: any): UserListUserCompactRidesResult {
    return {
      ...obj,
      rides: obj.rides.map((v: any) => UserCompactRideDTO.fromObject(v)),
      nextToken: obj.nextToken != null ? StringValue.fromObject(obj.nextToken) : undefined,
      passportMembershipNudge: obj.passportMembershipNudge != null ? UserListUserCompactRidesResult.PassportMembershipNudgeBanner.fromObject(obj.passportMembershipNudge) : undefined,
    }
  }

  export interface PassportMembershipNudgeBanner {
    image?: Image;
    /**
     *  넛지 문구 ex) 탈 때마다 최대 5% 적립!
     */
    description: string;
    /**
     *  추가적으로 다른 글자색을 가진 문구 내려줄 때 사용 ex) 패스포트 멤버십 혜택 보기 >
     */
    highlightDescription?: StringValue;
    url: string;
    logKey: string;
  }

  export namespace PassportMembershipNudgeBanner {
    export function fromObject(obj: any): PassportMembershipNudgeBanner {
      return {
        ...obj,
        image: obj.image != null ? Image.fromObject(obj.image) : undefined,
        highlightDescription: obj.highlightDescription != null ? StringValue.fromObject(obj.highlightDescription) : undefined,
      }
    }
  }
}
