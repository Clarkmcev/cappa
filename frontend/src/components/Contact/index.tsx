import ContentLayout from "../Layouts/ContentLayout";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <ContentLayout
      title="Contact me"
      body={
        "If you’re interested in collaborating, discussing art, or just want to connect, feel free to reach out! Whether it’s about a project, an event, or simply sharing thoughts on painting, I would love to hear from you. Fill out the form below, and I will get back to you as soon as possible."
      }
      children={<ContactForm />}
    />
  );
}

export default Contact;
