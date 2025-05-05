"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddInvestmentForm } from "@/components/forms/add-investment-form";
import { H5 } from "@/components/typography";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Listing from "./_component/listing";
import {
  createInvestment,
  fetchInvestmentPortfolio,
} from "@/service/investment";
import InvestmentCards from "./_component/investment-cards";

export default function PortfolioPage() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryFn: () => fetchInvestmentPortfolio(),
    queryKey: ["investment-portfolio"],
  });

  const createMutation = useMutation({
    mutationFn: createInvestment,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "You have successfully added investment.",
      });
      setOpen(false);
      queryClient.invalidateQueries(["investments"]);
      queryClient.invalidateQueries(["investment-portfolio"]);
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

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div>
        {isLoading ? (
          "Loading..."
        ) : isError ? (
          error?.message
        ) : (
          <InvestmentCards data={data} />
        )}
      </div>
      <div className="space-y-2">
        <H5 className="">Current Investments</H5>
        {/* <StockTable investments={[]} /> */}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <H5 className="">External Investments</H5>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="mt-4">
                <Plus />
                Add External share
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add External share</DialogTitle>
              </DialogHeader>
              <AddInvestmentForm
                createMutation={createMutation}
                shareType={"external"}
              />
            </DialogContent>
          </Dialog>
        </div>
        <Listing />
      </div>
    </div>
  );
}
