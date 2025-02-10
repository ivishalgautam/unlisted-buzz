"use client";

import EventForm from "@/components/forms/event";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { updateEvent } from "@/server/event";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ProcedureEditPage({ params: { id } }) {
  const router = useRouter();
  const updateMutation = useMutation({
    mutationFn: (data) => updateEvent(id, data),
    onSuccess: () => router.replace("/events"),
    onError: (error) => toast.error(error?.message || "Error creating."),
  });

  return (
    <PageContainer>
      <Heading title={"Edit events"} description={"Edit events."} />
      <EventForm updateMutation={updateMutation} type="edit" id={id} />
    </PageContainer>
  );
}
