import { useEffect, useRef } from "react";

export const useLockScroll = (toggle) => {
  let currentPosition = 0;
  if (typeof window !== "undefined") {
    currentPosition = window.scrollY;
  }
  let position = useRef(currentPosition);
  useEffect(() => {
    if (toggle) position.current = window.scrollY;
    document.body.style.top = toggle ? `-${position.current}px` : "";
    document.body.style.height = toggle ? `100vh` : "";
    document.body.style.position = toggle ? "fixed" : "";
    document.body.style.width = toggle ? "100%" : "";
    window.scrollTo({ top: position.current, left: 0, behavior: "instant" });
  }, [toggle]);
};
