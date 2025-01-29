"use client";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "../Spinner";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Large, Muted } from "../ui/typography";
import { Plus, Trash, Trash2 } from "lucide-react";
import Image from "next/image";
import useFileHandler from "@/hooks/use-file-handler";
import { fetchShare } from "@/server/share";
import { shareSchema } from "@/validation-schemas/share";
import SubSection from "../layout/sub-section";
import { Editor } from "primereact/editor";
import { debounce } from "lodash";
import InputErrorMessage from "../ui/input-error-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useFetchSectors from "@/hooks/use-fetch-sectors";
import { Skeleton } from "../ui/skeleton";
import { Switch } from "../ui/switch";
import { financials } from "@/data";

export default function ShareForm({
  type = "create",
  id,
  updateMutation,
  createMutation,
}) {
  const form = useForm({
    resolver: zodResolver(shareSchema),
    defaultValues: {
      is_ipo: false,
      fundamentals: [],
      financials: [],
      faqs: [],
      shareholding_patterns: [],
      peer_ratio: {
        headers: [],
        rows: [],
      },
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
  } = form;

  const [, reRender] = useState(false);
  const [text, setText] = useState("");
  const editorRef = useRef(null);
  const debouncedSetText = debounce(setText, 1000);

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchShare(id),
    queryKey: [`share-${id}`],
    enabled: !!id && !!(type === "edit"),
  });

  const onSubmit = async (data) => {
    console.log({ data });
    const payload = { ...data, about: text };
    if (type === "edit") {
      updateMutation.mutate(payload);
    }
    if (type === "create") {
      createMutation.mutate(payload);
    }
  };
  const { handleFileChange, deleteFile, image, setImage } = useFileHandler();
  useEffect(() => {
    if (data) {
      console.log({ data });
      setValue("name", data.name);
      setValue("image", data.image);
      setValue("price", data.price);
      setValue("current_market_price", data.current_market_price);
      setValue("sector_id", data.sector_id);
      setValue("is_featured", data.is_featured);
      setValue("is_drhp_filed", data.is_drhp_filed);
      if (!editorRef.current) {
        data && setText(data?.about);
        editorRef.current = true;
      }
      setValue("is_ipo", data.is_ipo);
      setValue("ipo_price", data.ipo_price);
      setValue("fundamentals", data.fundamentals);
      setValue("financials", data.financials);
      setValue("shareholding_patterns", data.shareholding_patterns);
      setValue("peer_ratio", data.peer_ratio);
      setValue("promoters_or_management", data.promoters_or_management);
      setValue("faqs", data.faqs);
      setValue("meta_title", data.meta_title);
      setValue("meta_description", data.meta_description);
      setValue("meta_keywords", data.meta_keywords);
      setImage(data.image);
    }
    reRender(true);
  }, [data, setValue, setImage]);

  if (type === "edit" && isLoading) return <Spinner />;
  if (type === "edit" && isError) return error?.message ?? "error";
  const isButtonLoading =
    (type === "create" && createMutation.isLoading) ||
    (type === "edit" && updateMutation.isLoading);

  console.log(errors);
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mx-auto flex items-center justify-start">
          <div className="w-full space-y-8">
            {/* basic details */}
            <div className="space-y-2">
              <Large>Basic</Large>
              <BasicDetails
                {...{
                  handleFileChange,
                  setValue,
                  type,
                  updateMutation,
                  errors,
                  image,
                  deleteFile,
                  register,
                  control,
                  watch,
                }}
              />
            </div>

            {/* about */}
            <div className="space-y-2">
              <Large>About</Large>
              <SubSection>
                <Controller
                  control={control}
                  name="about"
                  render={({ field }) => (
                    <Editor
                      focus={editorRef.current}
                      readOnly={type === "view"}
                      name="blog"
                      value={text}
                      onTextChange={(e) => debouncedSetText(e.htmlValue)}
                      style={{ height: "320px" }}
                    />
                  )}
                />
              </SubSection>
            </div>

            {/* Fundamentals */}
            <div className="space-y-2">
              <Large>Fundamentals</Large>
              <Fundamentals {...{ register, errors, control }} />
            </div>

            {/* financials */}
            <div className="space-y-2">
              <Large>Financials</Large>
              <DynamicTabsTables {...{ control, register, errors }} />
            </div>

            {/* shareholding patterns */}
            <div className="space-y-2">
              <Large>Shareholding patterns</Large>
              <ShareholdingPatterns {...{ control, register, errors }} />
            </div>

            {/* peer ratio */}
            <div className="space-y-2">
              <Large>Peer Ratio</Large>
              <PeerRatio {...{ control, register, watch, setValue, errors }} />
            </div>

            {/* promoters or management */}
            <div className="space-y-2">
              <Large>Promoters or Management</Large>
              <PromoterOrManagement
                {...{ control, register, watch, setValue, errors }}
              />
            </div>

            {/* faq */}
            <div className="space-y-2">
              <Large>FAQs</Large>
              <FAQs register={register} control={control} />
            </div>

            {/* seo */}
            <div className="space-y-2">
              <Large>Seo</Large>
              <SEO register={register} />
            </div>

            <div className="!mt-6 text-end">
              <Button className="" disabled={isButtonLoading}>
                Submit
                {isButtonLoading && (
                  <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

function BasicDetails({
  handleFileChange,
  setValue,
  type,
  updateMutation,
  errors,
  image,
  deleteFile,
  register,
  control,
  watch,
}) {
  const { data: sectors, isLoading, isError, error } = useFetchSectors();
  const isIpo = watch("is_ipo");
  return (
    <SubSection className="space-y-4 ">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4">
        {/* image */}
        <div className="col-span-full space-y-4">
          <div className="flex flex-col items-center justify-center">
            <Input
              type="file"
              placeholder="Select Image"
              onChange={(e) =>
                handleFileChange(
                  e,
                  "image",
                  setValue,
                  type === "edit" ? updateMutation.mutate : null,
                  type,
                )
              }
              multiple={false}
              accept="image/png, image/jpeg, image/jpg, image/webp"
              className={`max-w-56`}
            />
            {errors.image && (
              <InputErrorMessage>{errors.image.message}</InputErrorMessage>
            )}
          </div>

          <div className="flex items-center justify-center gap-4 rounded-lg border border-dashed border-gray-300 p-8">
            {image ? (
              <figure className="relative size-32">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${image}`}
                  width={500}
                  height={500}
                  alt="image"
                  className="h-full w-full"
                  priority={true}
                />
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => deleteFile(image)}
                  className="absolute -right-2 -top-2"
                  size="icon"
                >
                  <Trash size={20} />
                </Button>
              </figure>
            ) : (
              <div>No file selected</div>
            )}
          </div>
        </div>

        {/* Name */}
        <div>
          <Label>Name</Label>
          <Input {...register("name")} placeholder="Enter name" />
          {errors.name && (
            <InputErrorMessage>{errors.name.message}</InputErrorMessage>
          )}
        </div>

        {/* price */}
        <div>
          <Label>Price</Label>
          <Input
            type="number"
            {...register("price", { valueAsNumber: true })}
            placeholder="Enter price"
          />
          {errors.price && (
            <InputErrorMessage>{errors.price.message}</InputErrorMessage>
          )}
        </div>

        {/* current market price */}
        <div>
          <Label>Current Market Price</Label>
          <Input
            type="number"
            {...register("current_market_price", { valueAsNumber: true })}
            placeholder="Enter Current market price"
          />
          {errors.current_market_price && (
            <InputErrorMessage>
              {errors.current_market_price.message}
            </InputErrorMessage>
          )}
        </div>

        {/* sector */}
        <div>
          <Label>Sector</Label>
          {isLoading ? (
            <Skeleton className="h-10 w-full rounded-md" />
          ) : isError ? (
            <div>{error.message}</div>
          ) : (
            <Controller
              control={control}
              name="sector_id"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem value={sector.value} key={sector.value}>
                        {sector.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          )}
          {errors.sector_id && (
            <InputErrorMessage>{errors.sector_id.message}</InputErrorMessage>
          )}
        </div>

        {/* ipo */}
        <div>
          <Label>IPO</Label>
          <div>
            <Controller
              control={control}
              name="is_ipo"
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        {/* ipo price */}
        {isIpo && (
          <div>
            <Label>IPO Price</Label>
            <Input
              type="number"
              {...register("ipo_price", {
                required: "required*",
                valueAsNumber: true,
              })}
              placeholder="Enter IPO Price"
            />
            {errors.ipo_price && (
              <InputErrorMessage>{errors.ipo_price.message}</InputErrorMessage>
            )}
          </div>
        )}
        <div className="col-span-full grid grid-cols-3 gap-2">
          {/* Is Featured */}
          <div>
            <Controller
              control={control}
              name="is_featured"
              render={({ field }) => (
                <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                  <div>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                  <div className="space-y-1 leading-none">
                    <Label>Featured</Label>
                    <Muted>Mark this share as featured.</Muted>
                  </div>
                </div>
              )}
            />
          </div>

          {/* is_drhp_filed */}
          <div>
            <Controller
              control={control}
              name="is_drhp_filed"
              render={({ field }) => (
                <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                  <div>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                  <div className="space-y-1 leading-none">
                    <Label>DRHP Filed</Label>
                    <Muted>Mark this share as DRHP Filed.</Muted>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </SubSection>
  );
}

function Fundamentals({}) {
  const {
    register,
    formState: { errors },
    control,
    watch,
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fundamentals",
  });
  console.log({ fields });
  return (
    <SubSection className={"space-y-4"}>
      <div className="space-y-2">
        {fields.map((field, index) => (
          <div key={field.id}>
            <div className="flex gap-2">
              {/* Key Input */}
              <div>
                <Input
                  type="text"
                  placeholder="Key"
                  {...register(`fundamentals.${index}.key`)}
                />
                {errors.fundamentals?.[index]?.key && (
                  <InputErrorMessage>
                    {errors.fundamentals?.[index]?.key?.message}
                  </InputErrorMessage>
                )}
              </div>

              {/* Value Input */}
              <div>
                <Input
                  type="text"
                  placeholder="Value"
                  {...register(`fundamentals.${index}.value`)}
                />
                {errors.fundamentals?.[index]?.key && (
                  <InputErrorMessage>
                    {errors.fundamentals?.[index]?.key?.message}
                  </InputErrorMessage>
                )}
              </div>

              {/* Remove Button */}
              <Button
                type="button"
                onClick={() => remove(index)}
                variant="destructive"
                size="icon"
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Add Button */}
      <Button
        type="button"
        onClick={() => append({ key: "", value: "" })}
        variant="outline"
        className="h-7"
      >
        <Plus /> Add Field
      </Button>
    </SubSection>
  );
}

function DynamicTabsTables({ control, register }) {
  const [reRender, setReRender] = useState(false);

  const { fields: tabs, append: appendTab } = useFieldArray({
    control,
    name: "financials",
  });

  const addTab = () => {
    appendTab({
      tab: "",
      tables: [
        {
          title: "",
          table: {
            headers: [],
            rows: [],
          },
        },
      ],
    });
    setReRender(!reRender);
  };

  const addTable = (tabIndex) => {
    tabs[tabIndex].tables.push({
      title: "",
      table: {
        headers: [],
        rows: [],
      },
    });
    setReRender(!reRender);
  };

  const addRow = (tabIndex, tableIndex) => {
    tabs[tabIndex].tables[tableIndex].table.rows.push(
      new Array(tabs[tabIndex].tables[tableIndex].table.headers.length).fill(
        "",
      ),
    );
    setReRender(!reRender);
  };

  const addHeader = (tabIndex, tableIndex) => {
    tabs[tabIndex].tables[tableIndex].table.headers.push("");
    tabs[tabIndex].tables[tableIndex].table.rows.forEach((row) => row.push(""));
    setReRender(!reRender);
  };

  const deleteHeader = (tabIndex, tableIndex, headerIndex) => {
    tabs[tabIndex].tables[tableIndex].table.headers.splice(headerIndex, 1);

    tabs[tabIndex].tables[tableIndex].table.rows.forEach((row) => {
      row.splice(headerIndex, 1);
    });
    setReRender(!reRender);
  };

  return (
    <SubSection>
      {tabs.map((tab, tabIndex) => (
        <div key={tabIndex} className="mb-6 rounded-lg bg-gray-100 p-4">
          <div className="flex items-center justify-between">
            <Input
              {...register(`financials.${tabIndex}.tab`)}
              placeholder={`Tab ${tabIndex + 1} name.`}
              className="max-w-xs"
            />
            <Button type="button" onClick={addTab} className="h-6 bg-blue-500">
              <Plus /> Add Tab
            </Button>
          </div>

          {tab.tables.map((table, tableIndex) => (
            <div
              key={tableIndex}
              className="mt-4 rounded-lg bg-white p-4 shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <Input
                  {...register(
                    `financials.${tabIndex}.tables.${tableIndex}.title`,
                    { required: "required*" },
                  )}
                  className="w-1/3 border p-2"
                  placeholder="Table Title"
                  defaultValue={table.title}
                />
                <Button
                  type="button"
                  onClick={() => addTable(tabIndex)}
                  className="h-6 bg-green-500"
                >
                  <Plus /> Add Table
                </Button>
              </div>

              <div>
                <h3 className="mb-2">Headers</h3>
                <div className="mb-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                  {table.table.headers.map((header, headerIndex) => (
                    <div key={headerIndex} className="flex items-center gap-1">
                      <Input
                        {...register(
                          `financials.${tabIndex}.tables.${tableIndex}.table.headers.${headerIndex}`,
                          { required: "required*" },
                        )}
                        placeholder={`Header ${headerIndex + 1}`}
                        defaultValue={header}
                      />
                      <Button
                        type="button"
                        onClick={() =>
                          deleteHeader(tabIndex, tableIndex, headerIndex)
                        }
                        variant="destructive"
                        size="icon"
                        className="shrink-0"
                      >
                        <Trash />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  onClick={() => addHeader(tabIndex, tableIndex)}
                  className="h-6 bg-yellow-500"
                >
                  Add Header
                </Button>

                <h3 className="mb-2">Rows</h3>
                <div>
                  {table.table.rows.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="mb-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4"
                    >
                      {row.map((cell, cellIndex) => (
                        <Input
                          key={cellIndex}
                          {...register(
                            `financials.${tabIndex}.tables.${tableIndex}.table.rows.${rowIndex}.${cellIndex}`,
                            {
                              required: "required*",
                            },
                          )}
                          placeholder={`Cell ${cellIndex + 1}`}
                          defaultValue={cell}
                        />
                      ))}
                    </div>
                  ))}
                  <Button
                    type="button"
                    onClick={() => addRow(tabIndex, tableIndex)}
                    className="h-6 bg-blue-500"
                  >
                    Add Row
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <Button type="button" onClick={addTab} className="h-6 bg-blue-500">
        <Plus /> Add Tab
      </Button>
    </SubSection>
  );
}

function ShareholdingPatterns({ control, register }) {
  const [reRender, setReRender] = useState(false);
  const { fields: patterns, append } = useFieldArray({
    control,
    name: "shareholding_patterns",
  });

  const appendYear = () => {
    append({
      year: "",
      data: [{ year: "", progress: "" }],
    });
  };

  const addProgress = (patternInd) => {
    patterns[patternInd].data.push({ year: "", progress: "" });
    setReRender(!reRender);
  };

  return (
    <SubSection className={"space-y-4"}>
      {patterns.map((pattern, patternInd) => (
        <div key={patternInd} className="space-y-4 rounded-lg bg-gray-100 p-4">
          <div>
            <Label>Year</Label>
            <Input
              type="number"
              {...register(`shareholding_patterns.${patternInd}.year`, {
                required: "required*",
              })}
              placeholder={`Enter year`}
              className="max-w-xs"
            />
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg">
            {pattern.data.map((data, dataInd) => (
              <div
                key={dataInd}
                className="mb-2 flex items-center justify-start gap-2"
              >
                <div>
                  <Label>Heading</Label>
                  <Input
                    {...register(
                      `shareholding_patterns.${patternInd}.data.${dataInd}.heading`,
                    )}
                    placeholder="Enter heading"
                  />
                </div>
                <div>
                  <Label>Progress</Label>
                  <Input
                    type="number"
                    {...register(
                      `shareholding_patterns.${patternInd}.data.${dataInd}.progress`,
                      { valueAsNumber: true },
                    )}
                    placeholder="Enter progress"
                  />
                </div>
              </div>
            ))}
            <Button
              className="mt-4 h-6"
              onClick={() => addProgress(patternInd)}
              type="button"
            >
              <Plus /> Add progress{" "}
            </Button>
          </div>
        </div>
      ))}
      <Button type="button" onClick={appendYear} className="h-7">
        <Plus /> Add year
      </Button>
    </SubSection>
  );
}

function PeerRatio({ register, watch, setValue }) {
  const data = watch("peer_ratio");
  const [headers, setHeaders] = useState(data?.headers ?? []);
  const [rows, setRows] = useState(data?.rows ?? []);

  const addHeader = () => {
    const newHeaders = [...headers, ""];
    const newRows = rows.map((row) => [...row, ""]);

    setHeaders(newHeaders);
    setRows(newRows);

    setValue("peer_ratio.headers", newHeaders);
    setValue("peer_ratio.rows", newRows);
  };

  const removeHeader = (index) => {
    const updatedHeaders = headers.filter((_, idx) => idx !== index);
    const updatedRows = rows.map((row) =>
      row.filter((_, idx) => idx !== index),
    );

    setHeaders(updatedHeaders);
    setRows(updatedRows);

    setValue("peer_ratio.headers", updatedHeaders);
    setValue("peer_ratio.rows", updatedRows);
  };

  const addRow = () => {
    const newRow = new Array(headers.length).fill("");
    const updatedRows = [...rows, newRow];

    setRows(updatedRows);
    setValue("peer_ratio.rows", updatedRows);
  };

  const removeRow = (rowIndex) => {
    const updatedRows = rows.filter((_, idx) => idx !== rowIndex);

    setRows(updatedRows);
    setValue("peer_ratio.rows", updatedRows);
  };

  useEffect(() => {
    setHeaders(data?.headers ?? []);
    setRows(data?.rows ?? []);
  }, [data]);

  return (
    <SubSection>
      {/* Headers Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Headers</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {Array.isArray(headers) &&
            headers.map((header, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  type="text"
                  {...register(`peer_ratio.headers.${index}`, {
                    required: "Header is required",
                  })}
                  value={header}
                  onChange={(e) => {
                    const updatedHeaders = [...headers];
                    updatedHeaders[index] = e.target.value;
                    setHeaders(updatedHeaders);
                    setValue("peer_ratio.headers", updatedHeaders);
                  }}
                  placeholder={`Header ${index + 1}`}
                />
                <Button
                  type="button"
                  onClick={() => removeHeader(index)}
                  variant="destructive"
                >
                  <Trash />
                </Button>
              </div>
            ))}
        </div>
        <Button type="button" onClick={addHeader} className="mt-4 h-6">
          <Plus /> Add Header
        </Button>
      </div>

      {/* Rows Section */}
      {Array.isArray(headers) && headers.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Rows</h3>
          <div className="space-y-2">
            {Array.isArray(rows) &&
              rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex items-center justify-center gap-2"
                >
                  <div
                    key={rowIndex}
                    className="grid flex-grow grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 rounded-lg border p-2"
                  >
                    {row.map((cell, cellIndex) => (
                      <Input
                        key={cellIndex}
                        type="text"
                        {...register(
                          `peer_ratio.rows.${rowIndex}.${cellIndex}`,
                          {
                            required: "Cell is required",
                          },
                        )}
                        value={cell}
                        onChange={(e) => {
                          const updatedRows = [...rows];
                          updatedRows[rowIndex][cellIndex] = e.target.value;
                          setRows(updatedRows);
                          setValue("peer_ratio.rows", updatedRows);
                        }}
                        className="border p-2"
                        placeholder={`Row ${rowIndex + 1}, Cell ${cellIndex + 1}`}
                      />
                    ))}
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => removeRow(rowIndex)}
                  >
                    <Trash />
                  </Button>
                </div>
              ))}
          </div>
          <Button type="button" onClick={addRow} className="mt-4 h-6">
            <Plus /> Add Row
          </Button>
        </div>
      )}
    </SubSection>
  );
}

function PromoterOrManagement({ register, errors, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "promoters_or_management",
  });

  return (
    <SubSection className={"space-y-4"}>
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div
            className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 rounded-md border p-4"
            key={index}
          >
            {/* Name */}
            <div>
              <Label htmlFor={`promoters_or_management.${index}.name`}>
                Name
              </Label>
              <Input
                id={`promoters_or_management.${index}.name`}
                {...register(`promoters_or_management.${index}.name`)}
                placeholder="Enter name"
              />
              {errors?.promoters_or_management?.[index]?.name && (
                <InputErrorMessage>
                  {errors.promoters_or_management?.[index]?.name.message}
                </InputErrorMessage>
              )}
            </div>

            {/* Designation */}
            <div>
              <Label htmlFor="designation">Designation</Label>
              <Input
                id={`promoters_or_management.${index}.designation`}
                {...register(`promoters_or_management.${index}.designation`)}
                placeholder="Enter designation"
              />
              {errors?.promoters_or_management?.[index]?.designation && (
                <InputErrorMessage>
                  {errors.promoters_or_management?.[index]?.designation.message}
                </InputErrorMessage>
              )}
            </div>

            {/* Experience */}
            <div>
              <Label htmlFor="experience">Experience</Label>
              <Input
                id={`promoters_or_management.${index}.experience`}
                {...register(`promoters_or_management.${index}.experience`)}
                placeholder="Enter experience"
              />
              {errors?.promoters_or_management?.[index]?.experience && (
                <InputErrorMessage>
                  {errors.promoters_or_management?.[index]?.experience.message}
                </InputErrorMessage>
              )}
            </div>

            {/* LinkedIn */}
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input
                id={`promoters_or_management.${index}.linkedin`}
                {...register(`promoters_or_management.${index}.linkedin`)}
                placeholder="Enter LinkedIn profile URL"
              />
              {errors?.promoters_or_management?.[index]?.linkedin && (
                <InputErrorMessage>
                  {errors.promoters_or_management?.[index]?.linkedin.message}
                </InputErrorMessage>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Add Button */}
      <Button
        type="button"
        onClick={() => append({ key: "", value: "" })}
        variant="outline"
        className="h-7"
      >
        <Plus /> Add Field
      </Button>
    </SubSection>
  );
}
function FAQs({ register, control }) {
  const { fields, append, remove } = useFieldArray({ control, name: "faqs" });
  return (
    <SubSection className={"space-y-2"}>
      <div className="space-y-2">
        {fields.map((_, ind) => (
          <div key={ind} className="flex items-end gap-2">
            <div className="w-1/3">
              <Label>Question</Label>
              <Input
                {...register(`faqs.${ind}.question`)}
                placeholder="Enter question"
              />
            </div>
            <div className="w-full">
              <Label>Answer</Label>
              <Input
                {...register(`faqs.${ind}.answer`)}
                placeholder="Enter answer"
              />
            </div>
            <Button
              onClick={() => remove(ind)}
              type="button"
              variant="destructive"
              size="icon"
              className="flex-shrink-0"
            >
              <Trash />
            </Button>
          </div>
        ))}
      </div>

      <Button className="h-6" type="button" onClick={append}>
        <Plus /> Add
      </Button>
    </SubSection>
  );
}

function SEO({ register }) {
  return (
    <SubSection>
      {/* Meta Title */}
      <div>
        <Label>Meta Title</Label>
        <Input {...register("meta_title")} placeholder="Enter meta title" />
      </div>

      {/* Meta Description */}
      <div>
        <Label>Meta Description</Label>
        <Input
          {...register("meta_description")}
          placeholder="Enter meta description"
        />
      </div>

      {/* Meta Keywords */}
      <div className="col-span-2">
        <Label>Meta Keywords</Label>
        <Textarea
          {...register("meta_keywords")}
          placeholder="Enter meta keywords"
        />
      </div>
    </SubSection>
  );
}
