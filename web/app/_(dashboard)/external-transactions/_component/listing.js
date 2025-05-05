"use client";
import { columns } from "../columns";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DataTable } from "@/components/ui/table/data-table";
import { useRouter, useSearchParams } from "next/navigation";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
// import { DeleteDialog } from "./delete-dialog";
import { deleteInvestment, fetchInvestments } from "@/service/investment";
import { TransactionDialog } from "./dialog/transaction-dialog";
import {
  createTransaction,
  fetchExternalTransactions,
  fetchTransactions,
} from "@/service/transaction";
import { toast } from "@/hooks/use-toast";

export default function Listing() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);
  const [id, setId] = useState(null);
  const [shareId, setShareId] = useState(null);
  const [type, setType] = useState("");
  const [shareType, setShareType] = useState("");
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const searchParamStr = searchParams.toString();
  const router = useRouter();
  function openModal(type) {
    if (!type) return toast.warning("Please provide which modal should open!");
    if (type === "delete") {
      setIsDeleteOpen(true);
    }
    if (type === "newTransaction") {
      setIsNewTransactionOpen(true);
    }
  }

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryFn: () => fetchExternalTransactions(searchParamStr),
    queryKey: ["external-transactions", searchParamStr],
    enabled: !!searchParamStr,
  });

  const createTransactionMutation = useMutation({
    mutationFn: createTransaction,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "You have successfully added transaction.",
      });
      queryClient.invalidateQueries(["investments", searchParamStr]);
      setIsNewTransactionOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description:
          error?.response?.data?.message ?? error?.message ?? "Error",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: ({ id }) => deleteInvestment(id),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "You have successfully deleted investment.",
      });
      queryClient.invalidateQueries(["investments", searchParamStr]);
      setIsDeleteOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description:
          error?.response?.data?.message ?? error?.message ?? "error",
        variant: "destructive",
      });
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
        columns={columns(openModal, setId, setType, setShareType, setShareId)}
        data={data.transactions}
        totalItems={data.total}
      />

      <TransactionDialog
        {...{
          isOpen: isNewTransactionOpen,
          setIsOpen: setIsNewTransactionOpen,
          createMutation: createTransactionMutation,
          id,
          type,
          shareType,
          shareId,
        }}
      />
    </div>
  );
}
