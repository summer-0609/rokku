/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, useEffect } from 'react';

const useLazyRender = (show: boolean) => {
  const [inited, setInited] = useState(false);

  useEffect(() => {
    if (show) {
      setInited(show);
    }
  }, [show]);

  return (render: () => JSX.Element) => () => (inited ? render() : null);
};

export default useLazyRender;
