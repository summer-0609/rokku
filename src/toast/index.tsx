/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from 'react';
import usePopupState from '../hooks/use-popup-state';

import { inBrowser, isObject } from '../utils';
import { mountComponent } from '../utils/mount-component';

import RokkuToast from './Toast';

let queue = [];
const allowMultiple = false;

const createInstance = () => {
  const { instance, unmount } = mountComponent(function Toast() {
    const [state, { setState, open, close }] = usePopupState();

    Toast.prototype.open = open;
    Toast.prototype.clear = close;
    Toast.prototype.setMessage = (message: string) => setState({ message });

    useEffect(() => {
      return unmount;
    }, []);

    return <RokkuToast {...state} onClose={close} />;
  });
  return instance;
};

const getInstance = () => {
  /* istanbul ignore if */
  if (!inBrowser) {
    return {};
  }

  if (!queue.length || allowMultiple) {
    const instance = createInstance();
    queue.push(instance);
  }

  return queue[queue.length - 1];
};

function parseOptions(message) {
  if (isObject(message)) {
    return message;
  }
  return { message };
}

const Toast = (options = {}) => {
  const toast = getInstance();

  options = parseOptions(options);
  options = {
    icon: '',
    message: '',
    className: '',
    type: 'text',
    position: 'middle',
    forbidClick: false,
    duration: 2000,
    ...options,
  };
  toast.open(options);

  return toast;
};

const createMethod = (type) => (options) =>
  Toast({
    type,
    ...parseOptions(options),
  });

['loading', 'success', 'fail'].forEach((method) => {
  Toast[method] = createMethod(method);
});

Toast.clear = (all) => {
  if (queue.length) {
    if (all) {
      queue.forEach((toast) => {
        toast.clear();
      });
      queue = [];
    } else {
      queue.shift().clear();
    }
  }
};

export default Toast;
