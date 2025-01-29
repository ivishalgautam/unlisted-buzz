"use client";
import { columns } from "../columns";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { DataTable } from "@/components/ui/table/data-table";
import { useRouter, useSearchParams } from "next/navigation";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { DeleteDialog } from "./delete-dialog";
import { deleteComment, fetchComments } from "@/server/comment";
import { ViewDialog } from "./view-dialog";

export default function Listing() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isViewOpened, setIsViewOpened] = useState(false);
  const [id, setId] = useState(null);
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const searchParamStr = searchParams.toString();
  const router = useRouter();

  function openModal(type) {
    if (!type) return toast.warning("Please provide which modal should open!");
    if (type === "view") {
      setIsViewOpened(true);
    }
    if (type === "delete") {
      setIsDeleteOpen(true);
    }
  }

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryFn: () => fetchComments(searchParamStr),
    queryKey: ["comments", searchParamStr],
    enabled: !!searchParamStr,
  });

  const deleteMutation = useMutation({
    mutationFn: ({ id }) => deleteComment(id),
    onSuccess: () => {
      toast.success("Sector deleted.");
      queryClient.invalidateQueries(["comments", searchParamStr]);
      setIsDeleteOpen(false);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message ?? error?.message ?? "error");
    },
  });

  const handleDelete = async (id) => {
    deleteMutation.mutate({ id });
  };

  useEffect(() => {
    if (!searchParamStr) {
      const params = new URLSearchParams();
      params.set("page", 1);
      params.set("limit", 10);
      router.replace(`?${params.toString()}`);
    }
  }, [searchParamStr, router]);

  if (isLoading || isFetching)
    return <DataTableSkeleton columnCount={5} rowCount={10} />;

  if (isError) error?.message ?? "error";
  return (
    <div className="rounded-lg border-input">
      <DataTable
        columns={columns(openModal, setId)}
        data={data.comments}
        totalItems={data.total}
      />

      <DeleteDialog
        {...{
          isOpen: isDeleteOpen,
          setIsOpen: setIsDeleteOpen,
          handleDelete: () => handleDelete(id),
          id,
        }}
      />

      <ViewDialog
        {...{
          isOpen: isViewOpened,
          setIsOpen: setIsViewOpened,
          id,
        }}
      />
    </div>
  );
}
