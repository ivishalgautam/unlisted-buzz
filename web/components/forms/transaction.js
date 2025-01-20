import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { transactionSchema } from "@/validation-schema/transaction";
import { useState } from "react";

export function TransactionForm({ createMutation, type, id, shareId }) {
  const methods = useForm({
    resolver: zodResolver(transactionSchema),
    defaultValues: { type },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { data, isLoading, isError, error } = useFetchShares();
  const onSubmitForm = (data) => {
    const newStock = {
      investment_id: id,
      quantity: data.quantity,
      price: data.price,
      type: data.type,
      date: data.date,
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
            <ShareSelect data={data} shareId={shareId} />
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
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            {...register("price", { valueAsNumber: true })}
            placeholder="Enter price"
          />
          <ErrorMessage
            errors={errors}
            name="price"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>
        <div>
          <Label htmlFor="date">Date of {type}</Label>
          <Input id="date" type="date" {...register("date")} />
          <ErrorMessage
            errors={errors}
            name="date"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}

function ShareSelect({ data, shareId }) {
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
                  aria-expanded={open}
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground",
                    { "pointer-events-none": !!shareId }
                  )}
                  disabled={!!shareId}
                >
                  {shareId
                    ? data.find((share) => share.value === shareId)?.label
                    : field.value
                      ? data.find((share) => share.value === field.value)?.label
                      : "Select share"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              {!shareId && (
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
              )}
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
