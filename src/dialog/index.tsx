import React from 'react';
import usePopupState from '../hooks/use-popup-state';

import { inBrowser } from '../utils';
import { mountComponent } from '../utils/mount-component';
import { DialogProps } from './PropsType';

import RokkuDialog from './Dialog';

let instance;

function initInstance() {
  ({ instance } = mountComponent(function Dialog() {
    const [state, { open, toggle, close }] = usePopupState();

    Dialog.prototype.open = open;
    Dialog.prototype.toggle = toggle;

    return <RokkuDialog {...state} onClose={close} />;
  }));
}

const Dialog = (options: Partial<DialogProps>): Promise<void> => {
  /* istanbul ignore if */
  if (!inBrowser) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }

    const defaultOptions = {
      title: '',
      width: '',
      theme: null,
      message: '',
      overlay: true,
      callback: null,
      closeable: false,
      closeIcon: 'cross',
      className: '',
      allowHtml: false,
      lockScroll: true,
      beforeClose: null,
      overlayClass: '',
      overlayStyle: null,
      transition: 'rk-dialog-bounce',
      messageAlign: '',
      cancelButtonText: '',
      cancelButtonColor: null,
      confirmButtonText: '',
      children: '',
      confirmButtonColor: null,
      showConfirmButton: true,
      showCancelButton: false,
      overlayClosable: false,
    };

    instance.open({
      ...defaultOptions,
      ...options,
      callback: (action) => {
        (action === 'confirm' ? resolve : reject)(action);
      },
    });
  });
};

RokkuDialog.alert = Dialog;

RokkuDialog.confirm = (options: Partial<DialogProps>) =>
  Dialog({
    showCancelButton: true,
    ...options,
  });

RokkuDialog.close = () => {
  if (instance) {
    instance.toggle(false);
  }
};

export default RokkuDialog;
