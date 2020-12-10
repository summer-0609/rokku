/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { isDef } from '..';
import { isNumeric } from '../validate/number';

export function addUnit(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }

  // eslint-disable-next-line no-param-reassign
  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}

export function getSizeStyle(originSize?: string | number) {
  if (isDef(originSize)) {
    const size = addUnit(originSize);
    return {
      width: size,
      height: size,
    };
  }
  return {};
}
