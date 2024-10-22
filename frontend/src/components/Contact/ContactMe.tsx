import { useGrowBar } from "../../animation/utils";

function ContactMe() {
  const { bar } = useGrowBar();

  return (
    <div className="flex space-x-10">
      <div className="h-full">
        <div ref={bar}></div>
      </div>
      <div className="opacity-0 flex flex-col space-y-4">
        <div className="opacity-0">
          If you’re interested in collaborating, discussing art, or just want to
          connect, feel free to reach out! Whether it’s about a project, an
          event, or simply sharing thoughts on painting, I would love to hear
          from you.
        </div>
        <div className="opacity-0">
          Feel free to send me an email at :
          <span className="font-bold"> amandamcstudio@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
