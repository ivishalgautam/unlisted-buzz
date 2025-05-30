"use client";
import { useEffect, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Editor } from "primereact/editor";
import { H4, Large } from "../ui/typography";
import { Switch } from "../ui/switch";
import InputErrorMessage from "../ui/input-error-message";
import useFileHandler from "@/hooks/use-file-handler";
import { Trash } from "lucide-react";
import { debounce } from "lodash";

export default function BlogForm({
  type,
  blogId,
  handleCreate,
  handleUpdate,
  updateMutation,
}) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      image: "",
      short_description: "",
      content: "",
      is_active: false,
      meta_title: "",
      meta_description: "",
      meta_keywords: "",
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "faq",
  });
  const [text, setText] = useState("");
  const editorRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSetText = debounce(setText, 1000);

  const { handleFileChange, deleteFile, image, setImage } = useFileHandler();

  const onSubmit = (data) => {
    const payload = {
      image: data.image,
      categories: data?.categories?.map(({ value }) => value),
      title: data.title,
      slug: data.slug ?? data.title,
      short_description: data.short_description,
      content: text,
      is_active: data.is_active,
      meta_title: data.meta_title,
      meta_description: data.meta_description,
      meta_keywords: data.meta_keywords,
      faq: data.faq,
    };

    if (type === "create") {
      handleCreate(payload);
    } else if (type === "edit") {
      updateMutation.mutate(payload);
    }
  };

  useEffect(() => {
    // Fetch data from API and populate the form with prefilled values
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await http().get(
          `${endpoints.blogs.getAll}/getById/${blogId}`,
        );

        data && setValue("title", data?.title);
        data && setValue("short_description", data?.short_description);
        data && setValue("image", data?.image);
        data && setText(data?.content);
        data && setImage(data?.image);
        data && setValue("slug", data.slug);
        data && setValue("meta_title", data.meta_title);
        data && setValue("meta_description", data.meta_description);
        data && setValue("meta_keywords", data.meta_keywords);
        // data && setValue("slug", data.slug);
        data && setValue("is_active", data.is_active);
        data && data?.faq && setValue("faq", data.faq);
        // data?.faq?.map(({ question, answer }) => {
        //   append({ question, answer });
        // });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (blogId && type === "edit") {
      fetchData();
    }
  }, [blogId, type, , setImage, setValue]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const element = document.querySelector(".tox-notifications-container");
      if (element) {
        element.classList.add("tox-notifications-container-display-block");
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl bg-white">
      <div className="mt-6 space-y-10">
        <div className="space-y-2">
          {/* title */}
          <div className="col-span-3">
            <Label htmlFor="title">Title</Label>
            <Input
              {...register("title", {
                required: "required",
              })}
              type="text"
              id="title"
              placeholder="Title"
            />
            {errors.title && (
              <span className="text-red-600">{errors.title.message}</span>
            )}
          </div>

          {/* short desc */}
          <div className="col-span-3">
            <Label htmlFor="short_description">Short description</Label>
            <Textarea
              {...register("short_description", {
                required: "required",
              })}
              type="text"
              id="short_description"
              placeholder="Short description"
            />
            {errors.short_description && (
              <span className="text-red-600">
                {errors.short_description.message}
              </span>
            )}
          </div>

          {/* content */}
          <div className="col-span-3">
            <Label htmlFor="content">Content</Label>
            <Editor
              focus={editorRef.current}
              readOnly={type === "view"}
              name="blog"
              value={text}
              onTextChange={(e) => debouncedSetText(e.htmlValue)}
              style={{ height: "320px" }}
            />
            {/* <Editor
              apiKey="26eohrlp913qxavz9xyrl5wszw74jii703o230piigrz0ync"
              onInit={(_evt, editor) => (editorRef.current = editor)}
              init={{
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
                mergetags_list: [
                  { value: "First.Name", title: "First Name" },
                  { value: "Email", title: "Email" },
                ],
                ai_request: (request, respondWith) =>
                  respondWith.string(() =>
                    Promise.reject("See docs to implement AI Assistant"),
                  ),
              }}
              initialValue=""
              onEditorChange={(content) => setText(content)}
              value={text}
            /> */}
          </div>

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
        </div>

        {/* faq */}
        <div className="col-span-3 space-y-2 bg-white">
          <Large>FAQs</Large>

          <div className="space-y-4">
            {fields.map((field, key) => (
              <div key={key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <H4> Question: {key + 1}</H4>
                  {type !== "view" && (
                    <Button
                      type="button"
                      size="icon"
                      variant="destructive"
                      onClick={() => remove(key)}
                    >
                      <AiOutlineDelete size={20} />
                    </Button>
                  )}
                </div>
                <div>
                  <Label>Question</Label>
                  <Input
                    {...register(`faq.${key}.question`, {
                      required: "required",
                    })}
                    placeholder="Question"
                    disabled={type === "view"}
                  />
                  {errors.faq && (
                    <span className="text-red-600">
                      {errors.faq?.[key]?.question?.message}
                    </span>
                  )}
                </div>
                <div>
                  <Label>Answer</Label>
                  <Textarea
                    {...register(`faq.${key}.answer`, {
                      required: "required",
                    })}
                    placeholder="Answer"
                    disabled={type === "view"}
                  />
                  {errors.faq && (
                    <span className="text-red-600">
                      {errors.faq?.[key]?.answer?.message}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          {type !== "view" && (
            <Button type="button" onClick={() => append()}>
              Add
            </Button>
          )}
        </div>

        <div className="space-y-4">
          <Large>SEO</Large>
          <div className="space-y-2">
            {/* meta title */}
            <div>
              <Label htmlFor="meta_title">Meta title</Label>
              <Input
                type="text"
                {...register("meta_title")}
                placeholder="Meta title"
              />
            </div>

            {/* meta description */}
            <div>
              <Label htmlFor="meta_description">Meta description</Label>
              <Textarea
                {...register("meta_description")}
                placeholder="Meta description"
              />
            </div>

            {/* meta keywords */}
            <div>
              <Label htmlFor="meta_keywords">Meta keywords</Label>
              <Textarea
                {...register("meta_keywords")}
                placeholder="Meta keywords"
              />
            </div>

            {/* slug */}
            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input type="text" {...register("slug")} placeholder="Slug" />
            </div>
          </div>
        </div>

        {/* is featured */}
        <div className="col-span-3 mt-4 flex flex-col justify-center gap-1">
          <Label htmlFor="is_active">
            {watch("is_active") === true ? "Published" : "Unpublished"}
          </Label>
          <Controller
            control={control}
            name="is_active"
            render={({ field: { onChange, value } }) => (
              <Switch
                onCheckedChange={onChange}
                checked={value}
                disabled={type === "view" || type === "delete"}
              />
            )}
          />
        </div>

        <div>
          <Button>Submit</Button>
        </div>
      </div>
    </form>
  );
}
