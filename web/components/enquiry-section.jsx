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
        para="Fill the form to buy or sell unlisted shares securely and hassle-free with expert guidance!"
      />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="bg-secondary cols-span-12 md:col-span-6 lg:col-span-8 rounded-2xl p-8 space-y-10 flex items-center justify-center flex-col">
          <div className="space-y-2">
            <div className="text-center text-xl font-semibold">
              Attention required
            </div>
            <Muted className={"text-center text-white"}>
              <Balancer>
                Create your account and begin trading with us to get the best
                experience.
              </Balancer>
            </Muted>
          </div>

          <div className="flex items-center justify-center">
            <CTA />
          </div>

          <div className="">
            <figure>
              <Image src={"/enquiry.svg"} width={300} height={300} alt="" />
            </figure>
          </div>
        </div>

        <div className="md:col-span-6 cols-span-12 lg:col-span-4 bg-gray-100 p-8 rounded-2xl">
          <EnquiryForm />
        </div>
      </div>
    </PageSection>
  );
}
