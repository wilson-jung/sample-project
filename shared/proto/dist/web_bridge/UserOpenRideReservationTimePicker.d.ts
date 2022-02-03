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
export declare namespace UserOpenRideReservationTimePickerParams {
    function fromObject(obj: any): UserOpenRideReservationTimePickerParams;
}
export interface UserOpenRideReservationTimePickerResult {
    /**
     *  선택완료를 눌렀을 때 채워주고, 닫기나 백버튼으로 닫았을때는 비어서 내려준다.
     */
    selectedTime?: Timestamp;
}
export declare namespace UserOpenRideReservationTimePickerResult {
    function fromObject(obj: any): UserOpenRideReservationTimePickerResult;
}
