import { useFading } from "../../animation/utils";
import ContactForm from "./ContactForm";

function Contact() {
  const { scope } = useFading();

  return (
    <section
      ref={scope}
      className="p-5 flex space-y-4 flex-col font-custom m-20 xl:m-44 pb-20 pl-64"
    >
      <div className="opacity-0 text-primary font-bold cont-custom pb-4 text-4xl">
        Contact me
      </div>
      <div className="text-primary">
        <div className="opacity-0 text-primary text-lg">
          If you’re interested in collaborating, discussing art, or just want to
          connect, feel free to reach out! Whether it’s about a project, an
          event, or simply sharing thoughts on painting, I would love to hear
          from you. Fill out the form below, and I will get back to you as soon
          as possible.
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

export default Contact;
