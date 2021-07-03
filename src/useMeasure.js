import { useLayoutEffect, useRef, useState } from "react";

export const useMeasure = (deps) => {
  const [rect, setRect] = useState({});
  const theRef = useRef();

  useLayoutEffect(() => {
    setRect(theRef.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [rect, theRef];
};
