import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/lib/utils";
import useFetchShares from "@/hooks/use-fetch-shares";
import { newStockSchema } from "@/validation-schema/stock";
import { useState } from "react";
import ReactSelect from "react-select";

export function AddInvestmentForm({ createMutation, shareType }) {
  const methods = useForm({ resolver: zodResolver(newStockSchema) });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;
  const { data, isLoading, isError, error } = useFetchShares();
  const onSubmitForm = (data) => {
    const newStock = {
      share_id: data.share_id.value,
      quantity: data.quantity,
      purchase_price: data.purchase_price,
      date_of_purchase: data.date_of_purchase,
      share_type: shareType,
    };
    createMutation.mutate(newStock);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
        <div>
          {isLoading ? (
            "Loading..."
          ) : isError ? (
            error?.message
          ) : (
            <ShareSelect data={data} />
          )}
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            {...register("quantity", { valueAsNumber: true })}
            placeholder="Enter Quantity"
          />
          <ErrorMessage
            errors={errors}
            name="quantity"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>
        <div>
          <Label htmlFor="purchase_price">Purchase Price</Label>
          <Input
            id="purchase_price"
            type="number"
            step="0.01"
            {...register("purchase_price", { valueAsNumber: true })}
            placeholder="Enter Purchase price"
          />
          <ErrorMessage
            errors={errors}
            name="purchase_price"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>
        <div>
          <Label htmlFor="date_of_purchase">Date of Purchase</Label>
          <Input
            id="date_of_purchase"
            type="date"
            {...register("date_of_purchase")}
          />
          <ErrorMessage
            errors={errors}
            name="date_of_purchase"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>
        <Button type="submit">Add Stock</Button>
      </form>
    </FormProvider>
  );
}

function ShareSelect({ data }) {
  const [open, setOpen] = useState(false);

  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name="share_id"
      render={({ field }) => (
        <div className="flex flex-col">
          <Label htmlFor="share_id">Stock</Label>
          <ReactSelect
            options={data}
            onChange={field.onChange}
            value={field.value}
          />
          <ErrorMessage
            errors={errors}
            name="share_id"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>
      )}
    />
  );
}
