import React from "react";
import PageSection from "./page-section";
import EnquiryForm from "./forms/enquiry";
import Image from "next/image";
import Heading from "./heading";
import Balancer from "react-wrap-balancer";
import { Muted } from "./typography";
import { CTA } from "./navbar";
import Container from "./container";

export default function EnquirySection() {
  return (
    <PageSection className={"space-y-4"}>
      <Heading
        title="Enquiry"
        para="Fill the form to enquire (buy or sell) unlisted shares securely and hassle-free with expert guidance!"
      />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="bg-secondary relative overflow-hidden cols-span-12 md:col-span-6 lg:col-span-7 rounded-2xl flex items-center justify-center flex-col">
          <div className="space-y-4 relative z-10">
            <div className="text-center text-xl md:text-4xl font-semibold text-secondary">
              Attention required
            </div>
            <Balancer>
              <Muted className={"text-center text-gray-300"}>
                Explore exclusive deals and insights into unlisted & Pre-IPO
                shares.
              </Muted>
            </Balancer>
          </div>

          <div className="absolute ove z-0 inset-0 w-full h-full before:absolute before:inset-0 before:bg-black/50 before:w-full before:h-full">
            <Image
              src={"/enquiry.png"}
              width={1000}
              height={1000}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>

        <div className="md:col-span-6 cols-span-12 lg:col-span-5 bg-gray-100 p-8 rounded-2xl">
          <EnquiryForm />
        </div>
      </div>
    </PageSection>
  );
}
