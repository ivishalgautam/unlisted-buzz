"use client";

import SectorForm from "@/components/forms/sector";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { updateSector } from "@/server/sector";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ProcedureEditPage({ params: { id } }) {
  const router = useRouter();
  const updateMutation = useMutation({
    mutationFn: (data) => updateSector(id, data),
    onSuccess: () => router.replace("/sectors"),
    onError: (error) => toast.error(error?.message || "Error creating."),
  });

  return (
    <PageContainer>
      <Heading title={"Edit Sector"} description={"Edit Sector."} />
      <SectorForm updateMutation={updateMutation} type="edit" id={id} />
    </PageContainer>
  );
}
