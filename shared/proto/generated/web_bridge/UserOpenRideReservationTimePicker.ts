/* eslint-disable */
import { Timestamp } from '../timestamp';
import { StringValue } from '../wrappers';


export interface UserOpenRideReservationTimePickerParams {
  from: string;
  to: string;
  minInterval: number;
  /**
   *  초기 선택 값. 없으면 from 를 사용함
   */
  initialTime?: Timestamp;
  outOfRangeWarningText?: StringValue;
}

export namespace UserOpenRideReservationTimePickerParams {
  export function fromObject(obj: any): UserOpenRideReservationTimePickerParams {
    return {
      ...obj,
      from: obj.from.toString(),
      to: obj.to.toString(),
      initialTime: obj.initialTime != null ? Timestamp.fromObject(obj.initialTime) : undefined,
      outOfRangeWarningText: obj.outOfRangeWarningText != null ? StringValue.fromObject(obj.outOfRangeWarningText) : undefined,
    }
  }
}

export interface UserOpenRideReservationTimePickerResult {
  /**
   *  선택완료를 눌렀을 때 채워주고, 닫기나 백버튼으로 닫았을때는 비어서 내려준다.
   */
  selectedTime?: Timestamp;
}

export namespace UserOpenRideReservationTimePickerResult {
  export function fromObject(obj: any): UserOpenRideReservationTimePickerResult {
    return {
      ...obj,
      selectedTime: obj.selectedTime != null ? Timestamp.fromObject(obj.selectedTime) : undefined,
    }
  }
}
