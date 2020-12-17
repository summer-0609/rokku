/* eslint-disable @typescript-eslint/no-explicit-any */
export function noop(): void {}

export const inBrowser = typeof window !== 'undefined';

export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null;
}

export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}
