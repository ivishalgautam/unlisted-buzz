"use client";

import ShareForm from "@/components/forms/share";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { createShare } from "@/server/share";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ProcedureCreatePage() {
  const router = useRouter();

  const createMutation = useMutation({
    mutationFn: createShare,
    onSuccess: () => router.replace("/shares"),
    onError: (error) =>
      toast.error(
        error?.response?.data?.message ?? error?.message ?? "Error creating.",
      ),
  });

  return (
    <PageContainer className={"bg-transparent shadow-none"}>
      <Heading title={"Create Share"} description={"Create Share."} />
      <ShareForm createMutation={createMutation} />
    </PageContainer>
  );
}
