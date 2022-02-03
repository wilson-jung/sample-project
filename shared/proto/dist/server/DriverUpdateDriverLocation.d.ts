import { Location } from '../common';
import { DoubleValue, Int32Value, Int64Value, BoolValue } from '../wrappers';
export interface DriverUpdateDriverLocationParams {
    /**
     *  GPS에서 가져온 정보들의 리스트
     *  시간 순서대로  보내주세요. (뒤에 있을수록 나중에 측정된 것)
     */
    entries: DriverUpdateDriverLocationParams.Entry[];
    /**
     *  현재 이 요청을 보내는 클라이언트의 로컬 타임을 Millis로 올리기
     *  안드로이드: System.currentTimeMillis()를 조회해서 넣어주세요.
     *  참고: 안드로이드 API Level: 1
     */
    sendTimeMs: string;
}
export declare namespace DriverUpdateDriverLocationParams {
    function fromObject(obj: any): DriverUpdateDriverLocationParams;
    interface Entry {
        location?: Location;
        /**
         *  네비SDK 등으로 교정된 위치 값
         *  클라: 없으면 안올려주면 된다.
         */
        correctedLocation?: Location;
        /**
         *  Location의 정확도를 Meter로 나타낸 값
         *  안드로이드: Location::hasAccuracy가 true인 경우에, Location::accuracy를 조회해서 넣어주세요.
         *  참고: 안드로이드 API Level: 1
         */
        locationAccuracy?: DoubleValue;
        /**
         *  방향을 Degrees로 나타낸 값
         *  안드로이드: Location::hasBearing true인 경우에, Location::bearing을 조회해서 넣어주세요.
         *  참고: 안드로이드 API Level: 1
         */
        bearing?: DoubleValue;
        /**
         *  네비SDK 등으로 교정된 방향 값
         *  클라: 없으면 안올려주면 된다.
         */
        correctedBearing?: DoubleValue;
        /**
         *  방향의 정확성을 Degrees로 나타낸 값
         *  안드로이드: Location::hasBearingAccuracy true인 경우에, Location::bearingAccuracy을 조회해서 넣어주세요.
         *  참고: 안드로이드 API Level: 26
         */
        bearingAccuracy?: DoubleValue;
        /**
         *  속도를 m/s로 난타낸 값
         *  안드로이드: Location::hasSpeed true인 경우에, Location::speed 조회해서 넣어주세요.
         *  참고: 안드로이드 API Level: 1
         */
        speed?: DoubleValue;
        /**
         *  속도의 정확성을 m/s로 나태난 값
         *  안드로이드: Location::hasSpeedAccuracy true인 경우에, Location::speedAccuracy 조회해서 넣어주세요.
         *  참고: 안드로이드 API Level: 26
         */
        speedAccuracy?: DoubleValue;
        /**
         *  높이를 Meter로 나타낸 값
         *  안드로이드: Location::hasAltitude true인 경우에, Location::getAltitude 조회해서 넣어주세요.
         *  참고: 안드로이드 API Level: 1
         */
        altitude?: DoubleValue;
        /**
         *  높이의 정확성을 Meters로 나태난 값
         *  안드로이드: Location::hasVerticalAccuracy true인 경우에, Location::getVerticalAccuracyMeters 조회해서 넣어주세요.
         *  참고: 안드로이드 API Level: 26
         */
        altitudeAccuracy?: DoubleValue;
        /**
         *  현재 위치 정보를 받아올때의 참조한 GPS위성의 갯수
         *  안드로이드: GnssStatus::getSatelliteCount의 값을 조회해서 넣어주세요.
         *  참고: 안드로이드 API Level: 24, 클라이언트의 안드로이드 버전이 더 낮은 경우에는 GpsStatus를 조회하여 넣어줘야한다.
         */
        satelliteCount?: Int32Value;
        /**
         *  현재 위치 정보를 받아올때의 참조한 GPS위성의 실제 갯수
         *  안드로이드: GnssStatus::usedInFix의 값이 true인 것 갯수를 알아내서 넣어주세요.
         *  참고: 안드로이드 API Level: 24, 클라이언트의 안드로이드 버전이 더 낮은 경우에는 GpsStatus를 조회하여 넣어줘야한다.
         *  참고: https://stackoverflow.com/questions/25666989/android-gps-several-satellites-in-view-but-none-used-in-fix
         */
        satelliteUsedInFixCount?: Int32Value;
        /**
         *  GnssStatus.Callback을 받은 시점의 클라이언트 시각
         *  안드로이드: GnssStatus.Callback을 받은 클라이언트 시각
         *  참고: 안드로이드 API Level: 24, 클라이언트의 안드로이드 버전이 더 낮은 경우에는 GpsStatus를 조회하여 넣어줘야한다.
         */
        satelliteCountMs?: Int64Value;
        /**
         *  FakeGPS 등을 이용해 나온 값인지 여부. 가능한 값이 true일떄만 넣어주시고 없을떄는 그냥 null로 보내주세요.
         *  안드로이드: Location::isFromMockProvider의 값을 조회해서 넣어주세요.
         *  참고: 안드로이드 API Level: 18
         */
        isMockProvider?: BoolValue;
        /**
         *  클라이언트가 부팅 후 얼마큼의 시간이 지난닜지 Monotonic한 시간 값
         *  안드로이드: Location::elapsedRealtimeNanos값을 넣어주세요.
         *  참고: 안드로이드 API Level: 17
         */
        elapsedRealtimeNanos: string;
        /**
         *  현재 클라이언트의 로컬 타임을 Millis로 올리기
         *  안드로이드: Location::getTime을 조회해서 넣어주세요.
         *  참고: 안드로이드 API Level: 1
         */
        timeMs: string;
        /**
         *  해당 Location객체를 받은 시점의 클라이언트 시각을 Millis로 올리기
         *  안드로이드: System::currentTimeMillis값을 넣어주세요.
         *  참고: 안드로이드 API Level: 1
         */
        systemTimeMs: string;
    }
    namespace Entry {
        function fromObject(obj: any): Entry;
    }
}
export interface DriverUpdateDriverLocationResult {
    /**
     *  클라이언트가 아래의 주기로 chunk를 올려주도록 한다.
     */
    nextAfterMs: string;
    /**
     *  클라이언트에 GPS 데이터가 쌓여 있는 경우 한꺼번에 올릴 수 있는 데이터 갯수.
     */
    maxChunkSize: number;
    /**
     *  클라이언트에서 몇개의 데이터를 유지하고 있을지 개수.
     */
    maxBufferSize: number;
}
export declare namespace DriverUpdateDriverLocationResult {
    function fromObject(obj: any): DriverUpdateDriverLocationResult;
}
