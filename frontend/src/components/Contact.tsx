import { useEffect, useState } from "react";
import { useMenuAnimation } from "../animation/utils";

function Contact() {
  const [isRendered, setIsRendered] = useState<boolean>(false);

  const scope = useMenuAnimation(isRendered, "div");

  useEffect(() => {
    setIsRendered(true);
    return () => {
      setIsRendered(false);
    };
  }, []);

  return (
    <section
      ref={scope}
      className="bg-primary/10 h-full w-full p-5 flex space-y-4 flex-col max-w-3xl font-serif"
    >
      <div className="opacity-0 text-primary font-bold pb-4 border-b-primary/20 border border-x-transparent border-t-transparent text-2xl">
        Contact
      </div>
      <div className="opacity-0 text-primary text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        nisi asperiores quidem laudantium! Ad ipsa distinctio, voluptas ab
        voluptates error excepturi doloremque fugiat, inventore delectus rem
        blanditiis laudantium, nam facilis.
      </div>
      <div className="flex-col space-y-4 opacity-0 text-primary text-lg">
        <div className="opacity-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos numquam
          vel cum aliquid, quibusdam quia nostrum similique delectus iste error
          sit ducimus obcaecati corporis et sed accusamus tempora voluptas rem.
        </div>
      </div>
    </section>
  );
}

export default Contact;
