"use client";
import EventForm from "@/components/forms/event";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { createEvent } from "@/server/event";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function EveCreatePage() {
  const router = useRouter();

  const createMutation = useMutation({
    mutationFn: createEvent,
    onSuccess: () => router.replace("/events"),
    onError: (error) => toast.error(error?.message || "Error creating."),
  });

  return (
    <PageContainer>
      <Heading title={"Create Event"} description={"Create Event."} />
      <EventForm createMutation={createMutation} />
    </PageContainer>
  );
}
