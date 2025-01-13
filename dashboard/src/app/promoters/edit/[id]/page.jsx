"use client";

import PromoterForm from "@/components/forms/promoter";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { updatePromoter } from "@/server/promoter";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ProcedureEditPage({ params: { id } }) {
  const router = useRouter();
  const updateMutation = useMutation({
    mutationFn: (data) => updatePromoter(id, data),
    onSuccess: () => router.replace("/promoters"),
    onError: (error) => toast.error(error?.message || "Error creating."),
  });

  return (
    <PageContainer>
      <Heading title={"Edit Procedure"} description={"Edit procedure."} />
      <PromoterForm updateMutation={updateMutation} type="edit" id={id} />
    </PageContainer>
  );
}
