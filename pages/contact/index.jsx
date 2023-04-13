import ContactForm from "@/components/contact/ContactForm";
import Head from "next/head";
import { Fragment } from "react";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>contact Bijan</title>
        <meta name="description" content="send me messages" />
      </Head>
      <ContactForm />;
    </Fragment>
  );
}

export default ContactPage;
