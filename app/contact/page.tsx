import PageHeader from "@/components/pageHeader";
import ContactUs from "@/components/contactInfo";
export const Contact = () => {
  return (
    <div>
      <PageHeader
        image="/backgd.png"
        title="We're Here to Help"
        description="Whether you have a question, need a service quote, or want to give feedback, our team is ready to assist you. Reach out to us through any of the methods below, and we'll get back to you as soon as possible."
      />
      <ContactUs />
    </div>
  );
};

export default Contact;
