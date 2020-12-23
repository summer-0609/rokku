/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createElement } from 'react';
import ReactDOM from 'react-dom';

export function mountComponent(RootComponent) {
  const ref = RootComponent.prototype;

  const app = createElement(RootComponent);
  const root = document.createElement('div');

  document.body.appendChild(root);
  ReactDOM.render(app, root);

  return {
    instance: ref,
    unmount() {
      ReactDOM.unmountComponentAtNode(root);
      document.body.removeChild(root);
    },
  };
}
