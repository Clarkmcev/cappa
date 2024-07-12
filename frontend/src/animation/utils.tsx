import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

const staggerMenuItems = stagger(0.2, { startDelay: 0.2 });

export function useMenuAnimation(isRendered: boolean, element: string) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(element, isRendered ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }, {
      duration: 0.2,
      delay: isRendered ? staggerMenuItems : 0,
    });
  }, [isRendered, animate, element]);

  return scope;
}
