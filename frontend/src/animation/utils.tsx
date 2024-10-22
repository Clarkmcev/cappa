import { useAnimate, stagger } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const staggerMenuItems = stagger(0.2, { startDelay: 0.2 });

export function useMenuAnimation(isRendered: boolean, element: string) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(element, isRendered ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }, {
      duration: 1,
      delay: isRendered ? staggerMenuItems : 0,
    });
  }, [isRendered, animate, element]);

  return scope;
}

export function useFading() {
  const [isRendered, setIsRendered] = useState<boolean>(false);

  const scope = useMenuAnimation(isRendered, "div");

  useEffect(() => {
    setIsRendered(true);
    return () => {
      setIsRendered(false);
    };
  }, []);

  return { scope };
}

export function useGrowBar() {
  const bar = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const initStyle = () => {
    if (bar.current) {
      const parentElement = bar.current.parentElement;
      if (parentElement) {
        parentElement.style.height = "60vh";
      }

      bar.current.className =
        "w-2 rounded-full transition-all duration-[1s] bg-fourth/40";
      bar.current.style.height = "0";
    }
  };

  const growBar = () => {
    setTimeout(() => {
      if (bar.current) {
        // bar.current.classList.add("bg-green-500");
        bar.current.style.height = "100%";
      }
    }, 2000);
  };

  useEffect(() => {
    initStyle();

    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (visible) {
      growBar();
    }
  }, [visible]);

  return { bar };
}
