"use client";

import SectorForm from "@/components/forms/sector";
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
    <PageContainer>
      <Heading title={"Create Sector"} description={"Create Sector."} />
      <SectorForm createMutation={createMutation} />
    </PageContainer>
  );
}
