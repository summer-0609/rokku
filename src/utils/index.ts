export { addUnit } from './format/unit';

export { createNamespace } from './create';

export function isDef(val: unknown): boolean {
  return val !== undefined && val !== null;
}
