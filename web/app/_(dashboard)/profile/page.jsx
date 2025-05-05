"use client";
import UserForm from "@/components/forms/user";
import { toast } from "@/hooks/use-toast";
import { updateUser } from "@/service/users";
import { MainContext } from "@/store/context";
import { useMutation } from "@tanstack/react-query";
import React, { useContext } from "react";

export default function ProfilePage() {
  const { user, isUserLoading } = useContext(MainContext);

  const updateMutation = useMutation({
    mutationFn: (data) => updateUser(data, user.id),
    onSuccess: () => {
      toast({ title: "Success", description: "Updated." });
    },
    onError: (error) =>
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error?.response?.date?.message ??
          error?.message ??
          "Something went wrong!",
      }),
  });

  if (isUserLoading) return <Spinner />;
  if (!user) return;

  return (
    <div>
      <UserForm id={user.id} type={"edit"} updateMutation={updateMutation} />
    </div>
  );
}
