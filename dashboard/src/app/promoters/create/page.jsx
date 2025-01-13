"use client";
import PromoterForm from "@/components/forms/promoter";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { createPromoter } from "@/server/promoter";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function EveCreatePage() {
  const router = useRouter();

  const createMutation = useMutation({
    mutationFn: createPromoter,
    onSuccess: () => router.replace("/promoters"),
    onError: (error) => toast.error(error?.message || "Error creating."),
  });

  return (
    <PageContainer>
      <Heading title={"Create Event"} description={"Create Event."} />
      <PromoterForm createMutation={createMutation} />
    </PageContainer>
  );
}
