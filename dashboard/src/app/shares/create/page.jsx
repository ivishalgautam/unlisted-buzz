"use client";

import SectorForm from "@/components/forms/sector";
import ShareForm from "@/components/forms/share";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { createSector } from "@/server/sector";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ProcedureCreatePage() {
  const router = useRouter();

  const createMutation = useMutation({
    mutationFn: createSector,
    onSuccess: () => router.replace("/sectors"),
    onError: (error) => toast.error(error?.message || "Error creating."),
  });

  return (
    <PageContainer className={"bg-transparent shadow-none"}>
      <Heading title={"Create Share"} description={"Create Share."} />
      <ShareForm createMutation={createMutation} />
    </PageContainer>
  );
}
