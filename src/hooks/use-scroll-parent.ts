import { useState, useEffect } from 'react';

type ScrollElement = HTMLElement | Window;

const overflowScrollReg = /scroll|auto/i;

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}

function getScrollParent(el: Element, root: ScrollElement = window) {
  let node = el;

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode as Element;
  }

  return root;
}

function useScrollParent(el: Element | undefined): Element | Window {
  const [scrollParent, setScrollParent] = useState<Element | Window>();

  useEffect(() => {
    if (el) {
      // el.addEventListener(
      //   'touchmove',
      //   (e) => {
      //     e.preventDefault();
      //   },
      //   { passive: false },
      // );
      setScrollParent(getScrollParent(el));
    }
  }, [el]);

  return scrollParent;
}

export default useScrollParent;
