import { ContactForm } from "@/components/forms/contact-us";
import Heading from "@/components/heading";
import PageSection from "@/components/page-section";
import Image from "next/image";
import React from "react";

export default function ContactUsPage() {
  return (
    <PageSection className={"space-y-4"}>
      <Heading
        title="Contact Us"
        para="Got questions about unlisted shares? Reach out to us anytime for quick assistance with buying, selling, or inquiries. We're here to help!"
      />
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-center justify-center p-8">
          <figure>
            <Image
              src={"/contact-us.svg"}
              width={1000}
              height={1000}
              alt="contact us"
            />
          </figure>
        </div>
        <div className="bg-white p-8 rounded-lg border">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
}
