import { useAnimate, stagger } from "framer-motion";
import { useEffect, useState } from "react";

const staggerMenuItems = stagger(0.2, { startDelay: 0.2 });

export function useMenuAnimation(isRendered: boolean, element: string) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(element, isRendered ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }, {
      duration: 0.1,
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
