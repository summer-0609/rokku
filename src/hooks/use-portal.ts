/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useRef, useEffect, ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import canUseDom from '../utils/dom/canUseDom';

const Portal = (props): ReactPortal => {
  let portal = null;
  let container: HTMLElement = null;

  const initRef = useRef<boolean>(false);
  const containerRef = useRef<HTMLElement>();

  const { visible, children, forceRender } = props;

  const getContainer = () => {
    if (!canUseDom()) {
      return null;
    }
    if (!container) {
      container = document.createElement('div');
      document.body.appendChild(container);
    }
    return container;
  };

  // Create container in client side with sync to avoid useEffect not get ref
  useEffect(() => {
    return () => {
      // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use `Portal` directly, we have to keep the logic here.
      containerRef.current?.parentNode?.removeChild(containerRef.current);
    };
  }, []);

  if (forceRender || visible || containerRef.current) {
    if (!initRef.current && canUseDom()) {
      containerRef.current = getContainer();
      initRef.current = true;
    }
    portal = ReactDOM.createPortal(children, containerRef.current);
  }
  return portal;
};

const usePortal = (props) => {
  const { visible, forceRender, destroyOnClose } = props;
  const [animatedVisible, setAnimatedVisible] = React.useState<boolean>(visible);

  useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);

  if (!forceRender && destroyOnClose && !animatedVisible) {
    return [() => React.createElement(React.Fragment)];
  }
  return [Portal];
};

export default usePortal;
