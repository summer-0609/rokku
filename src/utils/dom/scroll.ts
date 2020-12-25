/* eslint-disable no-plusplus */
import { raf, cancelRaf } from '../raf';

type ScrollElement = Element | Window;

export function getScrollTop(el: ScrollElement): number {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;

  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0);
}

export function setScrollTop(el: ScrollElement, value: number): void {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}

let rafId: number;

export function scrollLeftTo(scroller: HTMLElement, to: number, duration: number): void {
  cancelRaf(rafId);

  let count = 0;
  const from = scroller.scrollLeft;
  const frames = duration === 0 ? 1 : Math.round(duration / 16);

  function animate() {
    scroller.scrollLeft += (to - from) / frames;
    if (++count < frames) {
      rafId = raf(animate);
    }
  }

  animate();
}

export function scrollTopTo(
  scroller: HTMLElement,
  to: number,
  duration: number,
  callback: () => void,
): void {
  let current = getScrollTop(scroller);

  const isDown = current < to;
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);
  const step = (to - current) / frames;

  function animate() {
    current += step;

    if ((isDown && current > to) || (!isDown && current < to)) {
      current = to;
    }

    setScrollTop(scroller, current);

    if ((isDown && current < to) || (!isDown && current > to)) {
      raf(animate);
    } else if (callback) {
      raf(callback as FrameRequestCallback);
    }
  }

  animate();
}
