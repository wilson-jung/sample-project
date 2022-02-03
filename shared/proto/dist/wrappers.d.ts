/**
 *  Wrapper message for `double`.
 *
 *  The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
    /**
     *  The double value.
     */
    value: number;
}
export declare namespace DoubleValue {
    function fromObject(obj: any): DoubleValue;
}
/**
 *  Wrapper message for `float`.
 *
 *  The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
    /**
     *  The float value.
     */
    value: number;
}
export declare namespace FloatValue {
    function fromObject(obj: any): FloatValue;
}
/**
 *  Wrapper message for `int64`.
 *
 *  The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
    /**
     *  The int64 value.
     */
    value: string;
}
export declare namespace Int64Value {
    function fromObject(obj: any): Int64Value;
}
/**
 *  Wrapper message for `uint64`.
 *
 *  The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
    /**
     *  The uint64 value.
     */
    value: string;
}
export declare namespace UInt64Value {
    function fromObject(obj: any): UInt64Value;
}
/**
 *  Wrapper message for `int32`.
 *
 *  The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
    /**
     *  The int32 value.
     */
    value: number;
}
export declare namespace Int32Value {
    function fromObject(obj: any): Int32Value;
}
/**
 *  Wrapper message for `uint32`.
 *
 *  The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
    /**
     *  The uint32 value.
     */
    value: number;
}
export declare namespace UInt32Value {
    function fromObject(obj: any): UInt32Value;
}
/**
 *  Wrapper message for `bool`.
 *
 *  The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
    /**
     *  The bool value.
     */
    value: boolean;
}
export declare namespace BoolValue {
    function fromObject(obj: any): BoolValue;
}
/**
 *  Wrapper message for `string`.
 *
 *  The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
    /**
     *  The string value.
     */
    value: string;
}
export declare namespace StringValue {
    function fromObject(obj: any): StringValue;
}
/**
 *  Wrapper message for `bytes`.
 *
 *  The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
    /**
     *  The bytes value.
     */
    value: Uint8Array;
}
export declare namespace BytesValue {
    function fromObject(obj: any): BytesValue;
}
