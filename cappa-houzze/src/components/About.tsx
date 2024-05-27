import { useEffect, useState } from "react";
import { useMenuAnimation } from "../animation/utils";

function About() {
  useEffect(() => {}, []);

  const [isRendered, setIsRendered] = useState<boolean>(false);

  const scope = useMenuAnimation(isRendered, "div");

  useEffect(() => {
    setIsRendered(true);
    return () => {
      setIsRendered(false);
    };
  }, []);

  return (
    <section ref={scope} className="p-5 flex space-y-4 flex-col max-w-3xl">
      <div className="opacity-0 text-primary font-bold pb-4 border-b-primary/20 border border-x-transparent border-t-transparent">
        Contact
      </div>
      <div className="opacity-0 text-primary">Contact me hallo hallo</div>
      <div className="opacity-0 text-primary">Hallo hallo</div>
    </section>
  );
}

export default About;
