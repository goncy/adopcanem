import debounce from "just-debounce-it";
import {RefObject, useEffect, useState} from "react";

export default function useResizeObserver(ref: RefObject<HTMLDivElement>) {
  const [width, setWidth] = useState<number>(0);
  const observerCallback = debounce((entries: ResizeObserverEntry[]) => {
    const entry = entries[0];

    if (entry.contentBoxSize) {
      const contentBoxSize = Array.isArray(entry.contentBoxSize)
        ? entry.contentBoxSize[0]
        : entry.contentBoxSize;

      setWidth(contentBoxSize.inlineSize);
    } else {
      //
    }
  }, 200);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      observerCallback(entries);
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [observerCallback, ref]);

  return width;
}
