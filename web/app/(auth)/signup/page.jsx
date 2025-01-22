import SignupForm from "@/components/forms/signup/sign-up";
import PageSection from "@/components/page-section";
import React from "react";

export default function SignupPage() {
  return (
    <PageSection className={"flex items-center justify-center h-screen"}>
      <SignupForm />
    </PageSection>
  );
}
