import ContentLayout from "../Layouts/ContentLayout";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <ContentLayout
      title="Contact me"
      body={
        "If you’re interested in collaborating, discussing art, or just want to connect, feel free to reach out! Whether it’s about a project, an event, or simply sharing thoughts on painting, I would love to hear from you. Feel free to send me an email at : amandamcstudio@gmail.com"
      }
      // children={<ContactForm />}
    />
  );
}

export default Contact;
