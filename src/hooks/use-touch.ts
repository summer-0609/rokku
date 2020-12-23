/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, useCallback } from 'react';

const MIN_DISTANCE = 10;

type Direction = '' | 'vertical' | 'horizontal';

function getDirection(x: number, y: number) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}

const useTouch = () => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [direction, setDirection] = useState<Direction>('');

  const isVertical = useCallback(() => direction === 'vertical', [direction]);
  const isHorizontal = useCallback(() => direction === 'horizontal', [direction]);

  const reset = () => {
    setDeltaX(0);
    setDeltaY(0);
    setOffsetX(0);
    setOffsetY(0);
    setDirection('');
  };

  const start = ((event: TouchEvent) => {
    reset();
    setStartX(event.touches[0].clientX);
    setStartY(event.touches[0].clientY);
  }) as EventListener;

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0];
    setDeltaX(touch.clientX - startX);
    setDeltaY(touch.clientY - startY);
    setOffsetX(Math.abs(deltaX));
    setOffsetY(Math.abs(deltaY));

    if (!direction) {
      setDirection(getDirection(offsetX, offsetY));
    }
  }) as EventListener;

  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
  };
};

export default useTouch;
