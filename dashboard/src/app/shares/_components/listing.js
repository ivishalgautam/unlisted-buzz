"use client";
import { columns } from "../columns";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { DataTable } from "@/components/ui/table/data-table";
import { useRouter, useSearchParams } from "next/navigation";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { DeleteDialog } from "./dialog/delete-dialog";
import { deleteShare, fetchShares, updatePrice } from "@/server/share";
import { PriceUpdateDialog } from "./dialog/price-update";

export default function Listing() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPriceUpdateOpen, setIsPriceUpdateOpen] = useState(false);
  const [id, setId] = useState(null);
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const searchParamStr = searchParams.toString();
  const router = useRouter();

  function openModal(type) {
    if (!type) return toast.warning("Please provide which modal should open!");
    if (type === "delete") {
      setIsDeleteOpen(true);
    }
    if (type === "updatePrice") {
      setIsPriceUpdateOpen(true);
    }
  }

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryFn: () => fetchShares(searchParamStr),
    queryKey: ["shares", searchParamStr],
    enabled: !!searchParamStr,
  });

  const priceUpdateMutation = useMutation({
    mutationFn: (data) => updatePrice(id, data),
    onSuccess: () => {
      toast.success("Price updated.");
      queryClient.invalidateQueries(["shares", searchParamStr]);
      setIsPriceUpdateOpen(false);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message ?? error?.message ?? "error");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: ({ id }) => deleteShare(id),
    onSuccess: () => {
      toast.success("Sector deleted.");
      queryClient.invalidateQueries(["shares", searchParamStr]);
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
        data={data.shares}
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

      <PriceUpdateDialog
        {...{
          isOpen: isPriceUpdateOpen,
          setIsOpen: setIsPriceUpdateOpen,
          createMutation: priceUpdateMutation,
          id,
        }}
      />
    </div>
  );
}
