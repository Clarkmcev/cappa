import { useEffect, useState } from "react";
import { useMenuAnimation } from "../../animation/utils";
// import { useScrollToTop } from "../utils";

function Content() {
  const [isRendered, setIsRendered] = useState<boolean>(false);

  const scope = useMenuAnimation(isRendered, "div");

  // hooks
  // useScrollToTop();

  useEffect(() => {
    setIsRendered(true);
    return () => {
      setIsRendered(false);
    };
  }, []);

  return (
    <section
      ref={scope}
      className="p-5 flex space-y-4 flex-col font-sans m-20 xl:m-44 pb-20 pl-64"
    >
      <div className="opacity-0 text-primary pb-4 text-4xl font-custom font-bold">
        About me
      </div>
      <div className="flex-col space-y-4 opacity-0 text-primary text-lg font-custom">
        <div className="opacity-0">Hi there, I am Amanda.</div>
        <div className="opacity-0">
          A French-American artist who grew up in the charming region of Alsace.
          I discovered my love for painting just before high school, thanks to
          my dear childhood friend, and it was an instant connection from the
          very first brushstroke. I am passionate about exploring the endless
          possibilities of art, working with various mediums such as acrylics,
          oils, and spray paints. My enthusiasm and curiosity drive me to
          experiment and master them all, as I continue to express my unique
          creative vision through my work.
        </div>
        <div className="opacity-0 text-primary text-lg">
          Dynamic and creative individual with a passion for bringing people
          together and celebrating the arts. Whether you’re organizing events
          that inspire connection and creativity or collaborating with fellow
          artists, my work is driven by a deep love for expression and
          community. As a painter, I bring a unique perspective to my projects,
          infusing my artistic vision into everything you do. My role in hotel
          sales allows me to seamlessly blend my creative talents with a keen
          business acumen, ensuring that every experience you help curate is
          memorable and meaningful.
        </div>
        <div className="opacity-0">Peace,</div>
        <div className="opacity-0">Amanda</div>
      </div>
    </section>
  );
}

export default Content;
