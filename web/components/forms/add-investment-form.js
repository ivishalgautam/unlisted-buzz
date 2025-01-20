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

export function AddInvestmentForm({ createMutation, shareType }) {
  const methods = useForm({ resolver: zodResolver(newStockSchema) });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { data, isLoading, isError, error } = useFetchShares();
  const onSubmitForm = (data) => {
    const newStock = {
      share_id: data.share_id,
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
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <div>
                <Button
                  type="button"
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? data.find((share) => share.value === field.value)?.label
                    : "Select share"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search share..." />
                <CommandList>
                  <CommandEmpty>No share found.</CommandEmpty>
                  <CommandGroup>
                    {data.map((share) => (
                      <CommandItem
                        value={share.label}
                        key={share.value}
                        onSelect={() => {
                          setValue("share_id", share.value);
                          setOpen(false);
                        }}
                      >
                        {share.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            share.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
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
