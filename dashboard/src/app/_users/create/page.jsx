import UserForm from "@/components/forms/user";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import React from "react";

export default function Page() {
  return (
    <PageContainer>
      <Heading title={`Register`} />
      <UserForm role="user" />
    </PageContainer>
  );
}
