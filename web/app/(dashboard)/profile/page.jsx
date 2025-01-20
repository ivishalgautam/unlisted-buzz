"use client";
import UserForm from "@/components/forms/user";
import { updateUser } from "@/service/users";
import { MainContext } from "@/store/context";
import { useMutation } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "sonner";

export default function ProfilePage() {
  const { user, isUserLoading } = useContext(MainContext);

  const updateMutation = useMutation({
    mutationFn: (data) => updateUser(data, user.id),
    onSuccess: () => {},
    onError: (err) =>
      toast.error(err?.response?.data?.message ?? "Error updating"),
  });

  if (isUserLoading) return <Spinner />;
  if (!user) return;

  return (
    <div>
      <UserForm id={user.id} type={"edit"} updateMutation={updateMutation} />
    </div>
  );
}
