import { useGrowBar } from "../../animation/utils";

function About() {
  const { bar } = useGrowBar();

  return (
    <div className="space-y-4 opacity-0 text-primary font-custom text-sm md:text-lg flex-col flex xl:flex-row space-x-10">
      <div className="hidden xl:block opacity-0 h-full">
        <div ref={bar}></div>
      </div>
      <div className="opacity-0 flex flex-col space-y-4 min-w-2xl max-w-2xl">
        <div className="opacity-0">Hi there,</div>
        <div className="opacity-0">
          I'm Amanda McEvoy, a self-taught Franco-American artist born and
          raised in Colmar, a picturesque town nestled in the heart of Alsace.
        </div>
        <div className="opacity-0">
          I use painting to express myself not only freely, but also, and above
          all, spontaneously. In search of a natural harmony, I draw my
          inspiration from my memories of striking landscapes, from the high
          peaks of the Swiss mountains where I studied, to the colors of
          Colorado, where my father is from. Nothing is premeditated; everything
          comes to life according to my whims. My abstract paintings represent
          landscapes regardless its perspective, seeking to capture a feeling
          rather than a single truth. My portraits, on the other hand, are
          contrasting, at once stoic and moving, between calm and chaos. I play
          with colors, brushes and spray cans, having fun on canvas, never
          hesitating to break with convention.
        </div>
        <div className="opacity-0 flex items-center space-x-10">
          <div className="opacity-0 flex flex-col space-y-4">
            <div>Peace,</div>
            <div>Amanda</div>
          </div>
          <div className="opacity-0">
            <img src="sign.png" className="invert w-28" />
          </div>
        </div>
      </div>
      <img
        src="amanda.png"
        className="md:h-[50vh] transform transition-all cursor-pointer hover:brightness-90 duration-300 rounded-tl-3xl rounded-br-3xl border-solid border[10px] hover:invert border-primary/10"
      />
    </div>
  );
}

export default About;
