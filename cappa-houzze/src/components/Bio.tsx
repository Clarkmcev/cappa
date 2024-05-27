import React, { useEffect, useState } from "react";
import { useMenuAnimation } from "../animation/utils";

function Bio() {
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
        BIO
      </div>
      <div className="opacity-0 text-primary">
        Love creating events, collaborating with other artists, music,
        etc......... if you into it hit me up
      </div>
      <div className="flex-col space-y-4 opacity-0 text-primary">
        <div className="opacity-0">
          Amanda McEvoy, french/american who grew up in Alsace. Discovered
          painting with my dear childhood friend just before highschool and
          instantly loved it after 1st try. I paint with everything, acrylic,
          oil, spray, ... want to try it all!
        </div>
        <div className="opacity-0">Bisous,</div>
        <div className="opacity-0">Amanda</div>
      </div>
    </section>
  );
}

export default Bio;
