"use client";
import ShareForm from "@/components/forms/share";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { updateShare } from "@/server/share";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ShareEditPage({ params: { id } }) {
  const router = useRouter();
  const updateMutation = useMutation({
    mutationFn: (data) => updateShare(id, data),
    onSuccess: () => router.replace("/shares"),
    onError: (error) => toast.error(error?.message || "Error creating."),
  });

  return (
    <PageContainer className={"bg-transparent shadow-none"}>
      <Heading title={"Edit Share"} description={"Edit Share."} />
      <ShareForm updateMutation={updateMutation} type="edit" id={id} />
    </PageContainer>
  );
}
